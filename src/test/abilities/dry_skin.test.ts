import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import Phaser from "phaser";
import GameManager from "#app/test/utils/gameManager";
import Overrides from "#app/overrides";
import { TurnEndPhase } from "#app/phases";
import { Moves } from "#enums/moves";
import { getMovePosition } from "#app/test/utils/gameManagerUtils";
import { Abilities } from "#enums/abilities";
import { Species } from "#app/enums/species.js";
import { SPLASH_ONLY } from "../utils/testUtils";

describe("Abilities - Dry Skin", () => {
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
    vi.spyOn(Overrides, "NEVER_CRIT_OVERRIDE", "get").mockReturnValue(true);
    game.override.enemyAbility(Abilities.DRY_SKIN);
    game.override.enemyMoveset(SPLASH_ONLY);
    game.override.enemySpecies(Species.CHARMANDER);
    game.override.ability(Abilities.UNNERVE);
    game.override.starterSpecies(Species.CHANDELURE);
  });

  it("during sunlight, lose 1/8 of maximum health at the end of each turn", async () => {
    vi.spyOn(Overrides, "MOVESET_OVERRIDE", "get").mockReturnValue([Moves.SUNNY_DAY, Moves.SPLASH]);

    await game.startBattle();

    const enemy = game.scene.getEnemyPokemon();
    expect(enemy).not.toBe(undefined);

    // first turn
    let previousEnemyHp = enemy.hp;
    game.doAttack(getMovePosition(game.scene, 0, Moves.SUNNY_DAY));
    await game.phaseInterceptor.to(TurnEndPhase);
    expect(enemy.hp).toBeLessThan(previousEnemyHp);

    // second turn
    previousEnemyHp = enemy.hp;
    game.doAttack(getMovePosition(game.scene, 0, Moves.SPLASH));
    await game.phaseInterceptor.to(TurnEndPhase);
    expect(enemy.hp).toBeLessThan(previousEnemyHp);
  });

  it("during rain, gain 1/8 of maximum health at the end of each turn", async () => {
    vi.spyOn(Overrides, "MOVESET_OVERRIDE", "get").mockReturnValue([Moves.RAIN_DANCE, Moves.SPLASH]);

    await game.startBattle();

    const enemy = game.scene.getEnemyPokemon();
    expect(enemy).not.toBe(undefined);

    enemy.hp = 1;

    // first turn
    let previousEnemyHp = enemy.hp;
    game.doAttack(getMovePosition(game.scene, 0, Moves.RAIN_DANCE));
    await game.phaseInterceptor.to(TurnEndPhase);
    expect(enemy.hp).toBeGreaterThan(previousEnemyHp);

    // second turn
    previousEnemyHp = enemy.hp;
    game.doAttack(getMovePosition(game.scene, 0, Moves.SPLASH));
    await game.phaseInterceptor.to(TurnEndPhase);
    expect(enemy.hp).toBeGreaterThan(previousEnemyHp);
  });

  it("opposing fire attacks do 25% more damage", async () => {
    vi.spyOn(Overrides, "MOVESET_OVERRIDE", "get").mockReturnValue([Moves.FLAMETHROWER]);

    await game.startBattle();

    const enemy = game.scene.getEnemyPokemon();
    expect(enemy).toBeDefined();
    const initialHP = 1000;
    enemy.hp = initialHP;

    // first turn
    game.doAttack(getMovePosition(game.scene, 0, Moves.FLAMETHROWER));
    await game.phaseInterceptor.to(TurnEndPhase);
    const fireDamageTakenWithDrySkin = initialHP - enemy.hp;

    expect(enemy.hp > 0);
    enemy.hp = initialHP;
    game.override.enemyAbility(Abilities.NONE);

    // second turn
    game.doAttack(getMovePosition(game.scene, 0, Moves.FLAMETHROWER));
    await game.phaseInterceptor.to(TurnEndPhase);
    const fireDamageTakenWithoutDrySkin = initialHP - enemy.hp;

    expect(fireDamageTakenWithDrySkin).toBeGreaterThan(fireDamageTakenWithoutDrySkin);
  });

  it("opposing water attacks heal 1/4 of maximum health and deal no damage", async () => {
    vi.spyOn(Overrides, "MOVESET_OVERRIDE", "get").mockReturnValue([Moves.WATER_GUN]);

    await game.startBattle();

    const enemy = game.scene.getEnemyPokemon();
    expect(enemy).not.toBe(undefined);

    enemy.hp = 1;

    game.doAttack(getMovePosition(game.scene, 0, Moves.WATER_GUN));
    await game.phaseInterceptor.to(TurnEndPhase);
    expect(enemy.hp).toBeGreaterThan(1);
  });

  it("opposing water attacks do not heal if they were protected from", async () => {
    vi.spyOn(Overrides, "MOVESET_OVERRIDE", "get").mockReturnValue([Moves.WATER_GUN]);

    await game.startBattle();

    const enemy = game.scene.getEnemyPokemon();
    expect(enemy).not.toBe(undefined);

    enemy.hp = 1;
    game.override.enemyMoveset([Moves.PROTECT, Moves.PROTECT, Moves.PROTECT, Moves.PROTECT]);

    game.doAttack(getMovePosition(game.scene, 0, Moves.WATER_GUN));
    await game.phaseInterceptor.to(TurnEndPhase);
    expect(enemy.hp).toBe(1);
  });

  it("multi-strike water attacks only heal once", async () => {
    vi.spyOn(Overrides, "MOVESET_OVERRIDE", "get").mockReturnValue([Moves.WATER_GUN, Moves.WATER_SHURIKEN]);

    await game.startBattle();

    const enemy = game.scene.getEnemyPokemon();
    expect(enemy).not.toBe(undefined);

    enemy.hp = 1;

    // first turn
    game.doAttack(getMovePosition(game.scene, 0, Moves.WATER_SHURIKEN));
    await game.phaseInterceptor.to(TurnEndPhase);
    const healthGainedFromWaterShuriken = enemy.hp - 1;

    enemy.hp = 1;

    // second turn
    game.doAttack(getMovePosition(game.scene, 0, Moves.WATER_GUN));
    await game.phaseInterceptor.to(TurnEndPhase);
    const healthGainedFromWaterGun = enemy.hp - 1;

    expect(healthGainedFromWaterShuriken).toBe(healthGainedFromWaterGun);
  });
});
