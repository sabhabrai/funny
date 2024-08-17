import { afterEach, beforeAll, beforeEach, describe, expect, test } from "vitest";
import Phaser from "phaser";
import GameManager from "#test/utils/gameManager";
import { TurnEndPhase } from "#app/phases";
import { getMovePosition } from "#test/utils/gameManagerUtils";
import { Moves } from "#enums/moves";
import { Species } from "#enums/species";
import { Stat } from "#enums/stat";

const TIMEOUT = 20 * 1000;
// RATIO : HP Cost of Move
const RATIO = 2;
// PREDAMAGE : Amount of extra HP lost
const PREDAMAGE = 15;

describe("Moves - BELLY DRUM", () => {
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
    game.override.starterSpecies(Species.MAGIKARP);
    game.override.enemySpecies(Species.SNORLAX);
    game.override.startingLevel(100);
    game.override.enemyLevel(100);
    game.override.moveset([Moves.BELLY_DRUM]);
    game.override.enemyMoveset([Moves.SPLASH]);
  });

  // Bulbapedia Reference: https://bulbapedia.bulbagarden.net/wiki/Belly_Drum_(move)

  test("raises the user's ATK stat stage to its max, at the cost of 1/2 of its maximum HP",
    async() => {
      await game.startBattle([Species.MAGIKARP]);

      const leadPokemon = game.scene.getPlayerPokemon()!;
      const hpLost = Math.floor(leadPokemon.getMaxHp() / RATIO);

      game.doAttack(getMovePosition(game.scene, 0, Moves.BELLY_DRUM));
      await game.phaseInterceptor.to(TurnEndPhase);

      expect(leadPokemon.hp).toBe(leadPokemon.getMaxHp() - hpLost);
      expect(leadPokemon.getStatStage(Stat.ATK)).toBe(6);
    }, TIMEOUT
  );

  test("will still take effect if an uninvolved stat stage is at max",
    async() => {
      await game.startBattle([Species.MAGIKARP]);

      const leadPokemon = game.scene.getPlayerPokemon()!;
      const hpLost = Math.floor(leadPokemon.getMaxHp() / RATIO);

      // Here - Stat.ATK -> -3 and Stat.SPATK -> 6
      leadPokemon.setStatStage(Stat.ATK, -3);
      leadPokemon.setStatStage(Stat.SPATK, 6);

      game.doAttack(getMovePosition(game.scene, 0, Moves.BELLY_DRUM));
      await game.phaseInterceptor.to(TurnEndPhase);

      expect(leadPokemon.hp).toBe(leadPokemon.getMaxHp() - hpLost);
      expect(leadPokemon.getStatStage(Stat.ATK)).toBe(6);
      expect(leadPokemon.getStatStage(Stat.SPATK)).toBe(6);
    }, TIMEOUT
  );

  test("fails if the pokemon's ATK stat stage is at its maximum",
    async() => {
      await game.startBattle([Species.MAGIKARP]);

      const leadPokemon = game.scene.getPlayerPokemon()!;

      leadPokemon.setStatStage(Stat.ATK, 6);

      game.doAttack(getMovePosition(game.scene, 0, Moves.BELLY_DRUM));
      await game.phaseInterceptor.to(TurnEndPhase);

      expect(leadPokemon.hp).toBe(leadPokemon.getMaxHp());
      expect(leadPokemon.getStatStage(Stat.ATK)).toBe(6);
    }, TIMEOUT
  );

  test("fails if the user's health is less than 1/2",
    async() => {
      await game.startBattle([Species.MAGIKARP]);

      const leadPokemon = game.scene.getPlayerPokemon()!;
      const hpLost = Math.floor(leadPokemon.getMaxHp() / RATIO);
      leadPokemon.hp = hpLost - PREDAMAGE;

      game.doAttack(getMovePosition(game.scene, 0, Moves.BELLY_DRUM));
      await game.phaseInterceptor.to(TurnEndPhase);

      expect(leadPokemon.hp).toBe(hpLost - PREDAMAGE);
      expect(leadPokemon.getStatStage(Stat.ATK)).toBe(0);
    }, TIMEOUT
  );
});
