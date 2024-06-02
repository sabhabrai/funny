import {afterEach, beforeAll, beforeEach, describe, expect, it, vi} from "vitest";
import Phaser from "phaser";
import GameManager from "#app/test/essentials/gameManager";
import * as overrides from "#app/overrides";
import {Abilities} from "#app/data/enums/abilities";
import {Species} from "#app/data/enums/species";
import {
  CheckSwitchPhase, CommandPhase, MessagePhase,
  PostSummonPhase,
  ShinySparklePhase,
  ShowAbilityPhase,
  StatChangePhase,
  SummonPhase,
  ToggleDoublePositionPhase, TurnInitPhase
} from "#app/phases";
import {Mode} from "#app/ui/ui";
import {BattleStat} from "#app/data/battle-stat";


describe("Abilities Test - onSummon", () => {
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
    vi.spyOn(overrides, "STARTER_SPECIES_OVERRIDE", "get").mockReturnValue(0);
    vi.spyOn(overrides, "OPP_SPECIES_OVERRIDE", "get").mockReturnValue(0);
    vi.spyOn(overrides, "STARTING_LEVEL_OVERRIDE", "get").mockReturnValue(0);
    vi.spyOn(overrides, "STARTING_WAVE_OVERRIDE", "get").mockReturnValue(0);
    vi.spyOn(overrides, "OPP_MOVESET_OVERRIDE", "get").mockReturnValue([]);
    vi.spyOn(overrides, "MOVESET_OVERRIDE", "get").mockReturnValue([]);
    vi.spyOn(overrides, "SINGLE_BATTLE_OVERRIDE", "get").mockReturnValue(false);
    vi.spyOn(overrides, "DOUBLE_BATTLE_OVERRIDE", "get").mockReturnValue(false);
    vi.spyOn(overrides, "OPP_ABILITY_OVERRIDE", "get").mockReturnValue(Abilities.NONE);
    vi.spyOn(overrides, "ABILITY_OVERRIDE", "get").mockReturnValue(Abilities.NONE);
    game = new GameManager(phaserGame);
  });

  it("INTIMIDATE", async() => {
    vi.spyOn(overrides, "SINGLE_BATTLE_OVERRIDE", "get").mockReturnValue(true);
    vi.spyOn(overrides, "OPP_SPECIES_OVERRIDE", "get").mockReturnValue(Species.MIGHTYENA);
    vi.spyOn(overrides, "OPP_ABILITY_OVERRIDE", "get").mockReturnValue(Abilities.INTIMIDATE);
    vi.spyOn(overrides, "ABILITY_OVERRIDE", "get").mockReturnValue(Abilities.INTIMIDATE);
    await game.runToSummon([
      Species.MIGHTYENA,
      Species.MIGHTYENA,
    ]);
    await game.phaseInterceptor.run(PostSummonPhase);


    expect(game.scene.getParty()[0].summonData).not.toBeUndefined();
    let battleStatsPokemon = game.scene.getParty()[0].summonData.battleStats;
    expect(battleStatsPokemon[BattleStat.ATK]).toBe(0);
    await game.phaseInterceptor.run(ShowAbilityPhase);
    await game.phaseInterceptor.run(StatChangePhase);
    battleStatsPokemon = game.scene.getParty()[0].summonData.battleStats;
    expect(battleStatsPokemon[BattleStat.ATK]).toBe(-1);


    await game.phaseInterceptor.run(SummonPhase);
    await game.phaseInterceptor.run(ShinySparklePhase, () => game.isCurrentPhase(ToggleDoublePositionPhase));
    await game.phaseInterceptor.run(ToggleDoublePositionPhase);
    game.onNextPrompt("CheckSwitchPhase", Mode.CONFIRM, () => {
      game.setMode(Mode.MESSAGE);
      game.endPhase();
    });
    await game.phaseInterceptor.run(CheckSwitchPhase);
    await game.phaseInterceptor.run(PostSummonPhase);


    let battleStatsOpponent = game.scene.currentBattle.enemyParty[0].summonData.battleStats;
    expect(battleStatsOpponent[BattleStat.ATK]).toBe(0);
    await game.phaseInterceptor.run(ShowAbilityPhase);
    game.scene.moveAnimations = null; // Mandatory to avoid crash
    await game.phaseInterceptor.run(StatChangePhase);
    battleStatsOpponent = game.scene.currentBattle.enemyParty[0].summonData.battleStats;
    expect(battleStatsOpponent[BattleStat.ATK]).toBe(-1);


    await game.phaseInterceptor.run(MessagePhase);
    await game.phaseInterceptor.run(TurnInitPhase);
    await game.phaseInterceptor.run(CommandPhase);
  }, 20000);
});
