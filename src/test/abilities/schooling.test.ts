import { afterEach, beforeAll, beforeEach, describe, expect, test, vi } from "vitest";
import GameManager from "#test/utils/gameManager";
import { getMovePosition } from "#test/utils/gameManagerUtils";
import Overrides from "#app/overrides";
import { Moves } from "#enums/moves";
import { Abilities } from "#enums/abilities";
import { Species } from "#enums/species";
import { Status, StatusEffect } from "#app/data/status-effect.js";
import { TurnEndPhase } from "#app/phases.js";
import { QuietFormChangePhase } from "#app/form-change-phase.js";

const TIMEOUT = 20 * 1000;

describe("Abilities - SCHOOLING", () => {
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
    const moveToUse = Moves.SPLASH;
    game.override.battleType("single");
    vi.spyOn(Overrides, "ABILITY_OVERRIDE", "get").mockReturnValue(Abilities.SCHOOLING);
    vi.spyOn(Overrides, "MOVESET_OVERRIDE", "get").mockReturnValue([moveToUse]);
    game.override.enemyMoveset([Moves.TACKLE, Moves.TACKLE, Moves.TACKLE, Moves.TACKLE]);
  });

  test(
    "check if fainted pokemon switches to base form on arena reset",
    async () => {
      const soloForm = 0,
        schoolForm = 1;
      game.override.startingWave(4);
      vi.spyOn(Overrides, "STARTER_FORM_OVERRIDES", "get").mockReturnValue({
        [Species.WISHIWASHI]: schoolForm,
      });

      await game.startBattle([Species.MAGIKARP, Species.WISHIWASHI]);

      const wishiwashi = game.scene.getParty().find((p) => p.species.speciesId === Species.WISHIWASHI);
      expect(wishiwashi).not.toBe(undefined);
      expect(wishiwashi.formIndex).toBe(schoolForm);

      wishiwashi.hp = 0;
      wishiwashi.status = new Status(StatusEffect.FAINT);
      expect(wishiwashi.isFainted()).toBe(true);

      game.doAttack(getMovePosition(game.scene, 0, Moves.SPLASH));
      await game.doKillOpponents();
      await game.phaseInterceptor.to(TurnEndPhase);
      game.doSelectModifier();
      await game.phaseInterceptor.to(QuietFormChangePhase);

      expect(wishiwashi.formIndex).toBe(soloForm);
    },
    TIMEOUT
  );
});
