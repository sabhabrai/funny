import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const runHistory: SimpleTranslationEntries = {
  "victory": "Victory!",
  "defeatedWildM": "Defeated by ",
  "defeatedTrainerM": "Defeated by ",
  "defeatedTrainerDoubleM": "Defeated by Duo",
  "defeatedRivalM": "Defeated by Rival",
  "defeatedM":"Defeated",
  "defeatedWildF": "Defeated by ",
  "defeatedTrainerF": "Defeated by ",
  "defeatedTrainerDoubleF": "Defeated by Duo",
  "defeatedRivalF": "Defeated by Rival",
  "defeatedF":"Defeated",
  "luck":"Luck",
  "score":"Score",
  "mode":"Mode",
  "challengeRules":"Rule(s)",
  "challengeMonoGen1":"Gen I",
  "challengeMonoGen2":"Gen II",
  "challengeMonoGen3":"Gen III",
  "challengeMonoGen4":"Gen IV",
  "challengeMonoGen5":"Gen V",
  "challengeMonoGen6":"Gen VI",
  "challengeMonoGen7":"Gen VII",
  "challengeMonoGen8":"Gen VIII",
  "challengeMonoGen9":"Gen IX",
  "playerItems":"Player Items",
  "personalBest":"Personal Best!",
  "SPDshortened":"Vel.",
  "runInfo":"Run Info",
  "money":"Money",
  "runLength":"Run Length",
  "viewHeldItems":"Held Items",
  "hallofFameTextM":"Welcome to the Hall of Fame!",
  "hallofFameTextF":"Welcome to the Hall of Fame!",
  "viewHallOfFame":"View Hall of Fame!",
  "viewEndingSplash":"View ending art!"
} as const;

// Mode Information found in game-mode.ts
// Wave / Lv found in save-slot-select-ui-handler.ts
