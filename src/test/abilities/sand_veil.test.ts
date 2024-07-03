import Phaser from "phaser";
import { afterEach, beforeAll, beforeEach, describe, expect, test, vi } from "vitest";
import GameManager from "../utils/gameManager";
import * as Overrides from "#app/overrides";
import { Species } from "#enums/species";
import { Abilities } from "#enums/abilities";
import { Moves } from "#enums/moves";
import { getMovePosition } from "../utils/gameManagerUtils";
import { CommandPhase, MoveEffectPhase, MoveEndPhase } from "#app/phases.js";
import { BattleStat } from "#app/data/battle-stat.js";
import { WeatherType } from "#app/data/weather.js";
import * as Utils from "#app/utils.js";
import { BattleStatMultiplierAbAttr, allAbilities, applyBattleStatMultiplierAbAttrs } from "#app/data/ability.js";

const TIMEOUT = 20 * 1000;

describe("Abilities - Sand Veil", () => {
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
    vi.spyOn(Overrides, "DOUBLE_BATTLE_OVERRIDE", "get").mockReturnValue(true);
    vi.spyOn(Overrides, "MOVESET_OVERRIDE", "get").mockReturnValue([Moves.SPLASH]);
    vi.spyOn(Overrides, "OPP_SPECIES_OVERRIDE", "get").mockReturnValue(Species.MEOWSCARADA);
    vi.spyOn(Overrides, "OPP_ABILITY_OVERRIDE", "get").mockReturnValue(Abilities.INSOMNIA);
    vi.spyOn(Overrides, "OPP_MOVESET_OVERRIDE", "get").mockReturnValue([Moves.TWISTER, Moves.TWISTER, Moves.TWISTER, Moves.TWISTER]);
    vi.spyOn(Overrides, "STARTING_LEVEL_OVERRIDE", "get").mockReturnValue(100);
    vi.spyOn(Overrides, "OPP_LEVEL_OVERRIDE", "get").mockReturnValue(100);
    vi.spyOn(Overrides, "WEATHER_OVERRIDE", "get").mockReturnValue(WeatherType.SANDSTORM);
  });

  test(
    "ability should increase the evasiveness of the source",
    async () => {
      await game.startBattle([Species.SNORLAX, Species.BLISSEY]);

      const leadPokemon = game.scene.getPlayerField();
      leadPokemon.forEach(p => expect(p).toBeDefined());

      const enemyPokemon = game.scene.getEnemyField();
      enemyPokemon.forEach(p => expect(p).toBeDefined());

      vi.spyOn(leadPokemon[0], "getAbility").mockReturnValue(allAbilities[Abilities.SAND_VEIL]);

      expect(leadPokemon[0].hasAbility(Abilities.SAND_VEIL)).toBe(true);
      expect(leadPokemon[1].hasAbility(Abilities.SAND_VEIL)).toBe(false);

      game.doAttack(getMovePosition(game.scene, 0, Moves.SPLASH));

      await game.phaseInterceptor.to(CommandPhase);

      game.doAttack(getMovePosition(game.scene, 1, Moves.SPLASH));

      await game.phaseInterceptor.to(MoveEffectPhase, false);

      // Mock implementation of hitCheck causes attack to miss if a multiplier is applied
      vi.spyOn(game.scene.getCurrentPhase() as MoveEffectPhase, "hitCheck").mockImplementation((target) => {
        const evasionMultiplier = new Utils.NumberHolder(1);
        applyBattleStatMultiplierAbAttrs(BattleStatMultiplierAbAttr, target, BattleStat.EVA, evasionMultiplier);
        return evasionMultiplier.value <= 1;
      });

      await game.phaseInterceptor.to(MoveEndPhase, false);

      expect(leadPokemon[0].hp).toBe(leadPokemon[0].getMaxHp());
      expect(leadPokemon[1].hp).toBeLessThan(leadPokemon[1].getMaxHp());
    }, TIMEOUT
  );
});
