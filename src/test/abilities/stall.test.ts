import GameManager from "#test/utils/gameManager";
import { getMovePosition } from "#test/utils/gameManagerUtils";
import { Abilities } from "#enums/abilities";
import { Moves } from "#enums/moves";
import { Species } from "#enums/species";
import Phaser from "phaser";
import { afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { TurnStartPhase } from "#app/phases/turn-start-phase";
import { EnemyCommandPhase } from "#app/phases/enemy-command-phase";

describe("Abilities - Stall", () => {
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
    game.override.disableCrits();
    game.override.enemySpecies(Species.REGIELEKI);
    game.override.enemyAbility(Abilities.STALL);
    game.override.enemyMoveset([Moves.QUICK_ATTACK, Moves.QUICK_ATTACK, Moves.QUICK_ATTACK, Moves.QUICK_ATTACK]);
    game.override.moveset([Moves.QUICK_ATTACK, Moves.TACKLE]);
  });

  /**
   * References:
   * https://bulbapedia.bulbagarden.net/wiki/Stall_(Ability)
   * https://bulbapedia.bulbagarden.net/wiki/Priority
   **/

  it("Pokemon with Stall should move last in its priority bracket regardless of speed", async() => {
    await game.startBattle([ Species.SHUCKLE ]);

    game.doAttack(getMovePosition(game.scene, 0, Moves.QUICK_ATTACK));

    await game.phaseInterceptor.run(EnemyCommandPhase);
    const phase = game.scene.getCurrentPhase() as TurnStartPhase;
    const speedOrder = phase.getSpeedOrder();
    const commandOrder = phase.getCommandOrder();
    // The player Pokemon (without Stall) goes first despite having lower speed than the opponent.
    // The opponent Pokemon (with Stall) goes last despite having higher speed than the player Pokemon.
    // This means that the commandOrder is equivalent to the speed Order reversed
    expect(speedOrder.reverse().every((val, index) => val === commandOrder[index])).toBe(true);
  }, 20000);

  it("Pokemon with Stall will go first if a move that is in a higher priority bracket than the opponent's move is used", async() => {
    await game.startBattle([ Species.SHUCKLE ]);

    game.doAttack(getMovePosition(game.scene, 0, Moves.TACKLE));

    await game.phaseInterceptor.run(EnemyCommandPhase);
    const phase = game.scene.getCurrentPhase() as TurnStartPhase;
    const speedOrder = phase.getSpeedOrder();
    const commandOrder = phase.getCommandOrder();
    // The opponent Pokemon (with Stall) goes first because its move is still within a higher priority bracket than its opponent.
    // The player Pokemon goes second because its move is in a lower priority bracket.
    // This means that the commandOrder should be identical to the speedOrder
    expect(speedOrder.every((val, index) => val === commandOrder[index])).toBe(true);
  }, 20000);

  it("If both Pokemon have stall and use the same move, speed is used to determine who goes first.", async() => {
    game.override.ability(Abilities.STALL);
    await game.startBattle([ Species.SHUCKLE ]);

    game.doAttack(getMovePosition(game.scene, 0, Moves.TACKLE));

    await game.phaseInterceptor.run(EnemyCommandPhase);
    const phase = game.scene.getCurrentPhase() as TurnStartPhase;
    const speedOrder = phase.getSpeedOrder();
    const commandOrder = phase.getCommandOrder();

    // The opponent Pokemon (with Stall) goes first because it has a higher speed.
    // The player Pokemon (with Stall) goes second because its speed is lower.
    // This means that the commandOrder should be identical to the speedOrder
    expect(speedOrder.every((val, index) => val === commandOrder[index])).toBe(true);
  }, 20000);
});
