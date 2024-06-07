import { SimpleTranslationEntries } from "#app/plugins/i18n";

/**
 * The menu namespace holds most miscellaneous text that isn't directly part of the game's
 * contents or directly related to Pokemon data. This includes menu navigation, settings,
 * account interactions, descriptive text, etc.
 */
export const menu: SimpleTranslationEntries = {
  "cancel": "取消",
  "continue": "繼續",
  "dailyRun": "每日挑戰 (Beta)",
  "loadGame": "加載遊戲",
  "newGame": "新遊戲",
  "settings": "Settings",
  "selectGameMode": "選擇遊戲模式",
  "logInOrCreateAccount": "登入或註冊即可開始遊戲，無需郵箱！",
  "username": "用戶名",
  "password": "密碼",
  "login": "登入",
  "register": "注冊",
  "emptyUsername": "用戶名不能為空",
  "invalidLoginUsername": "提供的用戶名無效",
  "invalidRegisterUsername": "用戶名只能包含字母，數字或下劃線",
  "invalidLoginPassword": "提供的密碼無效",
  "invalidRegisterPassword": "密碼必需至少包含6個字符",
  "usernameAlreadyUsed": "用戶名稱已被使用",
  "accountNonExistent": "用戶不存在",
  "unmatchingPassword": "提供的密碼不匹配",
  "passwordNotMatchingConfirmPassword": "密碼必需與確認密碼一致",
  "confirmPassword": "確認密碼",
  "registrationAgeWarning": "注冊表示您確認您已年滿13歲。",
  "backToLogin": "返回登錄",
  "failedToLoadSaveData": "讀取存檔數據失敗。請重新加載頁面。如果\n問題仍然存在，請聯繫管理員。",
  "sessionSuccess": "工作階段加載成功.",
  "failedToLoadSession": "無法加載您的工作階段數據。它可能已損壞。",
  "boyOrGirl": "你是男孩還是女孩?",
  "boy": "男孩",
  "girl": "女孩",
  "evolving": "甚麼?\n{{pokemonName}} 要進化了!",
  "stoppedEvolving": "{{pokemonName}} 停止了進化。",
  "pauseEvolutionsQuestion": "你確定要停止 {{pokemonName}} 的進化嗎?\n你可以在隊伍畫面中重新啟用進化。",
  "evolutionsPaused": "{{pokemonName}}的進化已暫停。",
  "evolutionDone": "恭喜!\n你的 {{pokemonName}} 進化成了 {{evolvedPokemonName}}!",
  "dailyRankings": "每日排名",
  "weeklyRankings": "每週排名",
  "noRankings": "無排名",
  "loading": "加載中…",
  "playersOnline": "在線玩家",
  "empty":"空",
  "yes":"是",
  "no":"否",
  "disclaimer": "DISCLAIMER",
  "disclaimerDescription": "This game is an unfinished product; it might have playability issues (including the potential loss of save data),\n change without notice, and may or may not be updated further or completed.",
  "overwriteTheData": "Overwrite the data in the selected slot?"  
} as const;
