import { Abilities } from "#app/enums/abilities.js";
import GameManager from "#app/test/utils/gameManager";
import { getMovePosition } from "#app/test/utils/gameManagerUtils";
import { Moves } from "#enums/moves";
import { Species } from "#enums/species";
import Phaser from "phaser";
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { StatusEffect } from "#app/enums/status-effect.js";
import { SPLASH_ONLY } from "../utils/testUtils";
import { Mode } from "#app/ui/ui.js";
import { SwitchPhase } from "#app/phases/switch-phase.js";
import { TurnEndPhase } from "#app/phases/turn-end-phase.js";
import { BerryPhase } from "#app/phases/berry-phase.js";

describe("Moves - U-turn", () => {
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
      .battleType("single")
      .enemySpecies(Species.GENGAR)
      .startingLevel(90)
      .startingWave(97)
      .moveset([Moves.U_TURN])
      .enemyMoveset(SPLASH_ONLY)
      .disableCrits();
  });

  it("triggers regenerator a single time when a regenerator user switches out with u-turn", async() => {
    // arrange
    const playerHp = 1;
    game.override.ability(Abilities.REGENERATOR);
    await game.startBattle([
      Species.RAICHU,
      Species.SHUCKLE
    ]);
    game.scene.getPlayerPokemon()!.hp = playerHp;

    // act
    game.doAttack(getMovePosition(game.scene, 0, Moves.U_TURN));
    game.doSelectPartyPokemon(1);
    await game.phaseInterceptor.to(TurnEndPhase);

    // assert
    expect(game.scene.getPlayerPokemon()!.species.speciesId).toBe(Species.SHUCKLE);
    expect(game.scene.getParty()[1].hp).toEqual(Math.floor(game.scene.getParty()[1].getMaxHp() * 0.33 + playerHp));
    expect(game.phaseInterceptor.log).toContain("SwitchSummonPhase");
  }, 20000);

  it("triggers rough skin on the u-turn user before a new pokemon is switched in", async() => {
    // arrange
    game.override.enemyAbility(Abilities.ROUGH_SKIN);
    await game.startBattle([
      Species.RAICHU,
      Species.SHUCKLE
    ]);

    // act
    game.doAttack(getMovePosition(game.scene, 0, Moves.U_TURN));
    game.doSelectPartyPokemon(1);
    await game.phaseInterceptor.to(SwitchPhase, false);

    // assert
    const playerPkm = game.scene.getPlayerPokemon()!;
    expect(playerPkm.species.speciesId).toEqual(Species.RAICHU);
    expect(playerPkm.hp).not.toEqual(playerPkm.getMaxHp());
    expect(game.scene.getEnemyPokemon()!.battleData.abilityRevealed).toBe(true); // proxy for asserting ability activated
    expect(game.phaseInterceptor.log).not.toContain("SwitchSummonPhase");
  }, 20000);

  it("triggers contact abilities on the u-turn user (eg poison point) before a new pokemon is switched in", async() => {
    // arrange
    game.override.enemyAbility(Abilities.POISON_POINT);
    await game.startBattle([
      Species.RAICHU,
      Species.SHUCKLE
    ]);
    vi.spyOn(game.scene.getEnemyPokemon()!, "randSeedInt").mockReturnValue(0);

    // act
    game.doAttack(getMovePosition(game.scene, 0, Moves.U_TURN));
    await game.phaseInterceptor.to(SwitchPhase, false);

    // assert
    const playerPkm = game.scene.getPlayerPokemon()!;
    expect(playerPkm.species.speciesId).toEqual(Species.RAICHU);
    expect(playerPkm.status?.effect).toEqual(StatusEffect.POISON);
    expect(game.scene.getEnemyPokemon()!.battleData.abilityRevealed).toBe(true); // proxy for asserting ability activated
    expect(game.phaseInterceptor.log).not.toContain("SwitchSummonPhase");
  }, 20000);

  it("does not switch out the user if the move fails", async () => {
    // arrange
    game.override
      .enemySpecies(Species.DUGTRIO)
      .moveset(Moves.VOLT_SWITCH); // cheating a little here but no types are immune to bug
    await game.startBattle([
      Species.RAICHU,
      Species.SHUCKLE
    ]);

    // act
    game.doAttack(getMovePosition(game.scene, 0, Moves.U_TURN));
    game.onNextPrompt("SwitchPhase", Mode.PARTY, () => {
      expect.fail("Switch was forced");
    }, () => game.isCurrentPhase(BerryPhase));
    await game.phaseInterceptor.to(BerryPhase, false);

    // assert
    const playerPkm = game.scene.getPlayerPokemon()!;
    expect(playerPkm.species.speciesId).toEqual(Species.RAICHU);
    expect(game.phaseInterceptor.log).not.toContain("SwitchSummonPhase");
  }, 20000);
});
