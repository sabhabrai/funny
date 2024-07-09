import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "{{bossName}} 出現了.",
  "trainerAppeared": "{{trainerName}}\n想要和你對戰！",
  "trainerAppearedDouble": "{{trainerName}}\n想要和你對戰！",
  "singleWildAppeared": "一隻野生的 {{pokemonName}} 出現了！",
  "multiWildAppeared": "野生的 {{pokemonName1}}\n和 {{pokemonName2}} 出現了！",
  "playerComeBack": "回來吧, {{pokemonName}}！",
  "trainerComeBack": "{{trainerName}} 收回了 {{pokemonName}}！",
  "playerGo": "去吧！ {{pokemonName}}！",
  "trainerGo": "{{trainerName}} 派出了 {{pokemonName}}！",
  "switchQuestion": "要更換\n{{pokemonName}}嗎？",
  "trainerDefeated": "你擊敗了\n{{trainerName}}！",
  "moneyPickedUp": "撿到了 ₽{{moneyAmount}}！",
  "pokemonCaught": "{{pokemonName}} 被抓住了！",
  "addedAsAStarter": "{{pokemonName}} has been\nadded as a starter!",
  "pokemon": "寶可夢",
  "sendOutPokemon": "上吧！ {{pokemonName}}！",
  "hitResultCriticalHit": "擊中了要害！",
  "hitResultSuperEffective": "效果拔群！",
  "hitResultNotVeryEffective": "收效甚微…",
  "hitResultNoEffect": "對 {{pokemonName}} 沒有效果！",
  "hitResultOneHitKO": "一擊切殺！",
  "attackFailed": "但是失敗了！",
  "attackMissed": "沒有命中{{pokemonNameWithAffix}}！",
  "attackHitsCount": "擊中 {{count}} 次！",
  "rewardGain": "You received\n{{modifierName}}!",
  "expGain": "{{pokemonName}} 獲得了 {{exp}} 經驗值！",
  "levelUp": "{{pokemonName}} 升級到 Lv. {{level}}！",
  "learnMove": "{{pokemonName}} 學會了{{moveName}}！",
  "learnMovePrompt": "{{pokemonName}} 想要學習 {{moveName}}.",
  "learnMoveLimitReached": "但是, {{pokemonName}} 已經學會了\n四個招式.",
  "learnMoveReplaceQuestion": "要忘記一個招式並學習 {{moveName}} 嗎？",
  "learnMoveStopTeaching": "不再嘗試學習\n{{moveName}}嗎？",
  "learnMoveNotLearned": "{{pokemonName}} 沒有學會 {{moveName}}.",
  "learnMoveForgetQuestion": "要忘記哪個技能？",
  "learnMoveForgetSuccess": "{{pokemonName}} 忘記了 {{moveName}}.",
  "countdownPoof": "@d{32}1, @d{15}2, 和@d{15}… @d{15}… @d{15}… @d{15}@s{pb_bounce_1}噗！",
  "learnMoveAnd": "然後…",
  "levelCapUp": "等級上限提升到 {{levelCap}}！",
  "moveNotImplemented": "{{moveName}} 未實裝，無法選擇。",
  "moveNoPP": "這個技能的PP用完了",
  "moveDisabled": "{{moveName}} 被禁用！",
  "noPokeballForce": "一股無形的力量阻止了你使用精靈球。",
  "noPokeballTrainer": "你不能捕捉其他訓練家的寶可夢！",
  "noPokeballMulti": "只能在剩下一隻寶可夢時才能扔出精靈球！",
  "noPokeballStrong": "目標寶可夢太強了，無法捕捉！你需要先\n削弱它！",
  "noEscapeForce": "一股無形的力量阻止你逃跑。",
  "noEscapeTrainer": "你不能從訓練家對戰中逃跑！",
  "noEscapePokemon": "{{pokemonName}} 的 {{moveName}} 阻止了你 {{escapeVerb}}！",
  "runAwaySuccess": "你成功逃脫了！",
  "runAwayCannotEscape": "你無法逃脫！",
  "escapeVerbSwitch": "切換",
  "escapeVerbFlee": "逃跑",
  "stealEatBerry": "{{pokemonName}} stole and ate\n{{targetName}}'s {{berryName}}!",
  "notDisabled": "{{moveName}} 不再被禁用！",
  "turnEndHpRestore": "{{pokemonName}}'s HP was restored.",
  "hpIsFull": "{{pokemonName}}'s\nHP is full!",
  "skipItemQuestion": "你要跳過拾取道具嗎？",
  "eggHatching": "咦？",
  "ivScannerUseQuestion": "對 {{pokemonName}} 使用個體值掃描儀？",
  "wildPokemonWithAffix": "野生的 {{pokemonName}}",
  "foePokemonWithAffix": "對手 {{pokemonName}}",
  "useMove": "{{pokemonNameWithAffix}} 使用了 {{moveName}}！",
  "drainMessage": "{{pokemonName}} 吸取了體力！",
  "regainHealth": "{{pokemonName}} 回復了體力！",
  "fainted": "{{pokemonNameWithAffix}} 倒下了！",
  "statRose": "{{pokemonNameWithAffix}} 的 {{stats}} 提高了！",
  "statSharplyRose": "{{pokemonNameWithAffix}} 的 {{stats}} 大幅提高了！",
  "statRoseDrastically": "{{pokemonNameWithAffix}} 的 {{stats}} 極大幅提高了！",
  "statWontGoAnyHigher": "{{pokemonNameWithAffix}} 的 {{stats}} 已經無法再提高了！",
  "statFell": "{{pokemonNameWithAffix}} 的 {{stats}} 降低了！",
  "statHarshlyFell": "{{pokemonNameWithAffix}} 的 {{stats}} 大幅降低了！",
  "statSeverelyFell": "{{pokemonNameWithAffix}} 的 {{stats}} 極大幅降低了！",
  "statWontGoAnyLower": "{{pokemonNameWithAffix}} 的 {{stats}} 已經無法再降低了！",
  "ppReduced": "降低了 {{targetName}} 的\n{{moveName}} 的PP{{reduction}}點！",
  "typeChanged": "{{pokemonName}} transformed\ninto the {{type}} type!",
  "battlerTagsRechargingLapse": "{{pokemonNameWithAffix}}因攻擊的反作用力而無法動彈！",
  "battlerTagsTrappedOnAdd": "{{pokemonNameWithAffix}}不能逃跑！",
  "battlerTagsTrappedOnRemove": "{{pokemonNameWithAffix}}擺脫了{{moveName}}！",
  "battlerTagsFlinchedLapse": "{{pokemonNameWithAffix}}畏縮了！",
  "battlerTagsConfusedOnAdd": "{{pokemonNameWithAffix}}混亂了！",
  "battlerTagsConfusedOnRemove": "{{pokemonNameWithAffix}}的混亂解除了！",
  "battlerTagsConfusedOnOverlap": "{{pokemonNameWithAffix}}已經混亂了。",
  "battlerTagsConfusedLapse": "{{pokemonNameWithAffix}}正在混亂中！",
  "battlerTagsConfusedLapseHurtItself": "不知所以地攻擊了自己！",
  "battlerTagsDestinyBondLapseIsBoss": "{{pokemonNameWithAffix}}不再受到同命的影響",
  "battlerTagsDestinyBondLapse": "{{pokemonNameWithAffix}} 和{{pokemonNameWithAffix2}} 同歸於盡了！",
  "battlerTagsInfatuatedOnAdd": "{{pokemonNameWithAffix}}對{{sourcePokemonName}}著迷了！",
  "battlerTagsInfatuatedOnOverlap": "{{pokemonNameWithAffix}}已經著迷了！",
  "battlerTagsInfatuatedLapse": "{{pokemonNameWithAffix}}對{{sourcePokemonName}}著迷中！",
  "battlerTagsInfatuatedLapseImmobilize": "{{pokemonNameWithAffix}} 不會著迷！",
  "battlerTagsInfatuatedOnRemove": "{{pokemonNameWithAffix}} 治癒了著迷狀態！",
  "battlerTagsSeededOnAdd": "將種子種植在了{{pokemonNameWithAffix}}身上！",
  "battlerTagsSeededLapse": "{{pokemonNameWithAffix}}被寄生種子吸取了體力！",
  "battlerTagsSeededLapseShed": "{{pokemonNameWithAffix}}吸到了污泥漿！",
  "battlerTagsNightmareOnAdd": "{{pokemonNameWithAffix}}開始做惡夢了！",
  "battlerTagsNightmareOnOverlap": "{{pokemonNameWithAffix}}已經被惡夢纏身！",
  "battlerTagsNightmareLapse": "{{pokemonNameWithAffix}}正被惡夢纏身！",
  "battlerTagsEncoreOnAdd": "{{pokemonNameWithAffix}}接受了再來一次！",
  "battlerTagsEncoreOnRemove": "{{pokemonNameWithAffix}}的再來一次狀態解除了！",
  "battlerTagsHelpingHandOnAdd": "{{pokemonNameWithAffix}}擺出了幫助{{pokemonName}} 的架勢！",
  "battlerTagsIngrainLapse": "{{pokemonNameWithAffix}}用扎根回復了體力！",
  "battlerTagsIngrainOnTrap": "{{pokemonNameWithAffix}}扎根了！",
  "battlerTagsAquaRingOnAdd": "{{pokemonNameWithAffix}}用水流環包裹了自己！",
  "battlerTagsAquaRingLapse": "{{moveName}}回復了{{pokemonName}}的體力！",
  "battlerTagsDrowsyOnAdd": "{{pokemonNameWithAffix}}產生睡意了！",
  "battlerTagsDamagingTrapLapse": "{{pokemonNameWithAffix}}受到了{{moveName}}的傷害！",
  "battlerTagsBindOnTrap": "{{pokemonNameWithAffix}}被{{sourcePokemonName}}的 {{moveName}}緊緊束縛住了！",
  "battlerTagsWrapOnTrap": "{{pokemonNameWithAffix}}被{{sourcePokemonName}}綁緊了！",
  "battlerTagsVortexOnTrap": "{{pokemonNameWithAffix}}被困在了旋渦之中！",
  "battlerTagsClampOnTrap": "{{sourcePokemonNameWithAffix}}用貝殼夾住了{{pokemonName}}！",
  "battlerTagsSandTombOnTrap": "{{pokemonNameWithAffix}}被{{moveName}}困住了！",
  "battlerTagsMagmaStormOnTrap": "{{pokemonNameWithAffix}}被困在了熔岩風暴之中！",
  "battlerTagsSnapTrapOnTrap": "{{pokemonNameWithAffix}}被捕獸夾困住了！",
  "battlerTagsThunderCageOnTrap": "{{sourcePokemonNameWithAffix}}困住了{{pokemonNameWithAffix}}！",
  "battlerTagsInfestationOnTrap": "{{pokemonNameWithAffix}}受到了{{sourcePokemonNameWithAffix}}的死纏爛打！",
  "battlerTagsProtectedOnAdd": "{{pokemonNameWithAffix}}擺出了防守的架勢！",
  "battlerTagsProtectedLapse": "{{pokemonNameWithAffix}}在攻擊中保護了自己！",
  "battlerTagsEnduringOnAdd": "{{pokemonNameWithAffix}}擺出了挺住攻擊的架勢！",
  "battlerTagsEnduringLapse": "{{pokemonNameWithAffix}}挺住了攻擊！",
  "battlerTagsSturdyLapse": "{{pokemonNameWithAffix}}挺住了攻擊！",
  "battlerTagsPerishSongLapse": "{{pokemonNameWithAffix}} 的滅亡計時變成{{turnCount}}了！",
  "battlerTagsTruantLapse": "{{pokemonNameWithAffix}}正在偷懶！",
  "battlerTagsSlowStartOnAdd": "{{pokemonNameWithAffix}}無法拿出平時的水平！",
  "battlerTagsSlowStartOnRemove": "{{pokemonNameWithAffix}}恢復了平時的水平！",
  "battlerTagsHighestStatBoostOnAdd": "{{pokemonNameWithAffix}}的{{statName}}升高了！",
  "battlerTagsHighestStatBoostOnRemove": "{{pokemonNameWithAffix}}的{{abilityName}}效果解除了！",
  "battlerTagsCritBoostOnAdd": "{{pokemonNameWithAffix}}現在幹勁十足！",
  "battlerTagsCritBoostOnRemove": "{{pokemonNameWithAffix}}如釋重負似地放鬆了下來。",
  "battlerTagsSaltCuredOnAdd": "{{pokemonNameWithAffix}} 陷入了鹽腌狀態！",
  "battlerTagsSaltCuredLapse": "{{pokemonNameWithAffix}} 受到了{{moveName}}的傷害！",
  "battlerTagsCursedOnAdd": "{{pokemonNameWithAffix}}削減了自己的體力，並詛咒了{{pokemonName}}！",
  "battlerTagsCursedLapse": "{{pokemonNameWithAffix}}正受到詛咒！",
} as const;
