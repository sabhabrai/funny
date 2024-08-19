import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "¡{{bossName}} te corta el paso!",
  "trainerAppeared": "¡{{trainerName}}\nte desafía!",
  "trainerAppearedDouble": "¡{{trainerName}}\nwould te desafían!",
  "trainerSendOut": "¡{{trainerName}} saca a\n{{pokemonName}}!",
  "singleWildAppeared": "¡Un {{pokemonName}} salvaje te corta el paso!",
  "multiWildAppeared": "¡Un {{pokemonName1}} y un {{pokemonName2}} salvajes\nte cortan el paso!",
  "playerComeBack": "¡{{pokemonName}}, ven aquí!",
  "trainerComeBack": "¡{{trainerName}} retira a {{pokemonName}} del combate!",
  "playerGo": "¡Adelante, {{pokemonName}}!",
  "trainerGo": "¡{{trainerName}} saca a {{pokemonName}}!",
  "switchQuestion": "¿Quieres cambiar a\n{{pokemonName}}?",
  "trainerDefeated": "¡Has derrotado a\n{{trainerName}}!",
  "moneyWon": "¡Has ganado\n₽{{moneyAmount}} por vencer!",
  "moneyPickedUp": "You picked up ₽{{moneyAmount}}!",
  "pokemonCaught": "¡{{pokemonName}} atrapado!",
  "addedAsAStarter": "{{pokemonName}} ha sido añadido\na tus iniciales!",
  "partyFull": "Tu equipo esta completo.\n¿Quieres liberar un Pokémon para meter a {{pokemonName}}?",
  "pokemon": "Pokémon",
  "sendOutPokemon": "¡Adelante, {{pokemonName}}!",
  "hitResultCriticalHit": "¡Un golpe crítico!",
  "hitResultSuperEffective": "¡Es supereficaz!",
  "hitResultNotVeryEffective": "No es muy eficaz…",
  "hitResultNoEffect": "No afecta a {{pokemonName}}!",
  "hitResultOneHitKO": "¡KO en 1 golpe!",
  "attackFailed": "¡Pero ha fallado!",
  "attackMissed": "¡{{pokemonNameWithAffix}}\nha evitado el ataque!",
  "attackHitsCount": "N.º de golpes: {{count}}.",
  "rewardGain": "¡Has obtenido\n{{modifierName}}!",
  "expGain": "{{pokemonName}} ha ganado\n{{exp}} puntos de experiencia.",
  "levelUp": "¡{{pokemonName}} ha subido al \nNv. {{level}}!",
  "learnMove": "¡{{pokemonName}} ha aprendido {{moveName}}!",
  "learnMovePrompt": "{{pokemonName}} quiere aprender\n{{moveName}}.",
  "learnMoveLimitReached": "Pero, {{pokemonName}} ya conoce\ncuatro movimientos.",
  "learnMoveReplaceQuestion": "¿Quieres sustituir uno de sus movimientos por {{moveName}}?",
  "learnMoveStopTeaching": "¿Prefieres que no aprenda\n{{moveName}}?",
  "learnMoveNotLearned": "{{pokemonName}} no ha aprendido {{moveName}}.",
  "learnMoveForgetQuestion": "¿Qué movimiento quieres que olvide?",
  "learnMoveForgetSuccess": "{{pokemonName}} ha olvidado cómo utilizar {{moveName}}.",
  "countdownPoof": "@d{32}1, @d{15}2, @d{15}y@d{15}… @d{15}… @d{15}… @d{15}@s{pb_bounce_1}¡Puf!",
  "learnMoveAnd": "Y…",
  "levelCapUp": "¡Se ha incrementado el\nnivel máximo a {{levelCap}}!",
  "moveNotImplemented": "{{moveName}} aún no está implementado y no se puede seleccionar.",
  "moveNoPP": "¡No hay suficientes PP\npara este movimiento!",
  "moveDisabled": "!No puede usar {{moveName}} porque ha sido anulado!",
  "noPokeballForce": "Una fuerza misteriosa\nte impide usar Poké Balls.",
  "noPokeballTrainer": "¡No puedes atrapar a los\nPokémon de los demás!",
  "noPokeballMulti": "¡No se pueden lanzar Poké Balls\ncuando hay más de un Pokémon!",
  "noPokeballStrong": "¡Este Pokémon es demasiado fuerte para ser capturado!\nNecesitas bajarle los PS primero!",
  "noEscapeForce": "Una fuerza misteriosa\nte impide huir.",
  "noEscapeTrainer": "¡No puedes huir de los\ncombates contra Entrenadores!",
  "noEscapePokemon": "¡El movimiento {{moveName}} de {{pokemonName}} impide la huida!",
  "runAwaySuccess": "¡Escapas sin problemas!",
  "runAwayCannotEscape": "¡No has podido escapar!",
  "escapeVerbSwitch": "cambiar",
  "escapeVerbFlee": "huir",
  "notDisabled": "¡El movimiento {{moveName}} de {{pokemonName}}\nya no está anulado!",
  "turnEndHpRestore": "Los PS de {{pokemonName}} fueron restaurados.",
  "hpIsFull": "¡Los PS de {{pokemonName}}\nestán al máximo!",
  "skipItemQuestion": "¿Estás seguro de que no quieres coger un objeto?",
  "itemStackFull": "El máximo número de {{fullItemName}} ha sido alcanzado. Recibirás {{itemName}} en su lugar.",
  "eggHatching": "¿Y esto?",
  "ivScannerUseQuestion": "¿Quieres usar el Escáner de IVs en {{pokemonName}}?",
  "wildPokemonWithAffix": "El {{pokemonName}} salvaje",
  "foePokemonWithAffix": "El {{pokemonName}} enemigo",
  "useMove": "¡{{pokemonNameWithAffix}} usó {{moveName}}!",
  "drainMessage": "¡{{pokemonName}} tuvo su\nenergía absorbida!",
  "regainHealth": "¡{{pokemonName}} recuperó\nPS!",
  "stealEatBerry": "¡{{pokemonName}} robó la {{berryName}}\nde {{targetName}} y se la comió!",
  "ppHealBerry": "{{pokemonNameWithAffix}} restored PP to its move {{moveName}}\nusing its {{berryName}}!",
  "hpHealBerry": "{{pokemonNameWithAffix}} restored its health using\nits {{berryName}}!",
  "fainted": "¡{{pokemonNameWithAffix}} se debilitó!",
  "statsAnd": "y",
  "stats": "Las estadísticas",
  "statRose_one": "¡El {{stats}} de {{pokemonNameWithAffix}} ha subido!",
  "statRose_other": "¡{{stats}} de\n{{pokemonNameWithAffix}} han subido!",
  "statSharplyRose_one": "¡El {{stats}} de {{pokemonNameWithAffix}} ha subido mucho!",
  "statSharplyRose_other": "¡{{stats}} de\n{{pokemonNameWithAffix}} han subido mucho!",
  "statRoseDrastically_one": "¡El {{stats}} de {{pokemonNameWithAffix}} ha subido muchísimo!",
  "statRoseDrastically_other": "¡{{stats}} de\n{{pokemonNameWithAffix}} han subido muchísimo!",
  "statWontGoAnyHigher_one": "¡El {{stats}} de {{pokemonNameWithAffix}} no puede subir más!",
  "statWontGoAnyHigher_other": "¡{{stats}} de\n{{pokemonNameWithAffix}} no pueden subir más!",
  "statFell_one": "¡El {{stats}} de {{pokemonNameWithAffix}} ha bajado!",
  "statFell_other": "¡{{stats}} de\n{{pokemonNameWithAffix}} han bajado!",
  "statHarshlyFell_one": "¡El {{stats}} de {{pokemonNameWithAffix}} ha bajado mucho!",
  "statHarshlyFell_other": "¡{{stats}} de\n{{pokemonNameWithAffix}} han bajado mucho!",
  "statSeverelyFell_one": "¡El {{stats}} de {{pokemonNameWithAffix}} ha bajado muchísimo!",
  "statSeverelyFell_other": "¡{{stats}} de\n{{pokemonNameWithAffix}} han bajado muchísimo!",
  "statWontGoAnyLower_one": "¡El {{stats}} de {{pokemonNameWithAffix}} no puede bajar más!",
  "statWontGoAnyLower_other": "¡{{stats}} de\n{{pokemonNameWithAffix}} no pueden bajar más!",
  "transformedIntoType": "{{pokemonName}} transformed\ninto the {{type}} type!",
  "retryBattle": "Would you like to retry from the start of the battle?",
  "unlockedSomething": "{{unlockedThing}}\nhas been unlocked.",
  "congratulations": "Congratulations!",
  "beatModeFirstTime": "{{speciesName}} beat {{gameMode}} Mode for the first time!\nYou received {{newModifier}}!",
  "ppReduced": "It reduced the PP of {{targetName}}'s\n{{moveName}} by {{reduction}}!",
} as const;
