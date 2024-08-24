import { BattleStyle } from "#app/enums/battle-style";
import { GameManagerHelper } from "./gameManagerHelper";

/**
 * Helper to handle settings for tests
 */
export class SettingsHelper extends GameManagerHelper {
  private _battleStyle: BattleStyle = BattleStyle.SET;

  get battleStyle(): BattleStyle {
    return this._battleStyle;
  }

  /**
   * Change the battle style to Switch or Set mode (tests default to {@linkcode BattleStyle.SET})
   * @param mode {@linkcode BattleStyle.SWITCH} or {@linkcode BattleStyle.SET}
   */
  set battleStyle(mode: BattleStyle.SWITCH | BattleStyle.SET) {
    this.battleStyle = mode;
  }

  /**
   * Disable/Enable type hints settings
   * @param enable true to enabled, false to disabled
   */
  typeHints(enable: boolean): void {
    this.game.scene.typeHints = enable;
  }
}
