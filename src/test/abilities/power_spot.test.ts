import { allMoves } from "#app/data/move.js";
import { Abilities } from "#app/enums/abilities.js";
import { MoveEffectPhase, TurnEndPhase } from "#app/phases";
import GameManager from "#test/utils/gameManager";
import { getMovePosition } from "#test/utils/gameManagerUtils";
import { Moves } from "#enums/moves";
import { Species } from "#enums/species";
import Phaser from "phaser";
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { SPLASH_ONLY } from "#test/utils/testUtils";

describe("Abilities - Power Spot", () => {
  let phaserGame: Phaser.Game;
  let game: GameManager;

  const powerSpotMultiplier = 1.3;

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
    game.override.battleType("double");
    game.override.moveset([Moves.TACKLE, Moves.BREAKING_SWIPE, Moves.SPLASH, Moves.DAZZLING_GLEAM]);
    game.override.enemyMoveset(SPLASH_ONLY);
    game.override.enemySpecies(Species.SHUCKLE);
    game.override.enemyAbility(Abilities.BALL_FETCH);
  });

  it("raises the power of allies' special moves by 30%", async () => {
    const moveToCheck = allMoves[Moves.DAZZLING_GLEAM];
    const basePower = moveToCheck.power;

    vi.spyOn(moveToCheck, "calculateBattlePower");

    await game.startBattle([Species.REGIELEKI, Species.STONJOURNER]);
    game.doAttack(getMovePosition(game.scene, 0, Moves.DAZZLING_GLEAM));
    game.doAttack(getMovePosition(game.scene, 1, Moves.SPLASH));
    await game.phaseInterceptor.to(MoveEffectPhase);

    expect(moveToCheck.calculateBattlePower).toHaveReturnedWith(basePower * powerSpotMultiplier);
  });

  it("raises the power of allies' physical moves by 30%", async () => {
    const moveToCheck = allMoves[Moves.BREAKING_SWIPE];
    const basePower = moveToCheck.power;

    vi.spyOn(moveToCheck, "calculateBattlePower");

    await game.startBattle([Species.REGIELEKI, Species.STONJOURNER]);
    game.doAttack(getMovePosition(game.scene, 0, Moves.BREAKING_SWIPE));
    game.doAttack(getMovePosition(game.scene, 1, Moves.SPLASH));
    await game.phaseInterceptor.to(MoveEffectPhase);

    expect(moveToCheck.calculateBattlePower).toHaveReturnedWith(basePower * powerSpotMultiplier);
  });

  it("does not raise the power of the ability owner's moves", async () => {
    const moveToCheck = allMoves[Moves.BREAKING_SWIPE];
    const basePower = moveToCheck.power;

    vi.spyOn(moveToCheck, "calculateBattlePower");

    await game.startBattle([Species.STONJOURNER, Species.REGIELEKI]);
    game.doAttack(getMovePosition(game.scene, 0, Moves.BREAKING_SWIPE));
    game.doAttack(getMovePosition(game.scene, 1, Moves.SPLASH));
    await game.phaseInterceptor.to(TurnEndPhase);

    expect(moveToCheck.calculateBattlePower).toHaveReturnedWith(basePower);
  });
});
