import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "{{bossName}}[[가]] 나타났다.",
  "trainerAppeared": "{{trainerName}}[[가]]\n승부를 걸어왔다!",
  "trainerAppearedDouble": "{{trainerName}}[[가]]\n승부를 걸어왔다!",
  "trainerSendOut": "{{trainerName}}[[는]]\n{{pokemonName}}[[를]] 내보냈다!",
  "singleWildAppeared": "앗! 야생 {{pokemonName}}[[가]]\n튀어나왔다!",
  "multiWildAppeared": "야생 {{pokemonName1}}[[와]]\n{{pokemonName2}}[[가]] 튀어나왔다!",
  "playerComeBack": "돌아와, {{pokemonName}}!",
  "trainerComeBack": "{{trainerName}}[[는]] {{pokemonName}}[[를]] 넣어버렸다!",
  "playerGo": "가랏! {{pokemonName}}!",
  "trainerGo": "{{trainerName}}[[는]] {{pokemonName}}[[를]] 내보냈다!",
  "switchQuestion": "{{pokemonName}}[[를]]\n교체하시겠습니까?",
  "trainerDefeated": "{{trainerName}}[[와]]의\n승부에서 이겼다!",
  "moneyWon": "상금으로\n₽{{moneyAmount}}을 손에 넣었다!",
  "moneyPickedUp": "₽{{moneyAmount}}을 주웠다!",
  "pokemonCaught": "신난다-!\n{{pokemonName}}[[를]] 잡았다!",
  "addedAsAStarter": "{{pokemonName}}[[가]]\n스타팅 포켓몬에 추가되었다!",
  "partyFull": "지닌 포켓몬이 가득 찼습니다. {{pokemonName}}[[를]]\n대신해 포켓몬을 놓아주시겠습니까?",
  "pokemon": "포켓몬",
  "sendOutPokemon": "가랏! {{pokemonName}}!",
  "hitResultCriticalHit": "급소에 맞았다!",
  "hitResultSuperEffective": "효과가 굉장했다!",
  "hitResultNotVeryEffective": "효과가 별로인 듯하다…",
  "hitResultNoEffect": "{{pokemonName}}에게는\n효과가 없는 것 같다…",
  "hitResultOneHitKO": "일격필살!",
  "attackFailed": "그러나 실패하고 말았다!!",
  "attackMissed": "{{pokemonNameWithAffix}}에게는\n맞지 않았다!",
  "attackHitsCount": "{{count}}번 맞았다!",
  "rewardGain": "{{modifierName}}[[를]] 받았다!",
  "expGain": "{{pokemonName}}[[는]]\n{{exp}} 경험치를 얻었다!",
  "levelUp": "{{pokemonName}}[[는]]\n레벨 {{level}}[[로]] 올랐다!",
  "learnMove": "{{pokemonName}}[[는]] 새로\n{{moveName}}[[를]] 배웠다!",
  "learnMovePrompt": "{{pokemonName}}[[는]] 새로\n{{moveName}}[[를]] 배우고 싶다!…",
  "learnMoveLimitReached": "그러나 {{pokemonName}}[[는]] 기술을 4개\n알고 있으므로 더 이상 배울 수 없다!",
  "learnMoveReplaceQuestion": "{{moveName}} 대신 다른 기술을 잊게 하겠습니까?",
  "learnMoveStopTeaching": "그럼… {{moveName}}[[를]]\n배우는 것을 포기하겠습니까?",
  "learnMoveNotLearned": "{{pokemonName}}[[는]] {{moveName}}[[를]]\n결국 배우지 않았다!",
  "learnMoveForgetQuestion": "어느 기술을 잊게 하고싶은가?",
  "learnMoveForgetSuccess": "{{pokemonName}}[[는]] {{moveName}}[[를]] 깨끗이 잊었다!",
  "countdownPoof": "@d{32}1, @d{15}2, @d{15}… @d{15}… @d{30}@s{pb_bounce_1}짠!",
  "learnMoveAnd": "그리고…",
  "levelCapUp": "레벨의 최대치가\n{{levelCap}}까지 상승했다!",
  "moveNotImplemented": "{{moveName}}[[는]] 아직 구현되지 않아 사용할 수 없다…",
  "moveNoPP": "기술의 남은 포인트가 없다!",
  "moveDisabled": "{{moveName}}[[를]] 쓸 수 없다!",
  "noPokeballForce": "본 적 없는 힘이\n볼을 사용하지 못하게 한다.",
  "noPokeballTrainer": "다른 트레이너의 포켓몬은 잡을 수 없다!",
  "noPokeballMulti": "안돼! 2마리 있어서\n목표를 정할 수가 없어…!",
  "noPokeballStrong": "너무 강해서 잡을 수가 없다!\n먼저 약화시켜야 한다!",
  "noEscapeForce": "본 적 없는 힘이\n도망칠 수 없게 한다.",
  "noEscapeTrainer": "안돼! 승부 도중에\n상대에게 등을 보일 순 없어!",
  "noEscapePokemon": "{{pokemonName}}의 {{moveName}}때문에\n{{escapeVerb}} 수 없다!",
  "runAwaySuccess": "무사히 도망쳤다!",
  "runAwayCannotEscape": "도망칠 수 없었다!",
  "escapeVerbSwitch": "교체할",
  "escapeVerbFlee": "도망칠",
  "notDisabled": "{{pokemonName}}의\n{{moveName}} 사슬묶기가 풀렸다!",
  "turnEndHpRestore": "{{pokemonName}}의\n체력이 회복되었다!",
  "hpIsFull": "그러나 {{pokemonName}}의\n체력이 가득 찬 상태다!",
  "skipItemQuestion": "아이템을 받지 않고 넘어가시겠습니까?",
  "itemStackFull": "{{fullItemName}}의 소지 한도에 도달했습니다.\n{{itemname}}[[를]] 대신 받습니다.",
  "eggHatching": "어라…?",
  "ivScannerUseQuestion": "{{pokemonName}}에게 개체값탐지기를 사용하시겠습니까?",
  "wildPokemonWithAffix": "야생 {{pokemonName}}",
  "foePokemonWithAffix": "상대 {{pokemonName}}",
  "useMove": "{{pokemonNameWithAffix}}의 {{moveName}}!",
  "drainMessage": "{{pokemonName}}[[로]]부터\n체력을 흡수했다!",
  "stealEatBerry": "{{pokemonName}}[[가]]\n{{targetName}}의 {{berryName}}[[를]] 빼앗아 먹었다!",
  "ppHealBerry": "{{pokemonNameWithAffix}}[[는]] {{berryName}}[[로]]\n{{moveName}}의 PP를 회복했다!",
  "hpHealBerry": "{{pokemonNameWithAffix}}[[는]] {{berryName}}[[로]]\n체력을 회복했다!",
  "regainHealth": "{{pokemonName}}[[는]]\n체력을 회복했다!",
  "fainted": "{{pokemonNameWithAffix}}[[는]] 쓰러졌다!",
  "statsAnd": "그리고",
  "stats": "스테이터스",
  "statRose_one": "{{pokemonNameWithAffix}}의\n{{stats}}[[가]] 올라갔다!",
  "statRose_other": "{{pokemonNameWithAffix}}의\n{{stats}}[[가]] 올라갔다!",
  "statSharplyRose_one": "{{pokemonNameWithAffix}}의\n{{stats}}[[가]] 크게 올라갔다!",
  "statSharplyRose_other": "{{pokemonNameWithAffix}}의\n{{stats}}[[가]] 크게 올라갔다!",
  "statRoseDrastically_one": "{{pokemonNameWithAffix}}의\n{{stats}}[[가]] 매우 크게 올라갔다!",
  "statRoseDrastically_other": "{{pokemonNameWithAffix}}의\n{{stats}}[[가]] 매우 크게 올라갔다!",
  "statWontGoAnyHigher_one": "{{pokemonNameWithAffix}}의\n{{stats}}[[는]] 더 올라가지 않는다!",
  "statWontGoAnyHigher_other": "{{pokemonNameWithAffix}}의\n{{stats}}[[는]] 더 올라가지 않는다!",
  "statFell_one": "{{pokemonNameWithAffix}}의\n{{stats}}[[가]] 떨어졌다!",
  "statFell_other": "{{pokemonNameWithAffix}}의\n{{stats}}[[가]] 떨어졌다!",
  "statHarshlyFell_one": "{{pokemonNameWithAffix}}의\n{{stats}}[[가]] 크게 떨어졌다!",
  "statHarshlyFell_other": "{{pokemonNameWithAffix}}의\n{{stats}}[[가]] 크게 떨어졌다!",
  "statSeverelyFell_one": "{{pokemonNameWithAffix}}의\n{{stats}}[[가]] 매우 크게 떨어졌다!",
  "statSeverelyFell_other": "{{pokemonNameWithAffix}}의\n{{stats}}[[가]] 매우 크게 떨어졌다!",
  "statWontGoAnyLower_one": "{{pokemonNameWithAffix}}의\n{{stats}}[[는]] 더 떨어지지 않는다!",
  "statWontGoAnyLower_other": "{{pokemonNameWithAffix}}의\n{{stats}}[[는]] 더 떨어지지 않는다!",
  "transformedIntoType": "{{pokemonName}} transformed\ninto the {{type}} type!",
  "retryBattle": "이 배틀의 처음부터 재도전하시겠습니까?",
  "unlockedSomething": "{{unlockedThing}}[[가]]\n해금되었다.",
  "congratulations": "축하합니다!",
  "beatModeFirstTime": "{{speciesName}}[[가]] {{gameMode}} 모드를 처음으로 클리어했다!\n{{newModifier}}[[를]] 손에 넣었다!",
  "ppReduced": "{{targetName}}의\n{{moveName}}[[를]] {{reduction}} 깎았다!",
} as const;
