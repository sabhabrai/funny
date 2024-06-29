import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import Phaser from "phaser";
import GameManager from "#app/test/utils/gameManager";
import * as overrides from "#app/overrides";
import { DamagePhase } from "#app/phases";
import { Moves } from "#enums/moves";
import { getMovePosition } from "#app/test/utils/gameManagerUtils";
import { Abilities } from "#enums/abilities";
import { Species } from "#app/enums/species.js";
import { Type } from "#app/data/type";
import { BattleStat } from "#app/data/battle-stat";
import { BattlerTagType } from "#enums/battler-tag-type";
import { EnemyPokemon, PlayerPokemon } from "#app/field/pokemon";
import { modifierTypes } from "#app/modifier/modifier-type";

describe("Moves - Dragon Rage", () => {
  let phaserGame: Phaser.Game;
  let game: GameManager;
  let partyPokemon: PlayerPokemon;
  let enemyPokemon: EnemyPokemon;

  beforeAll(() => {
    phaserGame = new Phaser.Game({
      type: Phaser.HEADLESS,
    });
  });

  afterEach(() => {
    game.phaseInterceptor.restoreOg();
  });

  beforeEach(async () => {
    game = new GameManager(phaserGame);
    vi.spyOn(overrides, "SINGLE_BATTLE_OVERRIDE", "get").mockReturnValue(true);

    vi.spyOn(overrides, "STARTER_SPECIES_OVERRIDE", "get").mockReturnValue(Species.PORYGON);
    vi.spyOn(overrides, "MOVESET_OVERRIDE", "get").mockReturnValue([Moves.DRAGON_RAGE]);
    vi.spyOn(overrides, "ABILITY_OVERRIDE", "get").mockReturnValue(Abilities.BALL_FETCH);
    vi.spyOn(overrides, "PASSIVE_ABILITY_OVERRIDE", "get").mockReturnValue(Abilities.BALL_FETCH);
    vi.spyOn(overrides, "STARTING_LEVEL_OVERRIDE", "get").mockReturnValue(100);

    vi.spyOn(overrides, "OPP_SPECIES_OVERRIDE", "get").mockReturnValue(Species.PORYGON);
    vi.spyOn(overrides, "OPP_MOVESET_OVERRIDE", "get").mockReturnValue([Moves.SPLASH, Moves.SPLASH, Moves.SPLASH, Moves.SPLASH]);
    vi.spyOn(overrides, "OPP_ABILITY_OVERRIDE", "get").mockReturnValue(Abilities.BALL_FETCH);
    vi.spyOn(overrides, "OPP_PASSIVE_ABILITY_OVERRIDE", "get").mockReturnValue(Abilities.BALL_FETCH);
    vi.spyOn(overrides, "OPP_LEVEL_OVERRIDE", "get").mockReturnValue(100);

    await game.startBattle();

    partyPokemon = game.scene.getParty()[0];
    partyPokemon.addTag(BattlerTagType.NO_CRIT, 99);

    enemyPokemon = game.scene.getEnemyPokemon();
    enemyPokemon.addTag(BattlerTagType.NO_CRIT, 99);
  });

  it("ignores weaknesses", async () => {
    vi.spyOn(enemyPokemon, "getTypes").mockReturnValue([Type.DRAGON]);

    game.doAttack(getMovePosition(game.scene, 0, Moves.DRAGON_RAGE));
    await game.phaseInterceptor.to(DamagePhase, true);
    const damageDealt = enemyPokemon.getMaxHp() - enemyPokemon.hp;

    expect(damageDealt).toBe(40);
  });

  it("ignores resistances", async () => {
    vi.spyOn(enemyPokemon, "getTypes").mockReturnValue([Type.STEEL]);

    game.doAttack(getMovePosition(game.scene, 0, Moves.DRAGON_RAGE));
    await game.phaseInterceptor.to(DamagePhase, true);
    const damageDealt = enemyPokemon.getMaxHp() - enemyPokemon.hp;

    expect(damageDealt).toBe(40);
  });

  it("ignores stat changes", async () => {
    partyPokemon.summonData.battleStats[BattleStat.SPATK] = 2;

    game.doAttack(getMovePosition(game.scene, 0, Moves.DRAGON_RAGE));
    await game.phaseInterceptor.to(DamagePhase, true);
    const damageDealt = enemyPokemon.getMaxHp() - enemyPokemon.hp;

    expect(damageDealt).toBe(40);
  });

  it("ignores stab", async () => {
    vi.spyOn(partyPokemon, "getTypes").mockReturnValue([Type.DRAGON]);

    game.doAttack(getMovePosition(game.scene, 0, Moves.DRAGON_RAGE));
    await game.phaseInterceptor.to(DamagePhase, true);
    const damageDealt = enemyPokemon.getMaxHp() - enemyPokemon.hp;

    expect(damageDealt).toBe(40);
  });

  it("ignores criticals", async () => {
    partyPokemon.removeTag(BattlerTagType.NO_CRIT);
    partyPokemon.addTag(BattlerTagType.ALWAYS_CRIT, 99);

    game.doAttack(getMovePosition(game.scene, 0, Moves.DRAGON_RAGE));
    await game.phaseInterceptor.to(DamagePhase, true);
    const damageDealt = enemyPokemon.getMaxHp() - enemyPokemon.hp;

    expect(damageDealt).toBe(40);
  });

  it("ignores damage modification from abilities such as ice scales", async () => {
    vi.spyOn(overrides, "OPP_ABILITY_OVERRIDE", "get").mockReturnValue(Abilities.ICE_SCALES);

    game.doAttack(getMovePosition(game.scene, 0, Moves.DRAGON_RAGE));
    await game.phaseInterceptor.to(DamagePhase, true);
    const damageDealt = enemyPokemon.getMaxHp() - enemyPokemon.hp;

    expect(damageDealt).toBe(40);
  });

  it("ignores multi hit", async () => {
    game.scene.addModifier(modifierTypes.MULTI_LENS().newModifier(partyPokemon), false);

    game.doAttack(getMovePosition(game.scene, 0, Moves.DRAGON_RAGE));
    await game.phaseInterceptor.to(DamagePhase, true);
    const damageDealt = enemyPokemon.getMaxHp() - enemyPokemon.hp;

    expect(damageDealt).toBe(40);
  });
});
