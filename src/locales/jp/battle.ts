import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "{{bossName}}が　あらわれた！",
  "trainerAppeared": "{{trainerName}}が\nしょうぶを　しかけてきた！",
  "trainerAppearedDouble": "{{trainerName}}\nが　しょうぶを　しかけてきた！",
  "trainerSendOut": "{{trainerName}}は\n{{pokemonName}}を　くりだした！",
  "singleWildAppeared": "あっ！　やせいの\n{{pokemonName}}が　とびだしてきた！",
  "multiWildAppeared": "あっ！　やせいの　{{pokemonName1}}と\n{{pokemonName2}}が　とびだしてきた！",
  "playerComeBack": "{{pokemonName}}!　もどれ！",
  "trainerComeBack": "{{trainerName}}は\n{{pokemonName}}を　ひっこめた！",
  "playerGo": "ゆけっ！　{{pokemonName}}！",
  "trainerGo": "{{trainerName}}は\n{{pokemonName}}を　くりだした！",
  "switchQuestion": "{{pokemonName}}を\nいれかえますか？",
  "trainerDefeated": "{{trainerName}}\nとの　しょうぶに　かった！",
  "moneyWon": "しょうきんとして\n₽{{moneyAmount}} てにいれた！",
  "pokemonCaught": "{{pokemonName}}を\nつかまえたぞ！",
  "partyFull": "てもちがいっぱいです。\n{{pokemonName}}をいれるために　ポケモンを　ひとり　てばなしますか？",
  "pokemon": "ポケモン",
  "sendOutPokemon": "がんばれ！　{{pokemonName}}！",
  "hitResultCriticalHit": "きゅうしょに　あたった！",
  "hitResultSuperEffective": "こうかは　ばつぐんだ！",
  "hitResultNotVeryEffective": "こうかは　いまひとつの　ようだ……",
  "hitResultNoEffect": "{{pokemonName}}には　こうかが　ないようだ…",
  "hitResultOneHitKO": "いちげき　ひっさつ！",
  "attackFailed": "しかし　うまく　きまらなかった！！",
  "attackHitsCount": "{{count}}かい　あたった！",
  "expGain": "{{pokemonName}}は\n{{exp}}けいけんちを　もらった！",
  "levelUp": "{{pokemonName}}は\nレベル{{level}}　に　あがった！",
  "learnMove": "{{pokemonName}}は　あたらしく\n{{moveName}}を　おぼえた！",
  "learnMovePrompt": "{{pokemonName}}は　あたらしく\n{{moveName}}を　おぼえたい……",
  "learnMoveLimitReached": "しかし　{{pokemonName}}は　わざを　4つ\nおぼえるので　せいいっぱいだ！",
  "learnMoveReplaceQuestion": "{{moveName}}の　かわりに\nほかの　わざを　わすれさせますか？",
  "learnMoveStopTeaching": "それでは……　{{moveName}}を\nおぼえるのを　あきらめますか？",
  "learnMoveNotLearned": "{{pokemonName}}は　{{moveName}}を\nおぼえずに　おわった！",
  "learnMoveForgetQuestion": "どの　わざを\nわすれさせたい？",
  "learnMoveForgetSuccess": "{{pokemonName}}は　{{moveName}}の\nつかいかたを　きれいに　わすれた！",
  "countdownPoof": "@d{32}1, @d{15}2, and@d{15}… @d{15}… @d{15}… @d{15}@s{pb_bounce_1}ポーン！",
  "learnMoveAnd": "そして…",
  "levelCapUp": "レベルキャップが\n{{levelCap}}に　あがった！",
  "moveNotImplemented": "{{moveName}}は　まだじっそうされておらず、せんたくできません。",
  "moveNoPP": "しかし　わざの\nのこりポイントが　なかった！",
  "moveDisabled": "{{moveName}} is disabled!",
  "noPokeballForce": "An unseen force\nprevents using Poké Balls.",
  "noPokeballTrainer": "ひとの　ものを\nとったら　どろぼう！",
  "noPokeballMulti": "You can only throw a Poké Ball\nwhen there is one Pokémon remaining!",
  "noPokeballStrong": "あいての　ポケモンが　つよすぎて　つかまえられない！\nまずは　よわらせよう！",
  "noEscapeForce": "An unseen force\nprevents escape.",
  "noEscapeTrainer": "ダメだ！　しょうぶのさいちゅうに\nあいてに　せなかを　みせられない！",
  "noEscapePokemon": "{{pokemonName}}'s {{moveName}}\nprevents {{escapeVerb}}!",
  "runAwaySuccess": " うまく　にげきれた！",
  "runAwayCannotEscape": "にげることが　できない！",
  "escapeVerbSwitch": "switching",
  "escapeVerbFlee": "fleeing",
  "notDisabled": "{{pokemonName}}'s {{moveName}} is disabled\nno more!",
  "skipItemQuestion": "Are you sure you want to skip taking an item?",
  "eggHatching": "おや？",
  "ivScannerUseQuestion": "Use IV Scanner on {{pokemonName}}?",
  "wildPokemonWithAffix": "やせいの　{{pokemonName}}",
  "foePokemonWithAffix": "あいての　{{pokemonName}}",
  "useMove": "{{pokemonNameWithAffix}}の　{{moveName}}！",
  "drainMessage": "{{pokemonName}}は\nたいりょくを　すいとった！",
  "regainHealth": "{{pokemonName}}は\nたいりょくを　かいふくした！",
  "fainted": "{{pokemonNameWithAffix}}は　たおれた！",
  "statRose": "あがった",
  "statSharplyRose": "ぐーんと　あがった",
  "statRoseDrastically": "ぐぐーんと　あがった",
  "statWontGoAnyHigher": "これいじょう　あがらない",
  "statFell": "さがった",
  "statHarshlyFell": "がくっと　さがった",
  "statSeverelyFell": "がくーんと　さがった",
  "statWontGoAnyLower": "これいじょう　さがらないr",
  "ppReduced": "It reduced the PP of {{targetName}}'s\n{{moveName}} by {{reduction}}!",
} as const;
