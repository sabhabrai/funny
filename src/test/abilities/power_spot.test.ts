import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import Phaser from "phaser";
import GameManager from "#app/test/utils/gameManager";
import * as overrides from "#app/overrides";
import { Species } from "#enums/species";
import { Moves } from "#enums/moves";
import { getMovePosition } from "#app/test/utils/gameManagerUtils";
import { allMoves } from "#app/data/move.js";
import { AllyMoveCategoryPowerBoostAbAttr } from "#app/data/ability.js";
import Pokemon from "#app/field/pokemon.js";

describe("Abilities - Power Spot", () => {
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
    vi.spyOn(overrides, "DOUBLE_BATTLE_OVERRIDE", "get").mockReturnValue(true);
    vi.spyOn(overrides, "MOVESET_OVERRIDE", "get").mockReturnValue([Moves.TACKLE, Moves.ROCK_SLIDE, Moves.SPLASH, Moves.HEAT_WAVE]);
    vi.spyOn(overrides, "OPP_MOVESET_OVERRIDE", "get").mockReturnValue([Moves.SPLASH, Moves.SPLASH, Moves.SPLASH, Moves.SPLASH]);
  });

  it("raises the power of allies' special moves by 30%", async () => {
    const moveToBeUsed = Moves.HEAT_WAVE;
    const basePower = allMoves[moveToBeUsed].power;

    await game.startBattle([Species.MAGIKARP, Species.STONJOURNER]);

    game.doAttack(getMovePosition(game.scene, 0, moveToBeUsed));
    game.doAttack(getMovePosition(game.scene, 1, Moves.SPLASH));

    const multiplier = getAttrPowerMultiplier(game.scene.getPlayerField()[1]);
    const movePower = allMoves[moveToBeUsed].calculatePower(game.scene.getPlayerField()[0], game.scene.getEnemyField()[0]);

    expect(movePower).toBe(basePower * multiplier);
  });

  it("raises the power of allies' physical moves by 30%", async () => {
    const moveToBeUsed = Moves.ROCK_SLIDE;
    const basePower = allMoves[moveToBeUsed].power;

    await game.startBattle([Species.MAGIKARP, Species.STONJOURNER]);

    game.doAttack(getMovePosition(game.scene, 0, moveToBeUsed));
    game.doAttack(getMovePosition(game.scene, 1, Moves.SPLASH));

    const [boostedAlly, boostSource] = game.scene.getPlayerField();
    const multiplier = getAttrPowerMultiplier(boostSource);
    const movePower = allMoves[moveToBeUsed].calculatePower(boostedAlly, game.scene.getEnemyPokemon());

    expect(movePower).toBe(basePower * multiplier);
  });

  it("does not raise the power of the ability owner's moves", async () => {
    const moveToBeUsed = Moves.HEAT_WAVE;
    const basePower = allMoves[moveToBeUsed].power;

    await game.startBattle([Species.STONJOURNER, Species.MAGIKARP]);

    game.doAttack(getMovePosition(game.scene, 0, moveToBeUsed));
    game.doAttack(getMovePosition(game.scene, 1, Moves.SPLASH));

    const movePower = allMoves[moveToBeUsed].calculatePower(game.scene.getPlayerPokemon(), game.scene.getEnemyPokemon());

    expect(movePower).toBe(basePower);
  });
});

/**
 * Retrieves the power multiplier from a Pokémon's ability attribute.
 *
 * @param pokemon - The Pokémon whose ability attributes are being queried.
 * @returns The power multiplier of the `AllyMoveCategoryPowerBoostAbAttr` attribute.
 */
const getAttrPowerMultiplier = (pokemon: Pokemon) => {
  const attr = pokemon.getAbilityAttrs(AllyMoveCategoryPowerBoostAbAttr);

  return (attr[0] as AllyMoveCategoryPowerBoostAbAttr)["powerMultiplier"];
};
