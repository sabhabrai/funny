import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const abilityTriggers: SimpleTranslationEntries = {
  "blockRecoilDamage" : "{{abilityName}}\nde {{pokemonName}} le protège du contrecoup !",
  "badDreams": "{{pokemonName}} a le sommeil agité !",
  "windPowerCharged": "{{pokemonName}} a été touché par la capacité {{moveName}} et se charge en électricité !",
  "perishBody": "{{abilityName}} de {{pokemonName}} \névanouira les deux pokémons en 3 tours !",
  "poisonHeal": "{{abilityName}} de {{pokemonName}} \nrétablit un peu ses HP !",
  "iceFaceAvoidedDamage": "{{pokemonName}} a évité les\ndommages avec {{abilityName}}!"
} as const;
