import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "{{bossName}} apareceu.",
  "trainerAppeared": "{{trainerName}}\nquer batalhar!",
  "trainerAppearedDouble": "{{trainerName}}\nquerem batalhar!",
  "singleWildAppeared": "Um {{pokemonName}} selvagem apareceu!",
  "trainerSendOut": "{{trainerName}} escolheu\n{{pokemonName}}!",
  "multiWildAppeared": "Um {{pokemonName1}} e um {{pokemonName2}} selvagens\napareceram!",
  "playerComeBack": "{{pokemonName}}, retorne!",
  "trainerComeBack": "{{trainerName}} retirou {{pokemonName}} da batalha!",
  "playerGo": "{{pokemonName}}, eu escolho você!",
  "trainerGo": "{{trainerName}} escolheu {{pokemonName}}!",
  "switchQuestion": "Quer trocar\nde {{pokemonName}}?",
  "trainerDefeated": "Você derrotou\n{{trainerName}}!",
  "moneyWon": "Você ganhou\n₽{{moneyAmount}} por ganhar!",
  "pokemonCaught": "{{pokemonName}} foi capturado!",
  "partyFull": "Sua equipe está cheia.\nSolte um Pokémon para ter espaço para {{pokemonName}}?",
  "pokemon": "Pokémon",
  "sendOutPokemon": "{{pokemonName}}, eu escolho você!!",
  "hitResultCriticalHit": "Um golpe crítico!",
  "hitResultSuperEffective": "É supereficaz!",
  "hitResultNotVeryEffective": "É pouco eficaz...",
  "hitResultNoEffect": "Isso não afeta {{pokemonName}}!",
  "hitResultOneHitKO": "Foi um nocaute de um golpe!",
  "attackFailed": "Mas falhou!",
  "attackHitsCount": "Acertou {{count}} vezes.",
  "expGain": "{{pokemonName}} ganhou\n{{exp}} pontos de experiência.",
  "levelUp": "{{pokemonName}} subiu para \nNv. {{level}}!",
  "learnMove": "{{pokemonName}} aprendeu {{moveName}}!",
  "learnMovePrompt": "{{pokemonName}} quer aprender\n{{moveName}}.",
  "learnMoveLimitReached": "Porém, {{pokemonName}} já sabe\nquatro movimentos.",
  "learnMoveReplaceQuestion": "Quer substituir um de seus movimentos por {{moveName}}?",
  "learnMoveStopTeaching": "Você não quer aprender\n{{moveName}}?",
  "learnMoveNotLearned": "{{pokemonName}} não aprendeu {{moveName}}.",
  "learnMoveForgetQuestion": "Qual movimento quer esquecer?",
  "learnMoveForgetSuccess": "{{pokemonName}} esqueceu como usar {{moveName}}.",
  "countdownPoof": "@d{32}1, @d{15}2, @d{15}e@d{15}… @d{15}… @d{15}… @d{15}@s{pb_bounce_1}Puf!",
  "learnMoveAnd": "E…",
  "levelCapUp": "O nível máximo aumentou\npara {{levelCap}}!",
  "moveNotImplemented": "{{moveName}} ainda não foi implementado e não pode ser usado.",
  "moveNoPP": "Não há mais PP\npara esse movimento!",
  "moveDisabled": "Não se pode usar {{moveName}} porque foi desabilitado!",
  "noPokeballForce": "Uma força misteriosa\nte impede de usar Poké Bolas.",
  "noPokeballTrainer": "Não se pode capturar\nPokémon dos outros!",
  "noPokeballMulti": "Não se pode lançar Poké Bolas\nquando há mais de um Pokémon!",
  "noPokeballStrong": "Este Pokémon é forte demais para ser capturado!\nÉ preciso enfraquecê-lo primeiro!",
  "noEscapeForce": "Uma força misteriosa\nte impede de fugir.",
  "noEscapeTrainer": "Não se pode fugir de\nbatalhas contra treinadores!",
  "noEscapePokemon": "O movimento {{moveName}} de {{pokemonName}} te impede de fugir!",
  "runAwaySuccess": "Você fugiu com sucesso.",
  "runAwayCannotEscape": "Você nao conseguiu fugir!",
  "escapeVerbSwitch": "trocar",
  "escapeVerbFlee": "fugir",
  "notDisabled": "O movimento {{moveName}}\nnão está mais desabilitado!",
  "hpRestored": "{{pokemonName}}'s HP was restored.",
  "hpIsFull": "{{pokemonName}}'s\nHP is full!",
  "skipItemQuestion": "Tem certeza de que não quer escolher um item?",
  "eggHatching": "Opa?",
  "ivScannerUseQuestion": "Quer usar o Scanner de IVs em {{pokemonName}}?",
  "wildPokemonWithAffix": "{{pokemonName}} selvagem",
  "foePokemonWithAffix": "{{pokemonName}} adversário",
  "useMove": "{{pokemonNameWithAffix}} usou {{moveName}}!",
  "drainMessage": "{{pokemonName}} teve sua\nenergia drenada!",
  "regainHealth": "{{pokemonName}} recuperou\npontos de saúde!",
  "fainted": "{{pokemonNameWithAffix}} desmaiou!",
  "statRose": "aumentou",
  "statSharplyRose": "aumentou bruscamente",
  "statRoseDrastically": "aumentou drasticamente",
  "statWontGoAnyHigher": "não vai mais aumentar",
  "statFell": "diminuiu",
  "statHarshlyFell": "diminuiu duramente",
  "statSeverelyFell": "diminuiu severamente",
  "statWontGoAnyLower": "não vai mais diminuir",
  "ppReduced": "It reduced the PP of {{targetName}}'s\n{{moveName}} by {{reduction}}!",
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
  "battlerTagsPerishSongLapse": "{{pokemonNameWithAffix}}'s perish count fell to {{turnCount}}.",
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
