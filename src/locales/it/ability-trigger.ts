import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const abilityTriggers: SimpleTranslationEntries = {
  "blockRecoilDamage" : "{{abilityName}} di {{pokemonName}}\nl'ha protetto dal contraccolpo!",
  "stockpile" : "{{pokemonName}}\nne ha accumulati {{stockpileNumber}}!",
  "badDreams": "{{pokemonName}} è tormentato dagli incubi!",
  "costar": "{{pokemonName}} copied {{allyName}}'s stat changes!",
  "iceFaceAvoidedDamage": "{{pokemonName}} ha evitato\ni danni grazie a {{abilityName}}!",
  "trace": "{{pokemonName}} copied {{targetName}}'s\n{{abilityName}}!",
  "windPowerCharged": "Venire colpito da {{moveName}} ha caricato {{pokemonName}}!",
  "quickDraw":"{{pokemonName}} can act faster than normal, thanks to its Quick Draw!",
} as const;
