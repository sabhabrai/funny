import { ArenaTagSide } from "#app/data/arena-tag.js";
import Move, { allMoves } from "#app/data/move.js";
import { Abilities } from "#app/enums/abilities.js";
import { ArenaTagType } from "#app/enums/arena-tag-type.js";
import Pokemon from "#app/field/pokemon.js";
import { TurnEndPhase } from "#app/phases/turn-end-phase.js";
import GameManager from "#test/utils/gameManager";
import { getMovePosition } from "#test/utils/gameManagerUtils";
import { NumberHolder } from "#app/utils.js";
import { Moves } from "#enums/moves";
import { Species } from "#enums/species";
import Phaser from "phaser";
import { afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";


describe("Moves - Light Screen", () => {
  let phaserGame: Phaser.Game;
  let game: GameManager;
  const singleBattleMultiplier = 0.5;
  const doubleBattleMultiplier = 2732/4096;

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
    game.override.ability(Abilities.NONE);
    game.override.moveset([Moves.ABSORB, Moves.DAZZLING_GLEAM, Moves.TACKLE]);
    game.override.enemyLevel(100);
    game.override.enemySpecies(Species.MAGIKARP);
    game.override.enemyMoveset([Moves.LIGHT_SCREEN, Moves.LIGHT_SCREEN, Moves.LIGHT_SCREEN, Moves.LIGHT_SCREEN]);
    game.override.disableCrits();
  });

  it("reduces damage of special attacks by half in a single battle", async() => {
    const moveToUse = Moves.ABSORB;
    await game.classicMode.startBattle([Species.SHUCKLE]);

    game.doAttack(getMovePosition(game.scene, 0, moveToUse));

    await game.phaseInterceptor.to(TurnEndPhase);

    const mockedDmg = getMockedMoveDamage(game.scene.getEnemyPokemon()!, game.scene.getPlayerPokemon()!, allMoves[moveToUse]);

    expect(mockedDmg).toBe(allMoves[moveToUse].power * singleBattleMultiplier);
  });

  it("reduces damage of special attacks by a third in a double battle", async() => {
    game.override.battleType("double");

    const moveToUse = Moves.DAZZLING_GLEAM;
    await game.classicMode.startBattle([Species.SHUCKLE, Species.SHUCKLE]);

    game.doAttack(getMovePosition(game.scene, 0, moveToUse));
    game.doAttack(getMovePosition(game.scene, 1, moveToUse));

    await game.phaseInterceptor.to(TurnEndPhase);
    const mockedDmg = getMockedMoveDamage(game.scene.getEnemyPokemon()!, game.scene.getPlayerPokemon()!, allMoves[moveToUse]);

    expect(mockedDmg).toBe(allMoves[moveToUse].power * doubleBattleMultiplier);
  });

  it("does not affect physical attacks", async() => {
    const moveToUse = Moves.TACKLE;
    await game.classicMode.startBattle([Species.SHUCKLE]);

    game.doAttack(getMovePosition(game.scene, 0, moveToUse));

    await game.phaseInterceptor.to(TurnEndPhase);
    const mockedDmg = getMockedMoveDamage(game.scene.getEnemyPokemon()!, game.scene.getPlayerPokemon()!, allMoves[moveToUse]);

    expect(mockedDmg).toBe(allMoves[moveToUse].power);
  });
});

/**
 * Calculates the damage of a move multiplied by screen's multiplier, Light Screen in this case {@linkcode Moves.LIGHT_SCREEN}.
 * Please note this does not consider other damage calculations except the screen multiplier.
 *
 * @param defender - The defending Pokémon.
 * @param attacker - The attacking Pokémon.
 * @param move - The move being used.
 * @returns The calculated move damage considering any weakening effects.
 */
const getMockedMoveDamage = (defender: Pokemon, attacker: Pokemon, move: Move) => {
  const multiplierHolder = new NumberHolder(1);
  const side = defender.isPlayer() ? ArenaTagSide.PLAYER : ArenaTagSide.ENEMY;

  if (defender.scene.arena.getTagOnSide(ArenaTagType.LIGHT_SCREEN, side)) {
    defender.scene.arena.applyTagsForSide(ArenaTagType.LIGHT_SCREEN, side, move.category, defender.scene.currentBattle.double, multiplierHolder);
  }

  return move.power * multiplierHolder.value;
};
