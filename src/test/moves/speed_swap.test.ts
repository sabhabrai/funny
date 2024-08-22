import { afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";
import Phaser from "phaser";
import GameManager from "#app/test/utils/gameManager";
import { Species } from "#enums/species";
import { TurnEndPhase } from "#app/phases/turn-end-phase";
import { Moves } from "#enums/moves";
import { Stat } from "#enums/stat";
import { Abilities } from "#enums/abilities";
import { SPLASH_ONLY } from "../utils/testUtils";

describe("Moves - Speed Swap", () => {
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
    game.override.enemyAbility(Abilities.NONE);
    game.override.enemyMoveset(SPLASH_ONLY);
    game.override.enemySpecies(Species.MEW);
    game.override.enemyLevel(200);
    game.override.moveset([ Moves.SPEED_SWAP ]);
    game.override.ability(Abilities.NONE);
  });

  it("should swap the user's SPD and the target's SPD stats", async () => {
    await game.startBattle([
      Species.INDEEDEE
    ]);

    const player = game.scene.getPlayerPokemon()!;
    const enemy = game.scene.getEnemyPokemon()!;

    const playerSpd = player.getStat(Stat.SPD, false);
    const enemySpd = enemy.getStat(Stat.SPD, false);

    game.move.select(Moves.SPEED_SWAP);
    await game.phaseInterceptor.to(TurnEndPhase);

    expect(player.getStat(Stat.SPD, false)).toBe(enemySpd);
    expect(enemy.getStat(Stat.SPD, false)).toBe(playerSpd);
  }, 20000);
});
