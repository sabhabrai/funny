import Phaser from "phaser";
import { afterEach, beforeAll, beforeEach, describe, expect, test, vi } from "vitest";
import GameManager from "../utils/gameManager";
import * as Overrides from "#app/overrides";
import { Species } from "#enums/species";
import { Abilities } from "#enums/abilities";
import { Moves } from "#enums/moves";
import { getMovePosition } from "../utils/gameManagerUtils";
import { DamagePhase, MoveEffectPhase, TurnEndPhase } from "#app/phases.js";
import { BattleStat } from "#app/data/battle-stat.js";

const TIMEOUT = 20 * 1000;

describe("Abilities - Parental Bond", () => {
  let phaserGame: Phaser.Game;
  let game: GameManager;

  beforeAll(() => {
    phaserGame = new Phaser.Game({
      type: Phaser.HEADLESS,
    });
  });

  afterEach(() => {
    game.phaseInterceptor.restoreOg();
  });

  beforeEach(() => {
    game = new GameManager(phaserGame);
    vi.spyOn(Overrides, "SINGLE_BATTLE_OVERRIDE", "get").mockReturnValue(true);
    vi.spyOn(Overrides, "ABILITY_OVERRIDE", "get").mockReturnValue(Abilities.PARENTAL_BOND);
    vi.spyOn(Overrides, "OPP_SPECIES_OVERRIDE", "get").mockReturnValue(Species.SNORLAX);
    vi.spyOn(Overrides, "OPP_ABILITY_OVERRIDE", "get").mockReturnValue(Abilities.INSOMNIA);
    vi.spyOn(Overrides, "OPP_MOVESET_OVERRIDE", "get").mockReturnValue([Moves.SPLASH, Moves.SPLASH, Moves.SPLASH, Moves.SPLASH]);
    vi.spyOn(Overrides, "STARTING_LEVEL_OVERRIDE", "get").mockReturnValue(100);
    vi.spyOn(Overrides, "OPP_LEVEL_OVERRIDE", "get").mockReturnValue(100);
  });

  test(
    "ability should add second strike to attack move",
    async () => {
      vi.spyOn(Overrides, "MOVESET_OVERRIDE", "get").mockReturnValue([Moves.TACKLE]);

      await game.startBattle();

      const leadPokemon = game.scene.getPlayerPokemon();
      expect(leadPokemon).not.toBe(undefined);

      const enemyPokemon = game.scene.getEnemyPokemon();
      expect(enemyPokemon).not.toBe(undefined);

      let enemyStartingHp = enemyPokemon.hp;

      game.doAttack(getMovePosition(game.scene, 0, Moves.TACKLE));

      await game.phaseInterceptor.to(DamagePhase);
      const firstStrikeDamage = enemyStartingHp - enemyPokemon.hp;
      enemyStartingHp = enemyPokemon.hp;

      await game.phaseInterceptor.to(TurnEndPhase, false);

      const secondStrikeDamage = enemyStartingHp - enemyPokemon.hp;

      expect(leadPokemon.turnData.hitCount).toBe(2);
      expect(secondStrikeDamage).toBe(Math.ceil(0.25 * firstStrikeDamage));
    }, TIMEOUT
  );

  test(
    "ability should apply secondary effects to both strikes",
    async () => {
      vi.spyOn(Overrides, "MOVESET_OVERRIDE", "get").mockReturnValue([Moves.POWER_UP_PUNCH]);
      vi.spyOn(Overrides, "OPP_SPECIES_OVERRIDE", "get").mockReturnValue(Species.AMOONGUSS);

      await game.startBattle([Species.CHARIZARD]);

      const leadPokemon = game.scene.getPlayerPokemon();
      expect(leadPokemon).not.toBe(undefined);

      const enemyPokemon = game.scene.getEnemyPokemon();
      expect(enemyPokemon).not.toBe(undefined);

      game.doAttack(getMovePosition(game.scene, 0, Moves.POWER_UP_PUNCH));

      await game.phaseInterceptor.to(TurnEndPhase, false);

      expect(leadPokemon.turnData.hitCount).toBe(2);
      expect(leadPokemon.summonData.battleStats[BattleStat.ATK]).toBe(2);
    }, TIMEOUT
  );

  test(
    "ability should not apply to Status moves",
    async () => {
      vi.spyOn(Overrides, "MOVESET_OVERRIDE", "get").mockReturnValue([Moves.BABY_DOLL_EYES]);

      await game.startBattle([Species.CHARIZARD]);

      const leadPokemon = game.scene.getPlayerPokemon();
      expect(leadPokemon).not.toBe(undefined);

      const enemyPokemon = game.scene.getEnemyPokemon();
      expect(enemyPokemon).not.toBe(undefined);

      game.doAttack(getMovePosition(game.scene, 0, Moves.BABY_DOLL_EYES));
      await game.phaseInterceptor.to(TurnEndPhase, false);

      expect(enemyPokemon.summonData.battleStats[BattleStat.ATK]).toBe(-1);
    }, TIMEOUT
  );

  test(
    "ability should not apply to multi-hit moves",
    async () => {
      vi.spyOn(Overrides, "MOVESET_OVERRIDE", "get").mockReturnValue([Moves.DOUBLE_HIT]);

      await game.startBattle([Species.CHARIZARD]);

      const leadPokemon = game.scene.getPlayerPokemon();
      expect(leadPokemon).not.toBe(undefined);

      const enemyPokemon = game.scene.getEnemyPokemon();
      expect(enemyPokemon).not.toBe(undefined);

      game.doAttack(getMovePosition(game.scene, 0, Moves.DOUBLE_HIT));

      await game.phaseInterceptor.to(MoveEffectPhase, false);

      vi.spyOn(game.scene.getCurrentPhase() as MoveEffectPhase, "hitCheck").mockReturnValue(true);

      await game.phaseInterceptor.to(TurnEndPhase, false);

      expect(leadPokemon.turnData.hitCount).toBe(2);
    }, TIMEOUT
  );

  test(
    "ability should not apply to self-sacrifice moves",
    async () => {
      vi.spyOn(Overrides, "MOVESET_OVERRIDE", "get").mockReturnValue([Moves.SELF_DESTRUCT]);

      await game.startBattle([Species.CHARIZARD]);

      const leadPokemon = game.scene.getPlayerPokemon();
      expect(leadPokemon).not.toBe(undefined);

      const enemyPokemon = game.scene.getEnemyPokemon();
      expect(enemyPokemon).not.toBe(undefined);

      game.doAttack(getMovePosition(game.scene, 0, Moves.SELF_DESTRUCT));

      await game.phaseInterceptor.to(DamagePhase, false);

      expect(leadPokemon.turnData.hitCount).toBe(1);
    }, TIMEOUT
  );

  test(
    "ability should not apply to Rollout",
    async () => {
      vi.spyOn(Overrides, "MOVESET_OVERRIDE", "get").mockReturnValue([Moves.ROLLOUT]);

      await game.startBattle([Species.CHARIZARD]);

      const leadPokemon = game.scene.getPlayerPokemon();
      expect(leadPokemon).not.toBe(undefined);

      const enemyPokemon = game.scene.getEnemyPokemon();
      expect(enemyPokemon).not.toBe(undefined);

      game.doAttack(getMovePosition(game.scene, 0, Moves.ROLLOUT));

      await game.phaseInterceptor.to(MoveEffectPhase, false);
      vi.spyOn(game.scene.getCurrentPhase() as MoveEffectPhase, "hitCheck").mockReturnValue(true);

      await game.phaseInterceptor.to(DamagePhase, false);

      expect(leadPokemon.turnData.hitCount).toBe(1);
    }, TIMEOUT
  );

  test(
    "ability should not apply multiplier to fixed-damage moves",
    async () => {
      vi.spyOn(Overrides, "MOVESET_OVERRIDE", "get").mockReturnValue([Moves.DRAGON_RAGE]);

      await game.startBattle([Species.CHARIZARD]);

      const leadPokemon = game.scene.getPlayerPokemon();
      expect(leadPokemon).not.toBe(undefined);

      const enemyPokemon = game.scene.getEnemyPokemon();
      expect(enemyPokemon).not.toBe(undefined);

      const enemyStartingHp = enemyPokemon.hp;

      game.doAttack(getMovePosition(game.scene, 0, Moves.DRAGON_RAGE));
      await game.phaseInterceptor.to(TurnEndPhase, false);

      expect(enemyPokemon.hp).toBe(enemyStartingHp - 80);
    }, TIMEOUT
  );

  test(
    "ability should not apply multiplier to counter moves",
    async () => {
      vi.spyOn(Overrides, "MOVESET_OVERRIDE", "get").mockReturnValue([Moves.COUNTER]);
      vi.spyOn(Overrides, "OPP_MOVESET_OVERRIDE", "get").mockReturnValue([Moves.TACKLE,Moves.TACKLE,Moves.TACKLE,Moves.TACKLE]);

      await game.startBattle([Species.CHARIZARD]);

      const leadPokemon = game.scene.getPlayerPokemon();
      expect(leadPokemon).not.toBe(undefined);

      const enemyPokemon = game.scene.getEnemyPokemon();
      expect(enemyPokemon).not.toBe(undefined);

      const playerStartingHp = leadPokemon.hp;
      const enemyStartingHp = enemyPokemon.hp;

      game.doAttack(getMovePosition(game.scene, 0, Moves.COUNTER));
      await game.phaseInterceptor.to(DamagePhase);

      const playerDamage = playerStartingHp - leadPokemon.hp;

      await game.phaseInterceptor.to(TurnEndPhase, false);

      expect(enemyPokemon.hp).toBe(enemyStartingHp - 4*playerDamage);
    }, TIMEOUT
  );
});
