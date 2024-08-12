import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "{{bossName}} 出现了。",
  "trainerAppeared": "{{trainerName}}\n想要和你对战！",
  "trainerAppearedDouble": "{{trainerName}}\n想要和你对战！",
  "trainerSendOut": "{{trainerName}}派出了\n{{pokemonName}}！",
  "singleWildAppeared": "一只野生的{{pokemonName}}出现了！",
  "multiWildAppeared": "野生的{{pokemonName1}}\n和{{pokemonName2}}出现了！",
  "playerComeBack": "回来吧，{{pokemonName}}！",
  "trainerComeBack": "{{trainerName}}收回了{{pokemonName}}！",
  "playerGo": "去吧！{{pokemonName}}！",
  "trainerGo": "{{trainerName}}派出了\n{{pokemonName}}！",
  "switchQuestion": "要更换\n{{pokemonName}}吗？",
  "trainerDefeated": "你击败了\n{{trainerName}}！",
  "moneyWon": "你赢得了\n₽{{moneyAmount}}！",
  "moneyPickedUp": "捡到了₽{{moneyAmount}}！",
  "pokemonCaught": "{{pokemonName}}被抓住了！",
  "addedAsAStarter": "增加了{{pokemonName}}作为\n一个新的基础宝可梦！",
  "partyFull": "你的队伍已满员。是否放生其他宝可梦\n为{{pokemonName}}腾出空间?",
  "pokemon": "宝可梦",
  "sendOutPokemon": "上吧！\n{{pokemonName}}！",
  "hitResultCriticalHit": "击中了要害！",
  "hitResultSuperEffective": "效果拔群！",
  "hitResultNotVeryEffective": "收效甚微…",
  "hitResultNoEffect": "对{{pokemonName}}没有效果！！",
  "hitResultOneHitKO": "一击必杀！",
  "attackFailed": "但是失败了！",
  "attackMissed": "没有命中{{pokemonNameWithAffix}}！",
  "attackHitsCount": "击中{{count}}次！",
  "rewardGain": "你获得了\n{{modifierName}}！",
  "expGain": "{{pokemonName}}获得了{{exp}} 点经验值！",
  "levelUp": "{{pokemonName}}升级到Lv.{{level}}！",
  "learnMove": "{{pokemonName}}学会了{{moveName}}！",
  "learnMovePrompt": "{{pokemonName}}想要学习{{moveName}}。",
  "learnMoveLimitReached": "但是，{{pokemonName}}已经学会了\n四个技能",
  "learnMoveReplaceQuestion": "要忘记一个技能并学习{{moveName}}吗？",
  "learnMoveStopTeaching": "不再尝试学习{{moveName}}？",
  "learnMoveNotLearned": "{{pokemonName}}没有学会{{moveName}}。",
  "learnMoveForgetQuestion": "要忘记哪个技能？",
  "learnMoveForgetSuccess": "{{pokemonName}}忘记了\n如何使用{{moveName}}。",
  "countdownPoof": "@d{32}1, @d{15}2 @d{15}… @d{15}… @d{15}@s{pb_bounce_1}空！",
  "learnMoveAnd": "然后……",
  "levelCapUp": "等级上限提升到{{levelCap}}！",
  "moveNotImplemented": "{{moveName}}尚未实装，无法选择。",
  "moveNoPP": "这个技能的PP用完了",
  "moveDisabled": "{{moveName}}被禁用！",
  "noPokeballForce": "一股无形的力量阻止了你使用精灵球。",
  "noPokeballTrainer": "你不能捕捉其他训练家的宝可梦！",
  "noPokeballMulti": "只能在剩下一只宝可梦时才能扔出精灵球！",
  "noPokeballStrong": "目标宝可梦太强了，无法捕捉！\n你需要先削弱它！",
  "noEscapeForce": "一股无形的力量阻止你逃跑。",
  "noEscapeTrainer": "你不能从与训练家的战斗中逃跑！",
  "noEscapePokemon": "{{pokemonName}}的{{moveName}}\n阻止了你{{escapeVerb}}！",
  "runAwaySuccess": "成功逃走了！",
  "runAwayCannotEscape": "无法逃走！",
  "escapeVerbSwitch": "切换",
  "escapeVerbFlee": "逃跑",
  "notDisabled": "{{moveName}}不再被禁用！",
  "turnEndHpRestore": "{{pokemonName}}的体力恢复了。",
  "hpIsFull": "{{pokemonName}}的体力已满！",
  "skipItemQuestion": "你确定要跳过拾取道具吗？",
  "itemStackFull": "该道具持有数达到上限，\n你获得了{{itemName}}作为替代。",
  "eggHatching": "咦？",
  "stealEatBerry": "{{pokemonName}}夺取并吃掉了\n{{targetName}}的{{berryName}}！",
  "ppHealBerry": "{{pokemonNameWithAffix}}用{{berryName}}\n回复了{{moveName}}的PP！",
  "hpHealBerry": "{{pokemonNameWithAffix}}用{{berryName}}\n回复了体力！",
  "ivScannerUseQuestion": "对{{pokemonName}}使用个体值扫描仪？",
  "wildPokemonWithAffix": "野生的{{pokemonName}}",
  "foePokemonWithAffix": "对手的{{pokemonName}}",
  "useMove": "{{pokemonNameWithAffix}}使用了\n{{moveName}}！",
  "drainMessage": "{{pokemonName}}\n吸取了体力！",
  "regainHealth": "{{pokemonName}}\n回复了体力！",
  "fainted": "{{pokemonNameWithAffix}}\n倒下了！",
  "statsAnd": "和",
  "stats": "能力",
  "statRose_other": "{{pokemonNameWithAffix}}的{{stats}}提高了！",
  "statSharplyRose_other": "{{pokemonNameWithAffix}}的{{stats}}大幅提高了！",
  "statRoseDrastically_other": "{{pokemonNameWithAffix}}的{{stats}}极大幅提高了！",
  "statWontGoAnyHigher_other": "{{pokemonNameWithAffix}}的{{stats}}已经无法再提高了！",
  "statFell_other": "{{pokemonNameWithAffix}}的{{stats}}降低了！",
  "statHarshlyFell_other": "{{pokemonNameWithAffix}}的{{stats}}大幅降低了！",
  "statSeverelyFell_other": "{{pokemonNameWithAffix}}的{{stats}}极大幅降低了！",
  "statWontGoAnyLower_other": "{{pokemonNameWithAffix}}的{{stats}}已经无法再降低了！",
  "transformedIntoType": "{{pokemonName}}变成了\n{{type}}属性！",
  "ppReduced": "降低了{{targetName}}的\n{{moveName}}的PP{{reduction}}点！",
  "retryBattle": "你要从对战开始时重试么？",
  "unlockedSomething": "{{unlockedThing}}\n已解锁。",
  "congratulations": "恭喜！",
  "beatModeFirstTime": "{{speciesName}}首次击败了{{gameMode}}！\n你获得了{{newModifier}}！",
  "battlerTagsRechargingLapse": "{{pokemonNameWithAffix}}\n因攻击的反作用力而无法动弹！",
  "battlerTagsTrappedOnAdd": "{{pokemonNameWithAffix}}不能逃跑！",
  "battlerTagsTrappedOnRemove": "{{pokemonNameWithAffix}}\n摆脱了{{moveName}}！",
  "battlerTagsFlinchedLapse": "{{pokemonNameWithAffix}}\n畏缩了，无法使出招式！",
  "battlerTagsConfusedOnAdd": "{{pokemonNameWithAffix}}\n混乱了！",
  "battlerTagsConfusedOnRemove": "{{pokemonNameWithAffix}}\n的混乱解除了！",
  "battlerTagsConfusedOnOverlap": "{{pokemonNameWithAffix}}\n已经混乱了。",
  "battlerTagsConfusedLapse": "{{pokemonNameWithAffix}}\n正在混乱中！",
  "battlerTagsConfusedLapseHurtItself": "不知所以地攻击了自己！",
  "battlerTagsDestinyBondLapseIsBoss": "{{pokemonNameWithAffix}}\n不再受到同命的影响",
  "battlerTagsDestinyBondLapse": "{{pokemonNameWithAffix}}\n和{{pokemonNameWithAffix2}}同归于尽了！",
  "battlerTagsInfatuatedOnAdd": "{{pokemonNameWithAffix}}\n对{{sourcePokemonName}}着迷了！",
  "battlerTagsInfatuatedOnOverlap": "{{pokemonNameWithAffix}}\n已经着迷了！",
  "battlerTagsInfatuatedLapse": "{{pokemonNameWithAffix}}\n对{{sourcePokemonName}}着迷中！",
  "battlerTagsInfatuatedLapseImmobilize": "{{pokemonNameWithAffix}}\n不会着迷！",
  "battlerTagsInfatuatedOnRemove": "{{pokemonNameWithAffix}}\n治愈了着迷状态！",
  "battlerTagsSeededOnAdd": "将种子种植在了\n{{pokemonNameWithAffix}}的身上！",
  "battlerTagsSeededLapse": "{{pokemonNameWithAffix}}\n被寄生种子吸取了体力！",
  "battlerTagsSeededLapseShed": "{{pokemonNameWithAffix}}\n吸到了污泥浆！",
  "battlerTagsNightmareOnAdd": "{{pokemonNameWithAffix}}\n开始做恶梦了！",
  "battlerTagsNightmareOnOverlap": "{{pokemonNameWithAffix}}\n已经被恶梦缠身！",
  "battlerTagsNightmareLapse": "{{pokemonNameWithAffix}}\n正被恶梦缠身！",
  "battlerTagsEncoreOnAdd": "{{pokemonNameWithAffix}}\n接受了再来一次！",
  "battlerTagsEncoreOnRemove": "{{pokemonNameWithAffix}}\n的再来一次状态解除了！",
  "battlerTagsHelpingHandOnAdd": "{{pokemonNameWithAffix}}\n摆出了帮助{{pokemonName}}的架势！",
  "battlerTagsIngrainLapse": "{{pokemonNameWithAffix}}\n用扎根回复了体力！",
  "battlerTagsIngrainOnTrap": "{{pokemonNameWithAffix}}\n扎根了！",
  "battlerTagsAquaRingOnAdd": "{{pokemonNameWithAffix}}\n用水流环包裹了自己！",
  "battlerTagsAquaRingLapse": "{{moveName}}回复了\n{{pokemonName}}的体力！",
  "battlerTagsDrowsyOnAdd": "{{pokemonNameWithAffix}}\n产生睡意了！",
  "battlerTagsDamagingTrapLapse": "{{pokemonNameWithAffix}}受到了\n{{moveName}}的伤害！",
  "battlerTagsBindOnTrap": "{{pokemonNameWithAffix}}被\n{{sourcePokemonName}}的{{moveName}}紧紧束缚住了！",
  "battlerTagsWrapOnTrap": "{{pokemonNameWithAffix}}被\n{{sourcePokemonName}}绑紧了！",
  "battlerTagsVortexOnTrap": "{{pokemonNameWithAffix}}\n被困在了旋涡之中！",
  "battlerTagsClampOnTrap": "{{sourcePokemonNameWithAffix}}用贝壳\n夹住了{{pokemonName}}！",
  "battlerTagsSandTombOnTrap": "{{pokemonNameWithAffix}}\n被{{moveName}}困住了！",
  "battlerTagsMagmaStormOnTrap": "{{pokemonNameWithAffix}}\n被困在了熔岩风暴之中！",
  "battlerTagsSnapTrapOnTrap": "{{pokemonNameWithAffix}}\n被捕兽夹困住了！",
  "battlerTagsThunderCageOnTrap": "{{sourcePokemonNameWithAffix}}困住了\n{{pokemonNameWithAffix}}！",
  "battlerTagsInfestationOnTrap": "{{pokemonNameWithAffix}}受到了\n{{sourcePokemonNameWithAffix}}的死缠烂打！",
  "battlerTagsProtectedOnAdd": "{{pokemonNameWithAffix}}\n摆出了防守的架势！",
  "battlerTagsProtectedLapse": "{{pokemonNameWithAffix}}\n在攻击中保护了自己！",
  "battlerTagsEnduringOnAdd": "{{pokemonNameWithAffix}}\n摆出了挺住攻击的架势！",
  "battlerTagsEnduringLapse": "{{pokemonNameWithAffix}}\n挺住了攻击！",
  "battlerTagsSturdyLapse": "{{pokemonNameWithAffix}}\n挺住了攻击！",
  "battlerTagsPerishSongLapse": "{{pokemonNameWithAffix}}\n的灭亡计时变成{{turnCount}}了！",
  "battlerTagsCenterOfAttentionOnAdd": "{{pokemonNameWithAffix}}\n变得万众瞩目了！",
  "battlerTagsTruantLapse": "{{pokemonNameWithAffix}}\n正在偷懒！",
  "battlerTagsSlowStartOnAdd": "{{pokemonNameWithAffix}}\n无法拿出平时的水平！",
  "battlerTagsSlowStartOnRemove": "{{pokemonNameWithAffix}}\n恢复了平时的水平！",
  "battlerTagsHighestStatBoostOnAdd": "{{pokemonNameWithAffix}}的\n{{statName}}提高了！",
  "battlerTagsHighestStatBoostOnRemove": "{{pokemonNameWithAffix}}的\n{{abilityName}}效果解除了！",
  "battlerTagsMagnetRisenOnAdd": "{{pokemonNameWithAffix}}\n因电磁力浮了起来！",
  "battlerTagsMagnetRisenOnRemove": "{{pokemonNameWithAffix}}的\n电磁力消失了！",
  "battlerTagsCritBoostOnAdd": "{{pokemonNameWithAffix}}\n现在干劲十足！",
  "battlerTagsCritBoostOnRemove": "{{pokemonNameWithAffix}}\n如释重负似地放松了下来。",
  "battlerTagsSaltCuredOnAdd": "{{pokemonNameWithAffix}}\n陷入了盐腌状态！",
  "battlerTagsSaltCuredLapse": "{{pokemonNameWithAffix}}\n受到了{{moveName}}的伤害！",
  "battlerTagsCursedOnAdd": "{{pokemonNameWithAffix}}削减了自己的体力，\n并诅咒了{{pokemonName}}！",
  "battlerTagsCursedLapse": "{{pokemonNameWithAffix}}\n正受到诅咒！",
  "battlerTagsStockpilingOnAdd": "{{pokemonNameWithAffix}}蓄力了{{stockpiledCount}}次！"
} as const;
