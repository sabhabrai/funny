import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const abilityTriggers: SimpleTranslationEntries = {
  "blockRecoilDamage" : "{{pokemonName}}'s {{abilityName}}\nprotected it from recoil!",
  "badDreams": "{{pokemonName}} is tormented!",
  "windPowerCharged": "Being hit by {{moveName}} charged {{pokemonName}} with power!",
  "perishBody": "{{pokemonName}}'s {{abilityName}}\nwill faint both pokemon in 3 turns!",
  "poisonHeal": "{{pokemonName}}'s {{abilityName}}\nrestored its HP a little!",
  "iceFaceAvoidedDamage": "{{pokemonName}} avoided\ndamage with {{abilityName}}!",
  "quickDraw": "{{pokemonName}} can act faster than normal, thanks to its Quick Draw!"
} as const;
