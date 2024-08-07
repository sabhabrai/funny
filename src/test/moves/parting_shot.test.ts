import { SPLASH_ONLY } from "../utils/testUtils";
import { BerryPhase } from "#app/phases.js";
import { Abilities } from "#enums/abilities";
import { Moves } from "#enums/moves";
import { Species } from "#enums/species";
import Phaser from "phaser";
import { afterEach, beforeAll, beforeEach, describe, expect, test } from "vitest";
import GameManager from "../utils/gameManager";
import { getMovePosition } from "../utils/gameManagerUtils";
import { BattleStat } from "#app/data/battle-stat";

const TIMEOUT = 20 * 1000;

describe("Moves - Parting Shot", () => {
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
    game.override.battleType("single");
    game.override.moveset([Moves.PARTING_SHOT, Moves.SPLASH]);
    game.override.enemySpecies(Species.POOCHYENA);
    game.override.enemyMoveset(SPLASH_ONLY);
    game.override.startingLevel(5);
    game.override.enemyLevel(5);

  });

  test(
    "Parting shot when buffed by prankster should fail against dark types",
    async () => {
      await game.startBattle([Species.MURKROW]);
      game.override.ability(Abilities.PRANKSTER);

      const enemyPokemon = game.scene.getEnemyPokemon()!;
      expect(enemyPokemon).toBeDefined();

      game.doAttack(getMovePosition(game.scene, 0, Moves.PARTING_SHOT));

      await game.phaseInterceptor.to(BerryPhase);
      const battleStatsOpponent = game.scene.currentBattle.enemyParty[0].summonData.battleStats;
      expect(battleStatsOpponent[BattleStat.ATK]).toBe(0);
      expect(battleStatsOpponent[BattleStat.SPATK]).toBe(0);


    }, TIMEOUT
  );

  test(
    "Parting shot when buffed by prankster should fail against good for gold ability",
    async () => {
      await game.startBattle([Species.MURKROW]);
      game.override.ability(Abilities.PRANKSTER);
      game.override.enemyAbility(Abilities.GOOD_AS_GOLD);

      const enemyPokemon = game.scene.getEnemyPokemon()!;
      expect(enemyPokemon).toBeDefined();

      game.doAttack(getMovePosition(game.scene, 0, Moves.PARTING_SHOT));

      await game.phaseInterceptor.to(BerryPhase);
      const battleStatsOpponent = game.scene.currentBattle.enemyParty[0].summonData.battleStats;
      expect(battleStatsOpponent[BattleStat.ATK]).toBe(0);
      expect(battleStatsOpponent[BattleStat.SPATK]).toBe(0);
    }, TIMEOUT
  );
});
