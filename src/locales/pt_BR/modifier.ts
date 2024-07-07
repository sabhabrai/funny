import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const modifier: SimpleTranslationEntries = {
  "surviveDamageApply": "{{pokemonNameWithAffix}} aguentou o tranco\nusando sua {{typeName}}!",
  "turnHealApply": "{{pokemonNameWithAffix}} restaurou um pouco de PS usando\nseu {{typeName}}!",
  "hitHealApply": "{{pokemonNameWithAffix}} restaurou um pouco de PS usando\nsua {{typeName}}!",
  "pokemonInstantReviveApply": "{{pokemonNameWithAffix}} foi revivido\npor sua {{typeName}}!",
  "moneyInterestApply": "Você recebeu um juros de ₽{{moneyAmount}}\nde sua {{typeName}}!",
  "turnHeldItemTransferApply": "{{itemName}} de {{pokemonNameWithAffix}} foi absorvido(a)\npelo {{typeName}} de {{pokemonName}}!",
  "contactHeldItemTransferApply": "{{itemName}} de {{pokemonNameWithAffix}} foi pego(a)\npela {{typeName}} de {{pokemonName}}!",
  "enemyTurnHealApply": "{{pokemonNameWithAffix}}\nrestaurou um pouco de seus PS!",
} as const;
