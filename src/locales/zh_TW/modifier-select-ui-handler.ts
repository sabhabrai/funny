import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const modifierSelectUiHandler: SimpleTranslationEntries = {
  "transfer": "交換道具",
  "reroll": "刷新商店",
  "lockRarities": "鎖定稀有度",
  "checkTeam": "查看隊伍",
  "transferDesc": "將寶可夢攜帶的道具交換給其他寶可夢",
  "rerollDesc": "花錢刷新道具",
  "lockRaritiesDesc": "在刷新時鎖定道具稀有度(影響刷新費用)",
  "checkTeamDesc": "檢查隊伍或使用形態改變道具",
  "rerollCost": "₽{{formattedMoney}}",
  "itemCost": "₽{{formattedMoney}}"
} as const;
