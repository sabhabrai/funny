import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const modifier: SimpleTranslationEntries = {
  "surviveDamageApply": "{{pokemonNameWithAffix}} aguentou o tranco\nusando sua {{typeName}}!",
  "turnHealApply": "{{pokemonNameWithAffix}} restaurou um pouco de PS usando\nsuas {{typeName}}!",
  "hitHealApply": "{{pokemonNameWithAffix}} restaurou um pouco de PS usando\nsua {{typeName}}!",
  "pokemonInstantReviveApply": "{{pokemonNameWithAffix}} foi reanimado\npor sua {{typeName}}!",
  "pokemonResetNegativeStatStageApply": "Os atributos diminuídos de {{pokemonNameWithAffix}} foram\nrestaurados por seu(sua) {{typeName}}!",
  "moneyInterestApply": "Você recebeu um juros de ₽{{moneyAmount}}\nde sua {{typeName}}!",
  "turnHeldItemTransferApply": "{{itemName}} de {{pokemonNameWithAffix}} foi absorvido(a)\npelo {{typeName}} de {{pokemonName}}!",
  "contactHeldItemTransferApply": "{{itemName}} de {{pokemonNameWithAffix}} foi pego(a)\npela {{typeName}} de {{pokemonName}}!",
  "enemyTurnHealApply": "{{pokemonNameWithAffix}}\nrestaurou um pouco de seus PS!",
  "bypassSpeedChanceApply": "{{pokemonName}} se move mais rápido que o normal graças à sua {{itemName}}!",
} as const;
