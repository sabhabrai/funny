import { TranslationEntries } from "#app/interfaces/locales";

export const challenges: TranslationEntries = {
  "on": "An",
  "off": "Aus",
  "title": "Herausforderungsmodifikatoren",
  "illegalEvolution": "{{pokemon}} hat sich in ein Pokémon verwandelt, dass für diese Herausforderung nicht zulässig ist!",
  "singleGeneration": {
    "name": "Mono-Generation",
    "desc": "Du kannst nur Pokémon aus der {{gen}} Generation verwenden.",
    "desc_default": "Du kannst nur Pokémon gewählten Generation verwenden.",
    "gen_1": "ersten",
    "gen_2": "zweiten",
    "gen_3": "dritten",
    "gen_4": "vierten",
    "gen_5": "fünften",
    "gen_6": "sechsten",
    "gen_7": "siebten",
    "gen_8": "achten",
    "gen_9": "neunten",
  },
  "singleType": {
    "name": "Mono-Typ",
    "desc": "Du kannst nur Pokémon des Typs {{type}} verwenden.",
    "desc_default": "Du kannst nur Pokémon des gewählten Typs verwenden."
    // types in pokemon-info
  },
  "eeveeOnly": {
    "name": "Nur-Evoli",
    "desc": "Du kannst nur Evoli und dessen Entwicklungen in dieser Herausforderung verwenden.",
  }
} as const;
