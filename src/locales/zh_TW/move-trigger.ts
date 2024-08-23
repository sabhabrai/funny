import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const moveTriggers: SimpleTranslationEntries = {
  "hitWithRecoil" : "{{pokemonName}}\n受到了反作用力造成的傷害！",
  "cutHpPowerUpMove": "{{pokemonName}}\n削減體力並提升了招式威力！",
  "absorbedElectricity": "{{pokemonName}}\n吸收了电力！",
  "switchedStatChanges": "{{pokemonName}}和對手互換了\n自身的能力變化！",
  "switchedTwoStatChanges": "{{pokemonName}} 和對手互換了自身的{{firstStat}}和{{secondStat}}的能力變化！",
  "switchedStat": "{{pokemonName}} 互換了各自的{{stat}}！",
  "sharedGuard": "{{pokemonName}} 平分了各自的防守！",
  "sharedPower": "{{pokemonName}} 平分了各自的力量！",
  "goingAllOutForAttack": "{{pokemonName}}拿出全力了！",
  "regainedHealth": "{{pokemonName}}的\n體力回復了！",
  "keptGoingAndCrashed": "{{pokemonName}}因勢頭過猛\n而撞到了地面！",
  "fled": "{{pokemonName}}\n逃走了！",
  "cannotBeSwitchedOut": "{{pokemonName}}\n無法被收回！",
  "swappedAbilitiesWithTarget": "{{pokemonName}}\n互換了各自的特性！",
  "coinsScatteredEverywhere": "金幣散落一地！",
  "attackedByItem": "{{pokemonName}}被\n{{itemName}}襲擊了！",
  "whippedUpAWhirlwind": "{{pokemonName}}周圍的\n空氣產生了旋渦！",
  "flewUpHigh": "{{pokemonName}}\n飛向了高空！",
  "tookInSunlight": "{{pokemonName}}\n吸收了光線！",
  "dugAHole": "{{pokemonName}}\n鑽進了地下！",
  "loweredItsHead": "{{pokemonName}}\n把頭縮了進去！",
  "isGlowing": "強光包圍了\n{{pokemonName}}！",
  "bellChimed": "鈴聲響徹四周！",
  "foresawAnAttack": "{{pokemonName}}\n預知了未來的攻擊！",
  "isTighteningFocus": "{{pokemonName}}正在集中注意力！",
  "hidUnderwater": "{{pokemonName}}\n潛入了水中！",
  "soothingAromaWaftedThroughArea": "怡人的香氣擴散了開來！",
  "sprangUp": "{{pokemonName}}\n高高地跳了起來！",
  "choseDoomDesireAsDestiny": "{{pokemonName}}\n將破滅之願託付給了未來！",
  "vanishedInstantly": "{{pokemonName}}的身影\n瞬間消失了！",
  "tookTargetIntoSky": "{{pokemonName}}將{{targetName}}\n帶上了高空！",
  "becameCloakedInFreezingLight": "{{pokemonName}}\n被冷光包圍了！",
  "becameCloakedInFreezingAir": "{{pokemonName}}\n被冰凍的空氣包圍了！",
  "isChargingPower": "{{pokemonName}}\n正在積蓄力量！",
  "burnedItselfOut": "{{pokemonName}}的火焰燃盡了！",
  "startedHeatingUpBeak": "{{pokemonName}}\n開始給鳥嘴加熱了！",
  "setUpShellTrap": "{{pokemonName}}\n設下了陷阱甲殼！",
  "isOverflowingWithSpacePower": "{{pokemonName}}湧起了宇宙的力量！",
  "usedUpAllElectricity": "{{pokemonName}}\n用盡了電力！",
  "stoleItem": "{{pokemonName}}从{{targetName}}那裏\n奪取了{{itemName}}！",
  "incineratedItem": "{{pokemonName}}燒掉了\n{{targetName}}的{{itemName}}！",
  "knockedOffItem": "{{pokemonName}}拍落了\n{{targetName}}的{{itemName}}！",
  "tookMoveAttack": "{{pokemonName}}\n受到了{{moveName}}的攻擊！",
  "cutOwnHpAndMaximizedStat": "{{pokemonName}}\n削減體力並釋放了全部{{statName}}!",
  "copiedStatChanges": "{{pokemonName}}複製了\n{{targetName}}的能力變化！",
  "magnitudeMessage": "震級{{magnitude}}！",
  "tookAimAtTarget": "{{pokemonName}}將目標對準了\n{{targetName}}！",
  "transformedIntoType": "{{pokemonName}} \n變成了{{typeName}}屬性！",
  "copiedMove": "{{pokemonName}}\n複製了{{moveName}}!",
  "sketchedMove": "{{pokemonName}}\n對{{moveName}}進行了寫生！",
  "acquiredAbility": "{{pokemonName}}的特性\n變为{{abilityName}}了！",
  "copiedTargetAbility": "{{pokemonName}}複製了\n{{targetName}}的{{abilityName}}！",
  "transformedIntoTarget": "{{pokemonName}}\n變身成了{{targetName}}！",
  "tryingToTakeFoeDown": "{{pokemonName}}\n想和對手同歸於盡！",
  "addType": "{{pokemonName}}\n增加了{{typeName}}屬性！",
  "cannotUseMove": "{{pokemonName}}\n無法使用{{moveName}}！",
  "healHp": "{{pokemonName}}的\n體力回復了！",
  "sacrificialFullRestore": "{{pokemonName}}的\n治癒之願實現了！",
  "invertStats": "{{pokemonName}}的\n能力變化顛倒過來了！",
  "resetStats": "{{pokemonName}}的\n能力變化復原了！",
  "statEliminated": "所有能力都復原了！",
  "faintCountdown": "{{pokemonName}}\n將在{{turnCount}}回合後滅亡！",
  "copyType": "{{pokemonName}}變成了{{targetPokemonName}}的屬性！",
  "suppressAbilities": "{{pokemonName}}的特性\n變得無效了！",
  "revivalBlessing": "{{pokemonName}}復活了！",
  "swapArenaTags": "{{pokemonName}}\n交換了雙方的場地效果！",
  "exposedMove": "{{pokemonName}}識破了\n{{targetPokemonName}}的原形！",
} as const;
