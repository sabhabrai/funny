import { afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";
import Phaser from "phaser";
import GameManager from "#test/utils/gameManager";
import { Species } from "#app/enums/species";
import { SPLASH_ONLY } from "../utils/testUtils";
import { Moves } from "#app/enums/moves";
import { getMovePosition } from "../utils/gameManagerUtils";
import { MoveEffectPhase } from "#app/phases";

describe("Internals", () => {
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
    game.override
      .disableCrits()
      .enemySpecies(Species.UMBREON)
      .enemyMoveset(SPLASH_ONLY)
      .enemyLevel(5)
      .starterSpecies(Species.MAGIKARP)
      .moveset([Moves.MIRACLE_EYE, Moves.CONFUSION]);
  });

  it("should allow Psychic moves to hit Dark types", async () => {
    await game.startBattle();

    const enemy = game.scene.getEnemyPokemon()!;

    game.doAttack(getMovePosition(game.scene, 0, Moves.CONFUSION));
    await game.toNextTurn();
    expect(enemy.hp).toBe(enemy.getMaxHp());

    game.doAttack(getMovePosition(game.scene, 0, Moves.MIRACLE_EYE));
    await game.toNextTurn();
    game.doAttack(getMovePosition(game.scene, 0, Moves.CONFUSION));
    await game.phaseInterceptor.to(MoveEffectPhase);

    expect(enemy.hp).toBeLessThan(enemy.getMaxHp());
  });
});
