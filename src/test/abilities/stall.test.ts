import { MovePhase } from "#app/phases";
import GameManager from "#test/utils/gameManager";
import { getMovePosition } from "#test/utils/gameManagerUtils";
import { Abilities } from "#enums/abilities";
import { Moves } from "#enums/moves";
import { Species } from "#enums/species";
import Phaser from "phaser";
import { afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";


describe("Ability - Stall", () => {
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
   * Bulbapedia References:
   * https://bulbapedia.bulbagarden.net/wiki/Stall_(Ability)
   * https://bulbapedia.bulbagarden.net/wiki/Priority
   **/

  it("Pokemon with Stall should move last in its priority bracket regardless of speed", async() => {
    await game.startBattle([ Species.SHUCKLE ]);

    const leadPokemon = game.scene.getPlayerPokemon()!;
    const enemyPokemon = game.scene.getEnemyPokemon()!;

    const leadIndex = leadPokemon.getBattlerIndex();
    const enemyIndex = enemyPokemon.getBattlerIndex();

    game.doAttack(getMovePosition(game.scene, 0, Moves.QUICK_ATTACK));

    await game.phaseInterceptor.to(MovePhase, false);
    const movePhase1 = game.scene.getCurrentPhase() as MovePhase;
    await game.phaseInterceptor.run(MovePhase);
    await game.phaseInterceptor.to(MovePhase, false);
    const movePhase2 = game.scene.getCurrentPhase() as MovePhase;

    /**
   * Expect:
   * - The player Pokemon (without Stall) goes first despite having lower speed than the opponent.
   * - The opponent Pokemon (with Stall) goes last despite having higher speed than the player Pokemon.
   **/
    expect(movePhase1.pokemon.getBattlerIndex()).toBe(leadIndex);
    expect(movePhase2.pokemon.getBattlerIndex()).toBe(enemyIndex);
  }, 20000);

  it("Pokemon with Stall will go first if a move that is in a higher priority bracket than the opponent's move is used", async() => {
    await game.startBattle([ Species.SHUCKLE ]);

    const leadPokemon = game.scene.getPlayerPokemon()!;
    const enemyPokemon = game.scene.getEnemyPokemon()!;

    const leadIndex = leadPokemon.getBattlerIndex();
    const enemyIndex = enemyPokemon.getBattlerIndex();

    game.doAttack(getMovePosition(game.scene, 0, Moves.TACKLE));

    await game.phaseInterceptor.to(MovePhase, false);
    const movePhase1 = game.scene.getCurrentPhase() as MovePhase;
    await game.phaseInterceptor.run(MovePhase);
    await game.phaseInterceptor.to(MovePhase, false);
    const movePhase2 = game.scene.getCurrentPhase() as MovePhase;

    /**
   * Expect:
   * - The opponent Pokemon (with Stall) goes first because its move is still within a higher priority bracket than its opponent.
   * - The player Pokemon goes second because its move is in a lower priority bracket.
   **/
    expect(movePhase1.pokemon.getBattlerIndex()).toBe(enemyIndex);
    expect(movePhase2.pokemon.getBattlerIndex()).toBe(leadIndex);
  }, 20000);

  it("If both Pokemon have stall and use the same move, speed is used to determine who goes first.", async() => {
    game.override.ability(Abilities.STALL);
    await game.startBattle([ Species.SHUCKLE ]);

    const leadPokemon = game.scene.getPlayerPokemon()!;
    const enemyPokemon = game.scene.getEnemyPokemon()!;

    const leadIndex = leadPokemon.getBattlerIndex();
    const enemyIndex = enemyPokemon.getBattlerIndex();

    game.doAttack(getMovePosition(game.scene, 0, Moves.TACKLE));

    await game.phaseInterceptor.to(MovePhase, false);
    const movePhase1 = game.scene.getCurrentPhase() as MovePhase;
    await game.phaseInterceptor.run(MovePhase);
    await game.phaseInterceptor.to(MovePhase, false);
    const movePhase2 = game.scene.getCurrentPhase() as MovePhase;

    /**
   * Expect:
   * - The opponent Pokemon (with Stall) goes first because it has a higher speed.
   * - The player Pokemon (with Stall) goes second because its speed is lower.
   **/
    expect(movePhase1.pokemon.getBattlerIndex()).toBe(enemyIndex);
    expect(movePhase2.pokemon.getBattlerIndex()).toBe(leadIndex);
  }, 20000);
});
