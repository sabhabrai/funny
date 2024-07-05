import { SimpleTranslationEntries } from "#app/interfaces/locales";

/**
 * The weather namespace holds text displayed when weather is active during a battle
 */
export const weather: SimpleTranslationEntries = {
  "sunnyStartMessage": "A luz do sol ficou clara!",
  "sunnyLapseMessage": "A luz do sol está forte.",
  "sunnyClearMessage": "A luz do sol sumiu.",

  "rainStartMessage": "Começou a chover!",
  "rainLapseMessage": "A chuva continua forte.",
  "rainClearMessage": "A chuva parou.",

  "sandstormStartMessage": "Uma tempestade de areia se formou!",
  "sandstormLapseMessage": "A tempestade de areia é violenta.",
  "sandstormClearMessage": "A tempestade de areia diminuiu.",
  "sandstormDamageMessage": "{{pokemonNameWithAffix}} é atingido\npela tempestade de areia!",

  "hailStartMessage": "Começou a chover granizo!",
  "hailLapseMessage": "Granizo cai do céu.",
  "hailClearMessage": "O granizo parou.",
  "hailDamageMessage": "{{pokemonNameWithAffix}} é atingido\npelo granizo!",

  "snowStartMessage": "Começou a nevar!",
  "snowLapseMessage": "A neve continua caindo.",
  "snowClearMessage": "Parou de nevar.",

  "fogStartMessage": "Uma névoa densa se formou!",
  "fogLapseMessage": "A névoa continua forte.",
  "fogClearMessage": "A névoa sumiu.",

  "heavyRainStartMessage": "Um temporal começou!",
  "heavyRainLapseMessage": "O temporal continua forte.",
  "heavyRainClearMessage": "O temporal parou.",

  "harshSunStartMessage": "A luz do sol está escaldante!",
  "harshSunLapseMessage": "A luz do sol é intensa.",
  "harshSunClearMessage": "A luz do sol enfraqueceu.",

  "strongWindsStartMessage": "Ventos fortes apareceram!",
  "strongWindsLapseMessage": "Os ventos fortes continuam.",
  "strongWindsClearMessage": "Os ventos fortes diminuíram.",
};

export const terrain: SimpleTranslationEntries = {
  "misty": "Misty",
  "mistyStartMessage": "Mist swirled around the battlefield!",
  "mistyClearMessage": "The mist disappeared from the battlefield.",
  "mistyBlockMessage": "{{pokemonNameWithAffix}} surrounds itself with a protective mist!",

  "electric": "Electric",
  "electricStartMessage": "An electric current ran across the battlefield!",
  "electricClearMessage": "The electricity disappeared from the battlefield.",

  "grassy": "Grassy",
  "grassyStartMessage": "Grass grew to cover the battlefield!",
  "grassyClearMessage": "The grass disappeared from the battlefield.",

  "psychic": "Psychic",
  "psychicStartMessage": "The battlefield got weird!",
  "psychicClearMessage": "The weirdness disappeared from the battlefield!",

  "defaultBlockMessage": "{{pokemonNameWithAffix}} is protected by the {{terrainName}} Terrain!"
};
