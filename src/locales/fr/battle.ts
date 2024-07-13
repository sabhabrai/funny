import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "Un {{bossName}} apparait.",
  "trainerAppeared": "Un combat est lancé\npar {{trainerName}} !",
  "trainerAppearedDouble": "Un combat est lancé\npar {{trainerName}} !",
  "trainerSendOut": "{{pokemonName}} est envoyé par\n{{trainerName}} !",
  "singleWildAppeared": "Un {{pokemonName}} sauvage apparait !",
  "multiWildAppeared": "Un {{pokemonName1}} et un {{pokemonName2}}\nsauvages apparaissent !",
  "playerComeBack": "{{pokemonName}} !\nReviens !",
  "trainerComeBack": "{{trainerName}} retire {{pokemonName}} !",
  "playerGo": "{{pokemonName}} ! Go !",
  "trainerGo": "{{pokemonName}} est envoyé par\n{{trainerName}} !",
  "switchQuestion": "Voulez-vous changer\nvotre {{pokemonName}} ?",
  "trainerDefeated": "Vous avez battu\n{{trainerName}} !",
  "moneyWon": "Vous remportez\n{{moneyAmount}} ₽ !",
  "moneyPickedUp": "Vous obtenez {{moneyAmount}} ₽ !",
  "pokemonCaught": "Vous avez attrapé {{pokemonName}} !",
  "addedAsAStarter": "{{pokemonName}} est ajouté\ncomme starter !",
  "partyFull": "Votre équipe est pleine.\nRelâcher un Pokémon pour {{pokemonName}} ?",
  "pokemon": "Pokémon",
  "sendOutPokemon": "{{pokemonName}} ! Go !",
  "hitResultCriticalHit": "Coup critique !",
  "hitResultSuperEffective": "C’est super efficace !",
  "hitResultNotVeryEffective": "Ce n’est pas très efficace…",
  "hitResultNoEffect": "Ça n’affecte pas {{pokemonName}}…",
  "hitResultOneHitKO": "K.O. en un coup !",
  "attackFailed": "Mais cela échoue !",
  "attackMissed": "{{pokemonNameWithAffix}}\névite l’attaque !",
  "attackHitsCount": "Touché {{count}} fois !",
  "rewardGain": "Vous recevez\n{{modifierName}} !",
  "expGain": "{{pokemonName}} gagne\n{{exp}} Points d’Exp !",
  "levelUp": "{{pokemonName}} monte au\nN. {{level}} !",
  "learnMove": "{{pokemonName}} apprend\n{{moveName}} !",
  "learnMovePrompt": "{{pokemonName}} veut apprendre\n{{moveName}}.",
  "learnMoveLimitReached": "Cependant, {{pokemonName}} connait\ndéjà quatre capacités.",
  "learnMoveReplaceQuestion": "Voulez-vous oublier une capacité\net la remplacer par {{moveName}} ?",
  "learnMoveStopTeaching": "Arrêter d’apprendre\n{{moveName}} ?",
  "learnMoveNotLearned": "{{pokemonName}} n’a pas appris\n{{moveName}}.",
  "learnMoveForgetQuestion": "Quelle capacité doit être oubliée ?",
  "learnMoveForgetSuccess": "{{pokemonName}} oublie comment\nutiliser {{moveName}}.",
  "countdownPoof": "@d{32}1, @d{15}2, @d{15}et@d{15}… @d{15}… @d{15}… @d{15}@s{pb_bounce_1}Tadaaa !",
  "learnMoveAnd": "Et…",
  "levelCapUp": "La limite de niveau\na été augmentée à {{levelCap}} !",
  "moveNotImplemented": "{{moveName}} n’est pas encore implémenté et ne peut pas être sélectionné.",
  "moveNoPP": "Il n’y a plus de PP pour\ncette capacité !",
  "moveDisabled": "{{moveName}} est sous entrave !",
  "noPokeballForce": "Une force mystérieuse\nempêche l’utilisation des Poké Balls.",
  "noPokeballTrainer": "Le Dresseur détourne la Ball\nVoler, c’est mal !",
  "noPokeballMulti": "Impossible ! On ne peut pas viser\nquand il y a deux Pokémon !",
  "noPokeballStrong": "Le Pokémon est trop fort pour être capturé !\nVous devez d’abord l’affaiblir !",
  "noEscapeForce": "Une force mystérieuse\nempêche la fuite.",
  "noEscapeTrainer": "On ne s’enfuit pas d’un\ncombat de Dresseurs !",
  "noEscapePokemon": "{{moveName}} de {{pokemonName}}\nempêche {{escapeVerb}} !",
  "runAwaySuccess": "Vous prenez la fuite !",
  "runAwayCannotEscape": "Fuite impossible !",
  "escapeVerbSwitch": "le changement",
  "escapeVerbFlee": "la fuite",
  "notDisabled": "La capacité {{moveName}}\nde {{pokemonName}} n’est plus sous entrave !",
  "turnEndHpRestore": "{{pokemonName}} récupère des PV !",
  "hpIsFull": "Les PV de {{pokemonName}}\nsont au maximum !",
  "skipItemQuestion": "Êtes-vous sûr·e de ne pas vouloir prendre d’objet ?",
  "eggHatching": "Hein ?",
  "ivScannerUseQuestion": "Utiliser le Scanner d’IV sur {{pokemonName}} ?",
  "wildPokemonWithAffix": "{{pokemonName}} sauvage",
  "foePokemonWithAffix": "{{pokemonName}} ennemi",
  "useMove": "{{pokemonNameWithAffix}} utilise\n{{moveName}} !",
  "stealEatBerry": "{{pokemonName}} vole et mange\nla {{berryName}} de {{targetName}} !",
  "ppHealBerry": "La {{berryName}} de {{pokemonNameWithAffix}}\nrestaure les PP de sa capacité {{moveName}} !",
  "hpHealBerry": "La {{berryName}} de {{pokemonNameWithAffix}}\nrestaure son énergie !",
  "drainMessage": "L’énergie de {{pokemonName}}\nest drainée !",
  "regainHealth": "{{pokemonName}} récupère\ndes PV !",
  "fainted": "{{pokemonNameWithAffix}}\nest K.O. !",
  "statsAnd": "et",
  "stats": "Les stats",
  "statRose_one": "{{stats}} de {{pokemonNameWithAffix}}\naugmente !",
  "statRose_other": "{{stats}} de {{pokemonNameWithAffix}}\naugmentent !",
  "statSharplyRose_one": "{{stats}} de {{pokemonNameWithAffix}}\naugmente beaucoup !",
  "statSharplyRose_other": "{{stats}} de {{pokemonNameWithAffix}}\naugmentent beaucoup !",
  "statRoseDrastically_one": "{{stats}} de {{pokemonNameWithAffix}}\naugmente énormément !",
  "statRoseDrastically_other": "{{stats}} de {{pokemonNameWithAffix}}\naugmentent énormément !",
  "statWontGoAnyHigher_one": "{{stats}} de {{pokemonNameWithAffix}}\nne peut plus augmenter !",
  "statWontGoAnyHigher_other": "{{stats}} de {{pokemonNameWithAffix}}\nne peuvent plus augmenter !",
  "statFell_one": "{{stats}} de {{pokemonNameWithAffix}}\nbaisse !",
  "statFell_other": "{{stats}} de {{pokemonNameWithAffix}}\nbaissent !",
  "statHarshlyFell_one": "{{stats}} de {{pokemonNameWithAffix}}\nbaisse beaucoup !",
  "statHarshlyFell_other": "{{stats}} de {{pokemonNameWithAffix}}\nbaissent beaucoup !",
  "statSeverelyFell_one": "{{stats}} de {{pokemonNameWithAffix}}\nbaisse énormément !",
  "statSeverelyFell_other": "{{stats}} de {{pokemonNameWithAffix}}\nbaissent énormément !",
  "statWontGoAnyLower_one": "{{stats}} de {{pokemonNameWithAffix}}\nne peut plus baisser !",
  "statWontGoAnyLower_other": "{{stats}} de {{pokemonNameWithAffix}}\nne peuvent plus baisser !",
  "ppReduced": "Les PP de la capacité {{moveName}}\nde {{targetName}} baissent de {{reduction}} !",
  "retryBattle": "Voulez-vous réessayer depuis le début du combat ?",
  "unlockedSomething": "{{unlockedThing}}\na été débloqué.",
  "congratulations": "Félicitations !",
  "beatModeFirstTime": "{{speciesName}} a battu le mode {{gameMode}} pour la première fois !\nVous avez reçu {{newModifier}} !",
  "battlerTagsRechargingLapse": "Le contrecoup empêche {{pokemonNameWithAffix}}\n de bouger !",
  "battlerTagsTrappedOnAdd": "{{pokemonNameWithAffix}}\nne peut plus s’échapper !",
  "battlerTagsTrappedOnRemove": "{{pokemonNameWithAffix}} est libéré\nde la capacité {{moveName}} !",
  "battlerTagsFlinchedLapse": "{{pokemonNameWithAffix}} a la trouille !\nIl ne peut plus attaquer !",
  "battlerTagsConfusedOnAdd": "Ça rend {{pokemonNameWithAffix}}\nconfus !",
  "battlerTagsConfusedOnRemove": "{{pokemonNameWithAffix}}\nn’est plus confus !",
  "battlerTagsConfusedOnOverlap": "{{pokemonNameWithAffix}}\nest déjà confus !",
  "battlerTagsConfusedLapse": "{{pokemonNameWithAffix}}\nest confus !",
  "battlerTagsConfusedLapseHurtItself": "Il se blesse dans sa confusion.",
  "battlerTagsDestinyBondLapseIsBoss": "{{pokemonNameWithAffix}} n’est pas affecté\nle Lien du Destin !",
  "battlerTagsDestinyBondLapse": "{{pokemonNameWithAffix}} entraine\n{{pokemonNameWithAffix2}} dans sa chute !",
  "battlerTagsInfatuatedOnAdd": "{{pokemonNameWithAffix}} est amoureux\nde {{sourcePokemonName}} !",
  "battlerTagsInfatuatedOnOverlap": "{{pokemonNameWithAffix}} est\ndéjà amoureux !",
  "battlerTagsInfatuatedLapse": "{{pokemonNameWithAffix}} est amoureux\nde {{sourcePokemonName}} !",
  "battlerTagsInfatuatedLapseImmobilize": "L’amour empêche {{pokemonNameWithAffix}}\nd’agir !",
  "battlerTagsInfatuatedOnRemove": "{{pokemonNameWithAffix}}\nn’est plus amoureux !",
  "battlerTagsSeededOnAdd": "{{pokemonNameWithAffix}} est infecté !",
  "battlerTagsSeededLapse": "Vampigraine draine l’énergie\nde {{pokemonNameWithAffix}} !",
  "battlerTagsSeededLapseShed": "La Vampigraine de {{pokemonNameWithAffix}}\naspire le suintement !",
  "battlerTagsNightmareOnAdd": "{{pokemonNameWithAffix}} commence à cauchemarder !",
  "battlerTagsNightmareOnOverlap": "{{pokemonNameWithAffix}} est\ndéjà prisonnier d’un cauchemar !",
  "battlerTagsNightmareLapse": "{{pokemonNameWithAffix}}est\nprisonnier d’un cauchemar !",
  "battlerTagsEncoreOnAdd": "{{pokemonNameWithAffix}} !\nEncore une fois !",
  "battlerTagsEncoreOnRemove": "{{pokemonNameWithAffix}} n’est\nplus obligé d’utiliser la même capacité !",
  "battlerTagsHelpingHandOnAdd": "{{pokemonNameWithAffix}} est prêt\nà aider {{pokemonName}} !",
  "battlerTagsIngrainLapse": "{{pokemonNameWithAffix}} absorbe\ndes nutriments avec ses racines !",
  "battlerTagsIngrainOnTrap": "{{pokemonNameWithAffix}}\nplante ses racines !",
  "battlerTagsAquaRingOnAdd": "{{pokemonNameWithAffix}} s’entoure\nd’un voile d’eau !",
  "battlerTagsAquaRingLapse": "{{moveName}} restaure\nles PV de {{pokemonName}} !",
  "battlerTagsDrowsyOnAdd": "Ça rend {{pokemonNameWithAffix}} somnolent !",
  "battlerTagsDamagingTrapLapse": "{{pokemonNameWithAffix}} est blessé\npar la capacité {{moveName}} !",
  "battlerTagsBindOnTrap": "{{pokemonNameWithAffix}} est pris dans\nl’étreinte de {{sourcePokemonName}} !",
  "battlerTagsWrapOnTrap": "{{pokemonNameWithAffix}} est ligoté\npar {{sourcePokemonName}} !",
  "battlerTagsVortexOnTrap": "{{pokemonNameWithAffix}} est piégé\ndans le tourbillon !",
  "battlerTagsClampOnTrap": "{{sourcePokemonNameWithAffix}} est pris dans le Claquoir\nde {{pokemonName}} !",
  "battlerTagsSandTombOnTrap": "{{pokemonNameWithAffix}} est piégé\npar {{moveName}} !",
  "battlerTagsMagmaStormOnTrap": "{{pokemonNameWithAffix}} est piégé\ndans un tourbillon de magma !",
  "battlerTagsSnapTrapOnTrap": "{{pokemonNameWithAffix}} est tombé\ndans un Troquenard !",
  "battlerTagsThunderCageOnTrap": "{{pokemonNameWithAffix}} se fait emprisonner\npar {{sourcePokemonNameWithAffix}} !",
  "battlerTagsInfestationOnTrap": "{{pokemonNameWithAffix}} est harcelé\npar {{sourcePokemonNameWithAffix}} !",
  "battlerTagsProtectedOnAdd": "{{pokemonNameWithAffix}}\nest prêt à se protéger !",
  "battlerTagsProtectedLapse": "{{pokemonNameWithAffix}}\nse protège !",
  "battlerTagsEnduringOnAdd": "{{pokemonNameWithAffix}} se prépare\nà encaisser les coups !",
  "battlerTagsEnduringLapse": "{{pokemonNameWithAffix}}\nencaisse les coups !",
  "battlerTagsSturdyLapse": "{{pokemonNameWithAffix}}\nencaisse les coups !",
  "battlerTagsPerishSongLapse": "Le compte à rebours de Requiem\nde {{pokemonNameWithAffix}} descend à {{turnCount}} !",
  "battlerTagsCenterOfAttentionOnAdd": "{{pokemonNameWithAffix}} became the center\nof attention!",
  "battlerTagsTruantLapse": "{{pokemonNameWithAffix}} paresse !",
  "battlerTagsSlowStartOnAdd": "{{pokemonNameWithAffix}}\nn’arrive pas à se motiver !",
  "battlerTagsSlowStartOnRemove": "{{pokemonNameWithAffix}}\narrive enfin à s’y mettre sérieusement !",
  "battlerTagsHighestStatBoostOnAdd": "{{statName}} de {{pokemonNameWithAffix}}\nest renforcée !",
  "battlerTagsHighestStatBoostOnRemove": "L’effet du talent {{abilityName}}\nde {{pokemonNameWithAffix}} se dissipe !",
  "battlerTagsMagnetRisenOnAdd": "{{pokemonNameWithAffix}} levitated with electromagnetism!",
  "battlerTagsMagnetRisenOnRemove": "{{pokemonNameWithAffix}}'s electromagnetism wore off!",
  "battlerTagsCritBoostOnAdd": "{{pokemonNameWithAffix}}\nest prêt à tout donner !",
  "battlerTagsCritBoostOnRemove": "{{pokemonNameWithAffix}} se détend.",
  "battlerTagsSaltCuredOnAdd": "{{pokemonNameWithAffix}}\nest couvert de sel !",
  "battlerTagsSaltCuredLapse": "{{pokemonNameWithAffix}} est blessé\npar la capacité {{moveName}} !",
  "battlerTagsCursedOnAdd": "{{pokemonNameWithAffix}} sacrifie des PV\net lance une malédiction sur {{pokemonName}} !",
  "battlerTagsCursedLapse": "{{pokemonNameWithAffix}} est touché par la malédiction !"
} as const;
