import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const egg: SimpleTranslationEntries = {
  "egg": "Uovo",
  "defaultTier": "Comune",
  "greatTier": "Raro",
  "ultraTier": "Epico",
  "masterTier": "Leggendario",
  "hatchWavesMessageSoon": "Si sentono dei rumori provenienti dall'interno. Si schiuderà presto!",
  "hatchWavesMessageClose": "Sembra muoversi di tanto in tanto. Potrebbe essere prossimo alla schiusa.",
  "hatchWavesMessageNotClose": "Cosa uscirà da qui? Pare che non si schiuderà presto.",
  "hatchWavesMessageLongTime": "Sembra che questo uovo impiegherà ancora molto tempo per schiudersi.",
  "gachaTypeLegendary": "Tasso dei leggendari aumentato",
  "gachaTypeMove": "Tasso delle mosse rare da uova aumentato",
  "gachaTypeShiny": "Tasso degli shiny aumentato",
  "selectMachine": "Seleziona un macchinario.",
  "notEnoughVouchers": "Non hai abbastanza biglietti!",
  "tooManyEggs": "Hai troppe uova!",
  "pull": "Estrazione",
  "pulls": "Estrazioni",
  "sameSpeciesEgg": "{{species}} will hatch from this egg!",
  "hatchFromTheEgg": "Dall’Uovo è nato {{pokemonName}}!",
  "eggMoveUnlock": "Egg Move unlocked: {{moveName}}",
  "rareEggMoveUnlock": "Rare Egg Move unlocked: {{moveName}}",
  "moveUPGacha": "Move UP!",
  "shinyUPGacha": "Shiny UP!",
  "legendaryUPGacha": "UP!",
} as const;
