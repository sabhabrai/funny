import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "{{bossName}} appeared.",
  "trainerAppeared": "{{trainerName}}\nwould like to battle!",
  "trainerAppearedDouble": "{{trainerName}}\nwould like to battle!",
  "trainerSendOut": "{{trainerName}} sent out\n{{pokemonName}}!",
  "singleWildAppeared": "A wild {{pokemonName}} appeared!",
  "multiWildAppeared": "A wild {{pokemonName1}}\nand {{pokemonName2}} appeared!",
  "playerComeBack": "Come back, {{pokemonName}}!",
  "trainerComeBack": "{{trainerName}} withdrew {{pokemonName}}!",
  "playerGo": "Go! {{pokemonName}}!",
  "trainerGo": "{{trainerName}} sent out {{pokemonName}}!",
  "switchQuestion": "Will you switch\n{{pokemonName}}?",
  "trainerDefeated": "You defeated\n{{trainerName}}!",
  "moneyWon": "You got\n₽{{moneyAmount}} for winning!",
  "moneyPickedUp": "You picked up ₽{{moneyAmount}}!",
  "pokemonCaught": "{{pokemonName}} was caught!",
  "addedAsAStarter": "{{pokemonName}} has been\nadded as a starter!",
  "partyFull": "Your party is full.\nRelease a Pokémon to make room for {{pokemonName}}?",
  "pokemon": "Pokémon",
  "sendOutPokemon": "Go! {{pokemonName}}!",
  "hitResultCriticalHit": "A critical hit!",
  "hitResultSuperEffective": "It's super effective!",
  "hitResultNotVeryEffective": "It's not very effective…",
  "hitResultNoEffect": "It doesn't affect {{pokemonName}}!",
  "hitResultOneHitKO": "It's a one-hit KO!",
  "attackFailed": "But it failed!",
  "attackMissed": "{{pokemonNameWithAffix}} avoided the attack!",
  "attackHitsCount": "Hit {{count}} time(s)!",
  "rewardGain": "You received\n{{modifierName}}!",
  "expGain": "{{pokemonName}} gained\n{{exp}} EXP. Points!",
  "levelUp": "{{pokemonName}} grew to\nLv. {{level}}!",
  "learnMove": "{{pokemonName}} learned\n{{moveName}}!",
  "learnMovePrompt": "{{pokemonName}} wants to learn the\nmove {{moveName}}.",
  "learnMoveLimitReached": "However, {{pokemonName}} already\nknows four moves.",
  "learnMoveReplaceQuestion": "Should a move be forgotten and\nreplaced with {{moveName}}?",
  "learnMoveStopTeaching": "Stop trying to teach\n{{moveName}}?",
  "learnMoveNotLearned": "{{pokemonName}} did not learn the\nmove {{moveName}}.",
  "learnMoveForgetQuestion": "Which move should be forgotten?",
  "learnMoveForgetSuccess": "{{pokemonName}} forgot how to\nuse {{moveName}}.",
  "countdownPoof": "@d{32}1, @d{15}2, and@d{15}… @d{15}… @d{15}… @d{15}@s{pb_bounce_1}Poof!",
  "learnMoveAnd": "And…",
  "levelCapUp": "The level cap\nhas increased to {{levelCap}}!",
  "moveNotImplemented": "{{moveName}} is not yet implemented and cannot be selected.",
  "moveNoPP": "There's no PP left for\nthis move!",
  "moveDisabled": "{{moveName}} is disabled!",
  "disableInterruptedMove": "{{pokemonNameWithAffix}}'s {{moveName}}\nis disabled!",
  "noPokeballForce": "An unseen force\nprevents using Poké Balls.",
  "noPokeballTrainer": "You can't catch\nanother trainer's Pokémon!",
  "noPokeballMulti": "You can only throw a Poké Ball\nwhen there is one Pokémon remaining!",
  "noPokeballStrong": "The target Pokémon is too strong to be caught!\nYou need to weaken it first!",
  "noEscapeForce": "An unseen force\nprevents escape.",
  "noEscapeTrainer": "You can't run\nfrom a trainer battle!",
  "noEscapePokemon": "{{pokemonName}}'s {{moveName}}\nprevents {{escapeVerb}}!",
  "runAwaySuccess": "You got away safely!",
  "runAwayCannotEscape": "You can't escape!",
  "escapeVerbSwitch": "switching",
  "escapeVerbFlee": "fleeing",
  "notDisabled": "{{pokemonName}}'s {{moveName}} is disabled\nno more!",
  "turnEndHpRestore": "{{pokemonName}}'s HP was restored.",
  "hpIsFull": "{{pokemonName}}'s\nHP is full!",
  "skipItemQuestion": "Are you sure you want to skip taking an item?",
  "itemStackFull": "The stack for {{fullItemName}} is full.\nYou will receive {{itemName}} instead.",
  "eggHatching": "Oh?",
  "ivScannerUseQuestion": "Use IV Scanner on {{pokemonName}}?",
  "wildPokemonWithAffix": "Wild {{pokemonName}}",
  "foePokemonWithAffix": "Foe {{pokemonName}}",
  "useMove": "{{pokemonNameWithAffix}} used {{moveName}}!",
  "drainMessage": "{{pokemonName}} had its\nenergy drained!",
  "regainHealth": "{{pokemonName}} regained\nhealth!",
  "stealEatBerry": "{{pokemonName}} stole and ate\n{{targetName}}'s {{berryName}}!",
  "ppHealBerry": "{{pokemonNameWithAffix}} restored PP to its move {{moveName}}\nusing its {{berryName}}!",
  "hpHealBerry": "{{pokemonNameWithAffix}} restored its health using\nits {{berryName}}!",
  "fainted": "{{pokemonNameWithAffix}} fainted!",
  "statsAnd": "and",
  "stats": "Stats",
  "statRose_one": "{{pokemonNameWithAffix}}'s {{stats}} rose!",
  "statRose_other": "{{pokemonNameWithAffix}}'s {{stats}} rose!",
  "statSharplyRose_one": "{{pokemonNameWithAffix}}'s {{stats}} sharply rose!",
  "statSharplyRose_other": "{{pokemonNameWithAffix}}'s {{stats}} sharply rose!",
  "statRoseDrastically_one": "{{pokemonNameWithAffix}}'s {{stats}} rose drastically!",
  "statRoseDrastically_other": "{{pokemonNameWithAffix}}'s {{stats}} rose drastically!",
  "statWontGoAnyHigher_one": "{{pokemonNameWithAffix}}'s {{stats}} won't go any higher!",
  "statWontGoAnyHigher_other": "{{pokemonNameWithAffix}}'s {{stats}} won't go any higher!",
  "statFell_one": "{{pokemonNameWithAffix}}'s {{stats}} fell!",
  "statFell_other": "{{pokemonNameWithAffix}}'s {{stats}} fell!",
  "statHarshlyFell_one": "{{pokemonNameWithAffix}}'s {{stats}} harshly fell!",
  "statHarshlyFell_other": "{{pokemonNameWithAffix}}'s {{stats}} harshly fell!",
  "statSeverelyFell_one": "{{pokemonNameWithAffix}}'s {{stats}} severely fell!",
  "statSeverelyFell_other": "{{pokemonNameWithAffix}}'s {{stats}} severely fell!",
  "statWontGoAnyLower_one": "{{pokemonNameWithAffix}}'s {{stats}} won't go any lower!",
  "statWontGoAnyLower_other": "{{pokemonNameWithAffix}}'s {{stats}} won't go any lower!",
  "transformedIntoType": "{{pokemonName}} transformed\ninto the {{type}} type!",
  "retryBattle": "Would you like to retry from the start of the battle?",
  "unlockedSomething": "{{unlockedThing}}\nhas been unlocked.",
  "congratulations": "Congratulations!",
  "beatModeFirstTime": "{{speciesName}} beat {{gameMode}} Mode for the first time!\nYou received {{newModifier}}!",
  "ppReduced": "It reduced the PP of {{targetName}}'s\n{{moveName}} by {{reduction}}!",
  "battlerTagsDisabledOnAdd": "{{pokemonNameWithAffix}}'s {{moveName}}\nwas disabled!",
  "battlerTagsDisabledLapse": "{{pokemonNameWithAffix}}'s {{moveName}}\nis no longer disabled.",
} as const;
