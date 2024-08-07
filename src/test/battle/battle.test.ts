import { allSpecies } from "#app/data/pokemon-species";
import { GameModes } from "#app/game-mode";
import { getGameMode } from "#app/game-mode.js";
import { CommandPhase, DamagePhase, EncounterPhase, EnemyCommandPhase, LoginPhase, SelectGenderPhase, SelectModifierPhase, SelectStarterPhase, SummonPhase, TitlePhase, TurnInitPhase, VictoryPhase } from "#app/phases";
import GameManager from "#test/utils/gameManager";
import { generateStarter, getMovePosition, } from "#test/utils/gameManagerUtils";
import { Command } from "#app/ui/command-ui-handler";
import { Mode } from "#app/ui/ui";
import { Abilities } from "#enums/abilities";
import { Moves } from "#enums/moves";
import { PlayerGender } from "#enums/player-gender";
import { Species } from "#enums/species";
import Phaser from "phaser";
import { afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";

describe("Test Battle Phase", () => {
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
  });

  it("test phase interceptor with prompt", async() => {
    await game.phaseInterceptor.run(LoginPhase);

    game.onNextPrompt("SelectGenderPhase", Mode.OPTION_SELECT, () => {
      game.scene.gameData.gender = PlayerGender.MALE;
      game.endPhase();
    });

    await game.phaseInterceptor.run(SelectGenderPhase);

    await game.phaseInterceptor.run(TitlePhase);
    await game.waitMode(Mode.TITLE);


    expect(game.scene.ui?.getMode()).toBe(Mode.TITLE);
    expect(game.scene.gameData.gender).toBe(PlayerGender.MALE);
  }, 20000);

  it("test phase interceptor with prompt with preparation for a future prompt", async() => {
    await game.phaseInterceptor.run(LoginPhase);

    game.onNextPrompt("SelectGenderPhase", Mode.OPTION_SELECT, () => {
      game.scene.gameData.gender = PlayerGender.MALE;
      game.endPhase();
    });

    game.onNextPrompt("CheckSwitchPhase", Mode.CONFIRM, () => {
      game.setMode(Mode.MESSAGE);
      game.endPhase();
    });
    await game.phaseInterceptor.run(SelectGenderPhase);

    await game.phaseInterceptor.run(TitlePhase);
    await game.waitMode(Mode.TITLE);


    expect(game.scene.ui?.getMode()).toBe(Mode.TITLE);
    expect(game.scene.gameData.gender).toBe(PlayerGender.MALE);
  }, 20000);

  it("newGame one-liner", async() => {
    await game.startBattle();
    expect(game.scene.ui?.getMode()).toBe(Mode.COMMAND);
    expect(game.scene.getCurrentPhase().constructor.name).toBe(CommandPhase.name);
  }, 20000);

  it("do attack wave 3 - single battle - regular - OHKO", async() => {
    game.override.starterSpecies(Species.MEWTWO);
    game.override.enemySpecies(Species.RATTATA);
    game.override.startingLevel(2000);
    game.override
      .startingWave(3)
      .battleType("single");
    game.override.moveset([Moves.TACKLE]);
    game.override.enemyAbility(Abilities.HYDRATION);
    game.override.enemyMoveset([Moves.TACKLE, Moves.TACKLE, Moves.TACKLE, Moves.TACKLE]);
    await game.startBattle();
    game.onNextPrompt("CommandPhase", Mode.COMMAND, () => {
      game.scene.ui.setMode(Mode.FIGHT, (game.scene.getCurrentPhase() as CommandPhase).getFieldIndex());
    });
    game.onNextPrompt("CommandPhase", Mode.FIGHT, () => {
      const movePosition = getMovePosition(game.scene, 0, Moves.TACKLE);
      (game.scene.getCurrentPhase() as CommandPhase).handleCommand(Command.FIGHT, movePosition, false);
    });
    await game.phaseInterceptor.runFrom(EnemyCommandPhase).to(SelectModifierPhase, false);
  }, 20000);

  it("do attack wave 3 - single battle - regular - NO OHKO with opponent using non damage attack", async() => {
    game.override.starterSpecies(Species.MEWTWO);
    game.override.enemySpecies(Species.RATTATA);
    game.override.startingLevel(5);
    game.override.startingWave(3);
    game.override.moveset([Moves.TACKLE]);
    game.override.enemyAbility(Abilities.HYDRATION);
    game.override.enemyMoveset([Moves.TAIL_WHIP, Moves.TAIL_WHIP, Moves.TAIL_WHIP, Moves.TAIL_WHIP]);
    game.override.battleType("single");
    await game.startBattle();
    game.onNextPrompt("CommandPhase", Mode.COMMAND, () => {
      game.scene.ui.setMode(Mode.FIGHT, (game.scene.getCurrentPhase() as CommandPhase).getFieldIndex());
    });
    game.onNextPrompt("CommandPhase", Mode.FIGHT, () => {
      const movePosition = getMovePosition(game.scene, 0, Moves.TACKLE);
      (game.scene.getCurrentPhase() as CommandPhase).handleCommand(Command.FIGHT, movePosition, false);
    });
    await game.phaseInterceptor.runFrom(EnemyCommandPhase).to(TurnInitPhase, false);
  }, 20000);

  it("load 100% data file", async() => {
    await game.importData("src/test/utils/saves/everything.prsv");
    const caughtCount = Object.keys(game.scene.gameData.dexData).filter((key) => {
      const species = game.scene.gameData.dexData[key];
      return species.caughtAttr !== 0n;
    }).length;
    expect(caughtCount).toBe(Object.keys(allSpecies).length);
  }, 20000);

  it("start battle with selected team", async() => {
    await game.startBattle([
      Species.CHARIZARD,
      Species.CHANSEY,
      Species.MEW
    ]);
    expect(game.scene.getParty()[0].species.speciesId).toBe(Species.CHARIZARD);
    expect(game.scene.getParty()[1].species.speciesId).toBe(Species.CHANSEY);
    expect(game.scene.getParty()[2].species.speciesId).toBe(Species.MEW);
  }, 20000);

  it("test remove random battle seed int", async() => {
    for (let i=0; i<10; i++) {
      const rand = game.scene.randBattleSeedInt(16);
      expect(rand).toBe(15);
    }
  });

  it("wrong phase", async() => {
    await game.phaseInterceptor.run(LoginPhase);
    await game.phaseInterceptor.run(LoginPhase).catch((e) => {
      expect(e).toBe("Wrong phase: this is SelectGenderPhase and not LoginPhase");
    });
  }, 20000);

  it("wrong phase but skip", async() => {
    await game.phaseInterceptor.run(LoginPhase);
    await game.phaseInterceptor.run(LoginPhase, () => game.isCurrentPhase(SelectGenderPhase));
  }, 20000);

  it("good run", async() => {
    await game.phaseInterceptor.run(LoginPhase);
    game.onNextPrompt("SelectGenderPhase", Mode.OPTION_SELECT, () => {
      game.scene.gameData.gender = PlayerGender.MALE;
      game.endPhase();
    }, () => game.isCurrentPhase(TitlePhase));
    await game.phaseInterceptor.run(SelectGenderPhase, () => game.isCurrentPhase(TitlePhase));
    await game.phaseInterceptor.run(TitlePhase);
  }, 20000);

  it("good run from select gender to title", async() => {
    await game.phaseInterceptor.run(LoginPhase);
    game.onNextPrompt("SelectGenderPhase", Mode.OPTION_SELECT, () => {
      game.scene.gameData.gender = PlayerGender.MALE;
      game.endPhase();
    }, () => game.isCurrentPhase(TitlePhase));
    await game.phaseInterceptor.runFrom(SelectGenderPhase).to(TitlePhase);
  }, 20000);

  it("good run to SummonPhase phase", async() => {
    await game.phaseInterceptor.run(LoginPhase);
    game.onNextPrompt("SelectGenderPhase", Mode.OPTION_SELECT, () => {
      game.scene.gameData.gender = PlayerGender.MALE;
      game.endPhase();
    }, () => game.isCurrentPhase(TitlePhase));
    game.onNextPrompt("TitlePhase", Mode.TITLE, () => {
      game.scene.gameMode = getGameMode(GameModes.CLASSIC);
      const starters = generateStarter(game.scene);
      const selectStarterPhase = new SelectStarterPhase(game.scene);
      game.scene.pushPhase(new EncounterPhase(game.scene, false));
      selectStarterPhase.initBattle(starters);
    });
    await game.phaseInterceptor.runFrom(SelectGenderPhase).to(SummonPhase);
  }, 20000);

  it("2vs1", async() => {
    game.override.battleType("single");
    game.override.enemySpecies(Species.MIGHTYENA);
    game.override.enemyAbility(Abilities.HYDRATION);
    game.override.ability(Abilities.HYDRATION);
    await game.startBattle([
      Species.BLASTOISE,
      Species.CHARIZARD,
    ]);
    expect(game.scene.ui?.getMode()).toBe(Mode.COMMAND);
    expect(game.scene.getCurrentPhase().constructor.name).toBe(CommandPhase.name);
  }, 20000);

  it("1vs1", async() => {
    game.override.battleType("single");
    game.override.enemySpecies(Species.MIGHTYENA);
    game.override.enemyAbility(Abilities.HYDRATION);
    game.override.ability(Abilities.HYDRATION);
    await game.startBattle([
      Species.BLASTOISE,
    ]);
    expect(game.scene.ui?.getMode()).toBe(Mode.COMMAND);
    expect(game.scene.getCurrentPhase().constructor.name).toBe(CommandPhase.name);
  }, 20000);

  it("2vs2", async() => {
    game.override.battleType("double");
    game.override.enemySpecies(Species.MIGHTYENA);
    game.override.enemyAbility(Abilities.HYDRATION);
    game.override.ability(Abilities.HYDRATION);
    game.override.startingWave(3);
    await game.startBattle([
      Species.BLASTOISE,
      Species.CHARIZARD,
    ]);
    expect(game.scene.ui?.getMode()).toBe(Mode.COMMAND);
    expect(game.scene.getCurrentPhase().constructor.name).toBe(CommandPhase.name);
  }, 20000);

  it("4vs2", async() => {
    game.override.battleType("double");
    game.override.enemySpecies(Species.MIGHTYENA);
    game.override.enemyAbility(Abilities.HYDRATION);
    game.override.ability(Abilities.HYDRATION);
    game.override.startingWave(3);
    await game.startBattle([
      Species.BLASTOISE,
      Species.CHARIZARD,
      Species.DARKRAI,
      Species.GABITE,
    ]);
    expect(game.scene.ui?.getMode()).toBe(Mode.COMMAND);
    expect(game.scene.getCurrentPhase().constructor.name).toBe(CommandPhase.name);
  }, 20000);

  it("kill opponent pokemon", async() => {
    const moveToUse = Moves.SPLASH;
    game.override.battleType("single");
    game.override.starterSpecies(Species.MEWTWO);
    game.override.enemySpecies(Species.RATTATA);
    game.override.enemyAbility(Abilities.HYDRATION);
    game.override.ability(Abilities.ZEN_MODE);
    game.override.startingLevel(2000);
    game.override.startingWave(3);
    game.override.moveset([moveToUse]);
    game.override.enemyMoveset([Moves.TACKLE,Moves.TACKLE,Moves.TACKLE,Moves.TACKLE]);
    await game.startBattle([
      Species.DARMANITAN,
      Species.CHARIZARD,
    ]);

    game.onNextPrompt("CommandPhase", Mode.COMMAND, () => {
      game.scene.ui.setMode(Mode.FIGHT, (game.scene.getCurrentPhase() as CommandPhase).getFieldIndex());
    });
    game.onNextPrompt("CommandPhase", Mode.FIGHT, () => {
      const movePosition = getMovePosition(game.scene, 0, moveToUse);
      (game.scene.getCurrentPhase() as CommandPhase).handleCommand(Command.FIGHT, movePosition, false);
    });
    await game.phaseInterceptor.to(DamagePhase, false);
    await game.killPokemon(game.scene.currentBattle.enemyParty[0]);
    expect(game.scene.currentBattle.enemyParty[0].isFainted()).toBe(true);
    await game.phaseInterceptor.to(VictoryPhase, false);
  }, 200000);

  it("to next turn", async() => {
    const moveToUse = Moves.SPLASH;
    game.override.battleType("single");
    game.override.starterSpecies(Species.MEWTWO);
    game.override.enemySpecies(Species.RATTATA);
    game.override.enemyAbility(Abilities.HYDRATION);
    game.override.ability(Abilities.ZEN_MODE);
    game.override.startingLevel(2000);
    game.override.startingWave(3);
    game.override.moveset([moveToUse]);
    game.override.enemyMoveset([Moves.TACKLE,Moves.TACKLE,Moves.TACKLE,Moves.TACKLE]);
    await game.startBattle();
    const turn = game.scene.currentBattle.turn;
    game.doAttack(0);
    await game.toNextTurn();
    expect(game.scene.currentBattle.turn).toBeGreaterThan(turn);
  }, 20000);

  it("to next wave with pokemon killed, single", async() => {
    const moveToUse = Moves.SPLASH;
    game.override.battleType("single");
    game.override.starterSpecies(Species.MEWTWO);
    game.override.enemySpecies(Species.RATTATA);
    game.override.enemyAbility(Abilities.HYDRATION);
    game.override.ability(Abilities.ZEN_MODE);
    game.override.startingLevel(2000);
    game.override.startingWave(3);
    game.override.moveset([moveToUse]);
    game.override.enemyMoveset([Moves.TACKLE,Moves.TACKLE,Moves.TACKLE,Moves.TACKLE]);
    await game.startBattle();
    const waveIndex = game.scene.currentBattle.waveIndex;
    game.doAttack(0);
    await game.doKillOpponents();
    await game.toNextWave();
    expect(game.scene.currentBattle.waveIndex).toBeGreaterThan(waveIndex);
  }, 20000);
});

