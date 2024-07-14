import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "{{bossName}} erscheint.",
  "trainerAppeared": "{{trainerName}}\nmöchte kämpfen!",
  "trainerAppearedDouble": "{{trainerName}}\nmöchten kämpfen!",
  "trainerSendOut": "{{trainerName}} setzt\n{{pokemonName}} ein!",
  "singleWildAppeared": "Ein wildes {{pokemonName}} erscheint!",
  "multiWildAppeared": "Ein wildes {{pokemonName1}}\nund {{pokemonName2}} erscheinen!",
  "playerComeBack": "Komm zurück, {{pokemonName}}!",
  "trainerComeBack": "{{trainerName}} ruft {{pokemonName}} zurück!",
  "playerGo": "Los! {{pokemonName}}!",
  "trainerGo": "{{trainerName}} sendet {{pokemonName}} raus!",
  "switchQuestion": "Möchtest du\n{{pokemonName}} auswechseln?",
  "trainerDefeated": "{{trainerName}}\nwurde besiegt!",
  "moneyWon": "Du gewinnst\n{{moneyAmount}} ₽!",
  "moneyPickedUp": "Du hebst {{moneyAmount}} ₽ auf!",
  "pokemonCaught": "{{pokemonName}} wurde gefangen!",
  "addedAsAStarter": "{{pokemonName}} wurde als Starterpokémon hinzugefügt!",
  "partyFull": "Dein Team ist voll.\nMöchtest du ein Pokémon durch {{pokemonName}} ersetzen?",
  "pokemon": "Pokémon",
  "sendOutPokemon": "Los, {{pokemonName}}!",
  "hitResultCriticalHit": "Ein Volltreffer!",
  "hitResultSuperEffective": "Das ist sehr effektiv!",
  "hitResultNotVeryEffective": "Das ist nicht sehr effektiv…",
  "hitResultNoEffect": "Es hat keine Wirkung auf {{pokemonName}}…",
  "hitResultOneHitKO": "Ein K.O.-Treffer!",
  "attackFailed": "Es ist fehlgeschlagen!",
  "attackMissed": "Die Attacke hat {{pokemonNameWithAffix}} verfehlt!",
  "attackHitsCount": "{{count}}-mal getroffen!",
  "rewardGain": "Du erhältst\n{{modifierName}}!",
  "expGain": "{{pokemonName}} erhält\n{{exp}} Erfahrungspunkte!",
  "levelUp": "{{pokemonName}} erreicht\nLv. {{level}}!",
  "learnMove": "{{pokemonName}} erlernt\n{{moveName}}!",
  "learnMovePrompt": "{{pokemonName}} versucht, {{moveName}} zu erlernen.",
  "learnMoveLimitReached": "Aber {{pokemonName}} kann nur\nmaximal vier Attacken erlernen.",
  "learnMoveReplaceQuestion": "Soll eine bekannte Attacke durch\n{{moveName}} ersetzt werden?",
  "learnMoveStopTeaching": "{{moveName}} nicht\nerlernen?",
  "learnMoveNotLearned": "{{pokemonName}} hat\n{{moveName}} nicht erlernt.",
  "learnMoveForgetQuestion": "Welche Attacke soll vergessen werden?",
  "learnMoveForgetSuccess": "{{pokemonName}} hat\n{{moveName}} vergessen.",
  "countdownPoof": "@d{32}Eins, @d{15}zwei @d{15}und@d{15}… @d{15}… @d{15}… @d{15}@s{pb_bounce_1}schwupp!",
  "learnMoveAnd": "Und…",
  "levelCapUp": "Die Levelbeschränkung\nwurde auf {{levelCap}} erhöht!",
  "moveNotImplemented": "{{moveName}} ist noch nicht implementiert und kann nicht ausgewählt werden.",
  "moveNoPP": "Es sind keine AP für\ndiese Attacke mehr übrig!",
  "moveDisabled": "{{moveName}} ist deaktiviert!",
  "noPokeballForce": "Eine unsichtbare Kraft\nverhindert die Nutzung von Pokébällen.",
  "noPokeballTrainer": "Du kannst das Pokémon\neines anderen Trainers nicht fangen!",
  "noPokeballMulti": "Du kannst erst einen Pokéball werfen,\nwenn nur noch ein Pokémon übrig ist!",
  "noPokeballStrong": "Das Ziel-Pokémon ist zu stark, um gefangen zu werden!\nDu musst es zuerst schwächen!",
  "noEscapeForce": "Eine unsichtbare Kraft\nverhindert die Flucht.",
  "noEscapeTrainer": "Du kannst nicht\naus einem Trainerkampf fliehen!",
  "noEscapePokemon": "{{pokemonName}}'s {{moveName}}\nverhindert {{escapeVerb}}!",
  "runAwaySuccess": "Du bist entkommen!",
  "runAwayCannotEscape": "Flucht gescheitert!",
  "escapeVerbSwitch": "auswechseln",
  "escapeVerbFlee": "flucht",
  "skipItemQuestion": "Bist du sicher, dass du kein Item nehmen willst?",
  "notDisabled": "{{pokemonName}}'s {{moveName}} ist\nnicht mehr deaktiviert!",
  "turnEndHpRestore": "Die KP von {{pokemonName}} wurden wiederhergestellt.",
  "hpIsFull": "Die KP von {{pokemonName}} sind voll!",
  "eggHatching": "Oh?",
  "ivScannerUseQuestion": "IV-Scanner auf {{pokemonName}} benutzen?",
  "wildPokemonWithAffix": "{{pokemonName}} (wild)",
  "foePokemonWithAffix": "{{pokemonName}} (Gegner)",
  "useMove": "{{pokemonNameWithAffix}} setzt {{moveName}} ein!",
  "drainMessage": "{{pokemonName}} wurde Energie abgesaugt",
  "regainHealth": "KP von {{pokemonName}} wurden wieder aufgefrischt!",
  "stealEatBerry": "{{pokemonName}} stole and ate\n{{targetName}}'s {{berryName}}!",
  "ppHealBerry": "{{berryName}} von {{pokemonNameWithAffix}} füllt AP von {{moveName}} auf!",
  "hpHealBerry": "{{berryName}} füllt KP von {{pokemonNameWithAffix}} auf!",
  "fainted": "{{pokemonNameWithAffix}} wurde besiegt!",
  "statsAnd": "und",
  "stats": "Alle Werte",
  "statRose_one": "{{stats}} von {{pokemonNameWithAffix}} steigt!",
  "statRose_other": "{{stats}} von {{pokemonNameWithAffix}} steigen!",
  "statSharplyRose_one": "{{stats}} von {{pokemonNameWithAffix}} steigt stark!",
  "statSharplyRose_other": "{{stats}} von {{pokemonNameWithAffix}} steigen stark!",
  "statRoseDrastically_one": "{{stats}} von {{pokemonNameWithAffix}} steigt drastisch!",
  "statRoseDrastically_other": "{{stats}} von {{pokemonNameWithAffix}} steigen drastisch!",
  "statWontGoAnyHigher_one": "{{stats}} von {{pokemonNameWithAffix}} kann nicht weiter erhöht werden!",
  "statWontGoAnyHigher_other": "{{stats}} von {{pokemonNameWithAffix}} können nicht weiter erhöht werden!",
  "statFell_one": "{{stats}} von {{pokemonNameWithAffix}} sinkt!",
  "statFell_other": "{{stats}} von {{pokemonNameWithAffix}} sinken!",
  "statHarshlyFell_one": "{{stats}} von {{pokemonNameWithAffix}} sinkt stark!",
  "statHarshlyFell_other": "{{stats}} von {{pokemonNameWithAffix}} sinken stark!",
  "statSeverelyFell_one": "{{stats}} von {{pokemonNameWithAffix}} sinkt drastisch!",
  "statSeverelyFell_other": "{{stats}} von {{pokemonNameWithAffix}} sinken drastisch!",
  "statWontGoAnyLower_one": "{{stats}} von {{pokemonNameWithAffix}} kann nicht weiter sinken!",
  "statWontGoAnyLower_other": "{{stats}} von {{pokemonNameWithAffix}} können nicht weiter sinken!",
  "ppReduced": "{{moveName}} von {{targetName}} wird um {{reduction}} AP reduziert!",
  "retryBattle": "Möchtest du vom Beginn des Kampfes neustarten?",
  "unlockedSomething": "{{unlockedThing}} wurde freigeschaltet.",
  "congratulations": "Glückwunsch!",
  "beatModeFirstTime": "{{speciesName}} hat den {{gameMode}} Modus zum ersten Mal beendet! Du erhältst {{newModifier}}!",
  "battlerTagsRechargingLapse": "{{pokemonNameWithAffix}} kann sich wegen des Rückstoßes durch den Angriff nicht bewegen!",
  "battlerTagsTrappedOnAdd": "{{pokemonNameWithAffix}} kann nicht mehr fliehen!",
  "battlerTagsTrappedOnRemove": "{{pokemonNameWithAffix}} wurde von {{moveName}} befreit.",
  "battlerTagsFlinchedLapse": "{{pokemonNameWithAffix}} ist zurückgeschreckt und kann nicht handeln!",
  "battlerTagsConfusedOnAdd": "{{pokemonNameWithAffix}} wurde verwirrt!",
  "battlerTagsConfusedOnRemove": "{{pokemonNameWithAffix}} ist nicht mehr verwirrt!",
  "battlerTagsConfusedOnOverlap": "{{pokemonNameWithAffix}} ist bereits verwirrt!",
  "battlerTagsConfusedLapse": "{{pokemonNameWithAffix}} ist verwirrt!",
  "battlerTagsConfusedLapseHurtItself": "Es hat sich vor Verwirrung selbst verletzt!",
  "battlerTagsDestinyBondLapseIsBoss": "{{pokemonNameWithAffix}} ist immun gegen den Effekt von Abgangsbund!",
  "battlerTagsDestinyBondLapse": "{{pokemonNameWithAffix}} nimmt {{pokemonNameWithAffix2}} mit sich!",
  "battlerTagsInfatuatedOnAdd": "{{pokemonNameWithAffix}} hat sich in {{sourcePokemonName}} verliebt!",
  "battlerTagsInfatuatedOnOverlap": "{{pokemonNameWithAffix}} ist bereits verliebt.",
  "battlerTagsInfatuatedLapse": "{{pokemonNameWithAffix}} ist in {{sourcePokemonName}} verliebt!",
  "battlerTagsInfatuatedLapseImmobilize": "{{pokemonNameWithAffix}} ist starr vor Liebe!",
  "battlerTagsInfatuatedOnRemove": "{{pokemonNameWithAffix}} ist nicht mehr verliebt!",
  "battlerTagsSeededOnAdd": "{{pokemonNameWithAffix}} wurde bepflanzt!",
  "battlerTagsSeededLapse": "{{pokemonNameWithAffix}} wurden durch Egelsamen KP geraubt!",
  "battlerTagsSeededLapseShed": "Egelsamen von {{pokemonNameWithAffix}} saugt Kloakensoße auf!",
  "battlerTagsNightmareOnAdd": "Nachtmahr sucht {{pokemonNameWithAffix}} heim!",
  "battlerTagsNightmareOnOverlap": "{{pokemonNameWithAffix}} wird bereits von Nachtmahr heimgesucht!",
  "battlerTagsNightmareLapse": "Nachtmahr schadet {{pokemonNameWithAffix}}!",
  "battlerTagsEncoreOnAdd": "{{pokemonNameWithAffix}} gibt eine Zugabe",
  "battlerTagsEncoreOnRemove": "Die Zugabe von {{pokemonNameWithAffix}} ist beendet!",
  "battlerTagsHelpingHandOnAdd": "{{pokemonNameWithAffix}} will {{pokemonName}} helfen!",
  "battlerTagsIngrainLapse": "{{pokemonNameWithAffix}} nimmt über seine Wurzeln Nährstoffe auf!",
  "battlerTagsIngrainOnTrap": "{{pokemonNameWithAffix}} pflanzt seine Wurzeln!",
  "battlerTagsAquaRingOnAdd": "{{pokemonNameWithAffix}} umgibt sich mit einem Wasserring!",
  "battlerTagsAquaRingLapse": "{{moveName}} füllt KP von {{pokemonName}} wieder auf!",
  "battlerTagsDrowsyOnAdd": "{{pokemonNameWithAffix}} wurde schläfrig gemacht!",
  "battlerTagsDamagingTrapLapse": "{{pokemonNameWithAffix}} wurde durch {{moveName}} verletzt!",
  "battlerTagsBindOnTrap": "{{pokemonNameWithAffix}} wurde durch {{moveName}} von {{sourcePokemonName}} gequetscht!",
  "battlerTagsWrapOnTrap": "{{pokemonNameWithAffix}} wurde von {{sourcePokemonName}} umwickelt!",
  "battlerTagsVortexOnTrap": "{{pokemonNameWithAffix}} wird in dem Strudel gefangen!",
  "battlerTagsClampOnTrap": "{{sourcePokemonNameWithAffix}} wurde von {{pokemonName}} geschnappt!",
  "battlerTagsSandTombOnTrap": "{{pokemonNameWithAffix}} wurde von {{moveName}} gefangen!",
  "battlerTagsMagmaStormOnTrap": "{{pokemonNameWithAffix}} wurde in wirbelndem Magma eingeschlossen!",
  "battlerTagsSnapTrapOnTrap": "{{pokemonNameWithAffix}} wurde durch Sandgrab gefangen!",
  "battlerTagsThunderCageOnTrap": "{{sourcePokemonNameWithAffix}} hat {{pokemonNameWithAffix}} gefangen!",
  "battlerTagsInfestationOnTrap": "{{sourcePokemonNameWithAffix}} plagt {{pokemonNameWithAffix}}!",
  "battlerTagsProtectedOnAdd": "{{pokemonNameWithAffix}} schützt sich selbst!",
  "battlerTagsProtectedLapse": "{{pokemonNameWithAffix}} schützt sich selbst!",
  "battlerTagsEnduringOnAdd": "{{pokemonNameWithAffix}} sammelt sich, um die nächste Attacke zu überstehen!",
  "battlerTagsEnduringLapse": "{{pokemonNameWithAffix}} übersteht die Attacke!",
  "battlerTagsSturdyLapse": "{{pokemonNameWithAffix}} übersteht die Attacke!",
  "battlerTagsPerishSongLapse": "Abgesang von {{pokemonNameWithAffix}} steht bei {{turnCount}}.",
  "battlerTagsCenterOfAttentionOnAdd": "{{pokemonNameWithAffix}} became the center\nof attention!",
  "battlerTagsTruantLapse": "{{pokemonNameWithAffix}} faulenzt!",
  "battlerTagsSlowStartOnAdd": "{{pokemonNameWithAffix}} kommt nicht in Fahrt!",
  "battlerTagsSlowStartOnRemove": "{{pokemonNameWithAffix}} kriegt schließlich doch noch die Kurve!",
  "battlerTagsHighestStatBoostOnAdd": "{{statName}} von {{pokemonNameWithAffix}} wird verstärkt!",
  "battlerTagsHighestStatBoostOnRemove": "Der Effekt von {{abilityName}} von {{pokemonNameWithAffix}} lässt nach!",
  "battlerTagsMagnetRisenOnAdd": "{{pokemonNameWithAffix}} levitated with electromagnetism!",
  "battlerTagsMagnetRisenOnRemove": "{{pokemonNameWithAffix}}'s electromagnetism wore off!",
  "battlerTagsCritBoostOnAdd": "{{pokemonNameWithAffix}} läuft zu Hochtouren auf!",
  "battlerTagsCritBoostOnRemove": "{{pokemonNameWithAffix}} entspannt.",
  "battlerTagsSaltCuredOnAdd": "{{pokemonNameWithAffix}} wurde eingepökelt!",
  "battlerTagsSaltCuredLapse": "{{pokemonNameWithAffix}} wurde durch {{moveName}} verletzt!",
  "battlerTagsCursedOnAdd": "{{pokemonNameWithAffix}} nimmt einen Teil seiner KP und legt einen Fluch auf {{pokemonName}}!",
  "battlerTagsCursedLapse": "{{pokemonNameWithAffix}} wurde durch den Fluch verletzt!",
  "battlerTagsStockpilingOnAdd": "{{pokemonNameWithAffix}} stockpiled {{stockpiledCount}}!"
} as const;
