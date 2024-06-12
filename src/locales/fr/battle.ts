import { SimpleTranslationEntries } from "#app/plugins/i18n";

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
  "pokemonCaught": "Vous avez attrapé {{pokemonName}} !",
  "partyFull": "Votre équipe est pleine.\nRelâcher un Pokémon pour {{pokemonName}} ?",
  "pokemon": "Pokémon",
  "sendOutPokemon": "{{pokemonName}} ! Go !",
  "hitResultCriticalHit": "Coup critique !",
  "hitResultSuperEffective": "C’est super efficace !",
  "hitResultNotVeryEffective": "Ce n’est pas très efficace…",
  "hitResultNoEffect": "Ça n’affecte pas {{pokemonName}}…",
  "hitResultOneHitKO": "K.O. en un coup !",
  "attackFailed": "Mais cela échoue !",
  "attackHitsCount": "Touché {{count}} fois !",
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
  "skipItemQuestion": "Êtes-vous sûr·e de ne pas vouloir prendre d’objet ?",
  "eggHatching": "Oh ?",
  "ivScannerUseQuestion": "Utiliser le Scanner d’IV sur {{pokemonName}} ?",
  "wildPokemonWithAffix": "{{pokemonName}} sauvage",
  "foePokemonWithAffix": "{{pokemonName}} ennemi",
  "useMove": "{{pokemonNameWithAffix}} utilise\n{{moveName}} !",
  "drainMessage": "{{pokemonName}} had its\nenergy drained!",
  "regainHealth": "{{pokemonName}} regained\nhealth!",
  "fainted": "{{pokemonNameWithAffix}} fainted!",
  "battlerTagsRechargingLapse": "{{pokemonNameWithAffix}} must\nrecharge!",
  "battlerTagsTrappedOnAdd": "{{pokemonNameWithAffix}} can no\nlonger escape!",
  "battlerTagsTrappedOnRemove": "{{pokemonNameWithAffix}} was freed\nfrom {{moveName}}",
  "battlerTagsFlinchedLapse": "{{pokemonNameWithAffix}} flinched!",
  "battlerTagsConfusedOnAdd": "{{pokemonNameWithAffix}} became\nconfused!",
  "battlerTagsConfusedOnRemove": "{{pokemonNameWithAffix}} snapped\nout of confusion!",
  "battlerTagsConfusedOnOverlap": "{{pokemonNameWithAffix}} is\nalready confused!",
  "battlerTagsConfusedLapse": "{{pokemonNameWithAffix}} is\nconfused!",
  "battlerTagsConfusedLapseHurtItself": "It hurt itself in its\nconfusion!",
  "battlerTagsDestinyBondLapseIsBoss": "{{pokemonNameWithAffix}} is unaffected\nby the effects of Destiny Bond.",
  "battlerTagsDestinyBondLapse": "{{pokemonNameWithAffix}} took\n{{pokemonNameWithAffix2}} down with it!",
  "battlerTagsInfatuatedOnAdd": "{{pokemonNameWithAffix}} fell in love\nwith {{sourcePokemonName}}!",
  "battlerTagsInfatuatedOnOverlap": "{{pokemonNameWithAffix}} is\nalready in love!",
  "battlerTagsInfatuatedLapse": "{{pokemonNameWithAffix}} is in love\nwith {{sourcePokemonName}}!",
  "battlerTagsInfatuatedLapseImmobilize": "{{pokemonNameWithAffix}} is\nimmobilized by love!",
  "battlerTagsInfatuatedOnRemove": "{{pokemonNameWithAffix}} got over\nits infatuation.",
  "battlerTagsSeededOnAdd": "{{pokemonNameWithAffix}} was seeded!",
  "battlerTagsSeededLapse": "{{pokemonNameWithAffix}}'s health is\nsapped by Leech Seed!",
  "battlerTagsSeededLapseShed": "{{pokemonNameWithAffix}}'s Leech Seed\nsucked up the liquid ooze!",
  "battlerTagsNightmareOnAdd": "{{pokemonNameWithAffix}} began\nhaving a Nightmare!",
  "battlerTagsNightmareOnOverlap": "{{pokemonNameWithAffix}} is\nalready locked in a Nightmare!",
  "battlerTagsNightmareLapse": "{{pokemonNameWithAffix}} is locked\nin a Nightmare!",
  "battlerTagsEncoreOnAdd": "({{pokemonNameWithAffix}} got\nan Encore!",
  "battlerTagsEncoreOnRemove": "{{pokemonNameWithAffix}}'s Encore\nended!",
  "battlerTagsHelpingHandOnAdd": "{{pokemonNameWithAffix}} is ready to\nhelp {{pokemonName}}!",
  "battlerTagsIngrainLapse": "{{pokemonNameWithAffix}} absorbed\nnutrients with its roots!",
  "battlerTagsIngrainOnTrap": "{{pokemonNameWithAffix}} planted its roots!",
  "battlerTagsAquaRingOnAdd": "{{pokemonNameWithAffix}} surrounded\nitself with a veil of water!",
  "battlerTagsAquaRingLapse": "{{moveName}} restored\n{{pokemonName}}'s HP!",
  "battlerTagsDrowsyOnAdd": "{{pokemonNameWithAffix}} grew drowsy!",
  "battlerTagsDamagingTrapLapse": "{{pokemonNameWithAffix}} is hurt\nby {{moveName}}!",
  "battlerTagsBindOnTrap": "{{pokemonNameWithAffix}} was squeezed by\n{{sourcePokemonName}}'s {{moveName}}!",
  "battlerTagsWrapOnTrap": "{{pokemonNameWithAffix}} was Wrapped\nby {{sourcePokemonName}}!",
  "battlerTagsVortexOnTrap": "{{pokemonNameWithAffix}} was trapped\nin the vortex!",
  "battlerTagsClampOnTrap": "{{sourcePokemonNameWithAffix}} Clamped\n{{pokemonName}}!",
  "battlerTagsSandTombOnTrap": "{{pokemonNameWithAffix}} became trapped\nby {{moveName}}!",
  "battlerTagsMagmaStormOnTrap": "{{pokemonNameWithAffix}} became trapped\nby swirling magma!",
  "battlerTagsSnapTrapOnTrap": "{{pokemonNameWithAffix}} got trapped\nby a snap trap!",
  "battlerTagsThunderCageOnTrap": "{{sourcePokemonNameWithAffix}} trapped\n{{pokemonNameWithAffix}}!",
  "battlerTagsInfestationOnTrap": "{{pokemonNameWithAffix}} has been afflicted \nwith an infestation by {{sourcePokemonNameWithAffix}}!",
  "battlerTagsProtectedOnAdd": "{{pokemonNameWithAffix}}\nprotected itself!",
  "battlerTagsProtectedLapse": "{{pokemonNameWithAffix}}\nprotected itself!",
  "battlerTagsEnduringOnAdd": "{{pokemonNameWithAffix}} braced\nitself!",
  "battlerTagsEnduringLapse": "{{pokemonNameWithAffix}} endured\nthe hit!",
  "battlerTagsSturdyLapse": "{{pokemonNameWithAffix}} endured\nthe hit!",
  "battlerTagsPerishSongLapse": "{{pokemonNameWithAffix}}\'s perish count fell to {{turnCount}}.",
  "battlerTagsTruantLapse": "{{pokemonNameWithAffix}} is\nloafing around!",
  "battlerTagsSlowStartOnAdd": "{{pokemonNameWithAffix}} can't\nget it going!",
  "battlerTagsSlowStartOnRemove": "{{pokemonNameWithAffix}} finally\ngot its act together!",
  "battlerTagsHighestStatBoostOnAdd": "{{pokemonNameWithAffix}}'s {{statName}}\nwas heightened!",
  "battlerTagsHighestStatBoostOnRemove": "The effects of {{pokemonNameWithAffix}}'s\n{{abilityName}} wore off!",
  "battlerTagsCritBoostOnAdd": "{{pokemonNameWithAffix}} is getting\npumped!",
  "battlerTagsCritBoostOnRemove": "{{pokemonNameWithAffix}} relaxed.",
  "battlerTagsSaltCuredOnAdd": "{{pokemonNameWithAffix}} is being salt cured!",
  "battlerTagsSaltCuredLapse": "{{pokemonNameWithAffix}} is hurt by {{moveName}}!",
  "battlerTagsCursedOnAdd": "{{pokemonNameWithAffix}} cut its own HP and put a curse on the {{pokemonName}}!",
  "battlerTagsCursedLapse": "{{pokemonNameWithAffix}} is afflicted by the Curse!"
} as const;
