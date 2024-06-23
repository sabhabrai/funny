import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const abilityTriggers: SimpleTranslationEntries = {
  "blockRecoilDamage" : "{{abilityName}}\nde {{pokemonName}} le protège du contrecoup !",
  "badDreams": "{{pokemonName}} a le sommeil agité !",
  "costar": "{{pokemonName}} copied {{allyName}}'s stat changes!",
  "iceFaceAvoidedDamage": "{{pokemonName}} évite les dégâts\navec {{abilityName}} !",
  "perishBody": "{{abilityName}} de {{pokemonName}}\nmettra les deux Pokémon K.O. dans trois tours !",
  "poisonHeal": "{{abilityName}} de {{pokemonName}}\nrestaure un peu ses PV !",
  "trace": "{{pokemonName}} copied {{targetName}}'s\n{{abilityName}}!",
  "windPowerCharged": "{{pokemonName}} a été touché par la capacité {{moveName}} et se charge en électricité !",
  "quickDraw": "{{pokemonName}} can act faster than normal, thanks to its Quick Draw!"
} as const;
