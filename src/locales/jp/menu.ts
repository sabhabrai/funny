import { SimpleTranslationEntries } from "#app/interfaces/locales";

/**
 * The menu namespace holds most miscellaneous text that isn't directly part of the game's
 * contents or directly related to Pokemon data. This includes menu navigation, settings,
 * account interactions, descriptive text, etc.
 */
export const menu: SimpleTranslationEntries = {
  "cancel": "キャンセル",
  "continue": "つづきから",
  "dailyRun": "Daily Run (Beta)",
  "loadGame": "ロードセーブ",
  "newGame": "はじめから",
  "settings": "Settings",
  "selectGameMode": "Select a game mode.",
  "logInOrCreateAccount": "Log in or create an account to start. No email required!",
  "username": "ユーザーめい",
  "password": "パスワード",
  "login": "ログイン",
  "register": "かいいん　とうろく",
  "emptyUsername": "ユーザー名は空にできません",
  "invalidLoginUsername": "入力したユーザー名は無効です",
  "invalidRegisterUsername": "ユーザー名には英文字、数字、アンダースコアのみを含める必要があります",
  "invalidLoginPassword": "入力したパスワードは無効です",
  "invalidRegisterPassword": "パスワードは6文字以上でなければなりません",
  "usernameAlreadyUsed": "ユーザー名は既に使用されています",
  "accountNonExistent": "ユーザーは存在しません",
  "unmatchingPassword": "パスワードが一致しません",
  "passwordNotMatchingConfirmPassword": "パスワードは確認パスワードと一致する必要があります",
  "confirmPassword": "パスワード確認",
  "registrationAgeWarning": "登録することで、あなたが13歳以上であることを確認します。",
  "backToLogin": "ログインへ",
  "failedToLoadSaveData": "保存データの読み込みに失敗しました。ページを再読み込みしてください。\nこれが続く場合は、管理者に連絡してください。",
  "sessionSuccess": "セッションが正常に読み込まれました。",
  "failedToLoadSession": "セッションデータを読み込むことができませんでした。\nデータが破損している可能性があります。",
  "boyOrGirl": "おとこのこ？\nそれとも おんなのこ？",
  "boy": "おとこ",
  "girl": "おんな",
  "evolving": "…おや！？\n{{pokemonName}}のようすが…！",
  "stoppedEvolving": "{{pokemonName}}のへんかがとまった",
  "pauseEvolutionsQuestion": "Would you like to pause evolutions for {{pokemonName}}?\nEvolutions can be re-enabled from the party screen.",
  "evolutionsPaused": "Evolutions have been paused for {{pokemonName}}.",
  "evolutionDone": "おめでとう！\n{{pokemonName}}は{{evolvedPokemonName}}にしんかした！",
  "dailyRankings": "ほんじつのランキング",
  "weeklyRankings": "しゅうのランキング",
  "noRankings": "ランキングなし",
  "positionIcon": "#",
  "usernameScoreboard": "Username",
  "score": "Score",
  "wave": "Wave",
  "loading": "よみこみちゅう…",
  "loadingAsset": "Loading asset: {{assetName}}",
  "playersOnline": "オンラインのプレイヤー",
  "yes":"はい",
  "no":"いいえ",
  "disclaimer": "DISCLAIMER",
  "disclaimerDescription": "This game is an unfinished product; it might have playability issues (including the potential loss of save data),\n change without notice, and may or may not be updated further or completed.",
  "general": "General",
  "display": "Display",
  "audio": "Audio",
  "gamepad": "Gamepad",
  "keyboard": "Keyboard",
  "gameSpeed": "Game Speed",
  "hpBarSpeed": "HP Bar Speed",
  "expGainsSpeed": "EXP Gains Speed",
  "expPartyDisplay": "Show EXP Party",
  "skipSeenDialogues": "Skip Seen Dialogues",
  "battleStyle": "Battle Style",
  "enableRetries": "Enable Retries",
  "tutorials": "Tutorials",
  "touchControls": "Touch Controls",
  "vibrations": "Vibrations",
  "normal": "Normal",
  "fast": "Fast",
  "faster": "Faster",
  "skip": "Skip",
  "levelUpNotifications": "Level Up Notifications",
  "on": "On",
  "off": "Off",
  "switch": "Switch",
  "set": "Set",
  "auto": "Auto",
  "disabled": "Disabled",
  "language": "Language",
  "change": "Change",
  "uiTheme": "UI Theme",
  "default": "Default",
  "legacy": "Legacy",
  "windowType": "Window Type",
  "moneyFormat": "Money Format",
  "damageNumbers": "Damage Numbers",
  "simple": "Simple",
  "fancy": "Fancy",
  "abbreviated": "Abbreviated",
  "moveAnimations": "Move Animations",
  "showStatsOnLevelUp": "Show Stats on Level Up",
  "candyUpgradeNotification": "Candy Upgrade Notification",
  "passivesOnly": "Passives Only",
  "candyUpgradeDisplay": "Candy Upgrade Display",
  "icon": "Icon",
  "animation": "Animation",
  "moveInfo": "Move Info",
  "showMovesetFlyout": "Show Moveset Flyout",
  "showArenaFlyout": "Show Arena Flyout",
  "showTimeOfDayWidget": "Show Time of Day Widget",
  "timeOfDayAnimation": "Time of Day Animation",
  "bounce": "Bounce",
  "back": "Back",
  "spriteSet": "Sprite Set",
  "consistent": "Consistent",
  "mixedAnimated": "Mixed Animated",
  "fusionPaletteSwaps": "Fusion Palette Swaps",
  "playerGender": "Player Gender",
  "typeHints": "Type Hints",
  "masterVolume": "Master Volume",
  "bgmVolume": "BGM Volume",
  "seVolume": "SE Volume",
  "musicPreference": "Music Preference",
  "mixed": "Mixed",
  "gamepadPleasePlug": "Please Plug in a Gamepad or Press a Button",
  "delete": "Delete",
  "keyboardPleasePress": "Please Press a Key on Your Keyboard",
  "reset": "Reset",
  "requireReload": "Reload Required",
  "action": "Action",
  "pressToBind": "Press to Bind",
  "pressButton": "Press a Button...",
  "buttonUp": "Up",
  "buttonDown": "Down",
  "altButtonUp": "Up (Alt)",
  "buttonLeft": "Left",
  "buttonRight": "Right",
  "buttonAction": "Action",
  "buttonMenu": "Menu",
  "buttonSubmit": "Submit",
  "altButtonDown": "Down (Alt)",
  "altButtonLeft": "Left (Alt)",
  "altButtonRight": "Right (Alt)",
  "altButtonAction": "Action (Alt)",
  "buttonCancel": "Cancel",
  "altButtonCancel": "Cancel (Alt)",
  "altButtonMenu": "Menu (Alt)",
  "buttonStats": "Stats",
  "altButtonStats": "Stats (Alt)",
  "buttonCycleForm": "Cycle Form",
  "altButtonCycleForm": "Cycle Form (Alt)",
  "buttonCycleShiny": "Cycle Shiny",
  "altButtonCycleShiny": "Cycle Shiny (Alt)",
  "buttonCycleGender": "Cycle Gender",
  "altButtonCycleGender": "Cycle Gender (Alt)",
  "buttonCycleAbility": "Cycle Ability",
  "altButtonCycleAbility": "Cycle Ability (Alt)",
  "buttonCycleNature": "Cycle Nature",
  "altButtonCycleNature": "Cycle Nature (Alt)",
  "buttonCycleVariant": "Cycle Variant",
  "altButtonCycleVariant": "Cycle Variant (Alt)",
  "buttonSpeedUp": "Speed Up",
  "altButtonSpeedUp": "Speed Up (Alt)",
  "buttonSlowDown": "Slow Down",
  "altButtonSlowDown": "Slow Down (Alt)",
  "altButtonSubmit": "Submit (Alt)"
} as const;
