import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const abilityTriggers: SimpleTranslationEntries = {
  "blockRecoilDamage" : "{{pokemonName}}[[는]] {{abilityName}} 때문에\n반동 데미지를 받지 않는다!",
  "badDreams": "{{pokemonName}}[[는]]\n나이트메어 때문에 시달리고 있다!",
  "windPowerCharged": "{{pokemonName}}[[는]]\n{{moveName}}에 맞아 충전되었다!",
  "perishBody": "{{pokemonName}}의 {{abilityName}} 때문에\n양쪽 포켓몬 모두는 3턴 후에 쓰러져 버린다!",
  "poisonHeal": "{{pokemonName}}[[는]] {{abilityName}}[[로]]인해\n조금 회복했다.",
  "iceFaceAvoidedDamage": "{{pokemonName}}[[는]] {{abilityName}} 때문에\n데미지를 받지 않는다!",
  "blockItemTheft": "{{pokemonName}}'s {{abilityName}}\nprevents item theft!",
  "typeImmunityHealAb": "{{pokemonName}}'s {{abilityName}}\nrestored its HP a little!",
  "nonSuperEffectiveImmunityAb": "{{pokemonName}} avoided\ndamage with {{abilityName}}!",
  "postDefendDisguiseAb": "{{pokemonName}}'s disguise was busted!",
  "reverseDrainAb": "{{pokemonName}} sucked up the liquid ooze!",
  "postDefendTypeChangeAb": "{{pokemonName}}'s {{abilityName}}\nmade it the {{type}} type!",
  "postDefendContactDamageAb": "{{pokemonName}}'s {{abilityName}}\nhurt its attacker!",
  "postDefendAbilitySwapAb": "{{pokemonName}}swapped\nabilities with its target!",
  "postDefendAbilityGiveAb": "{{pokemonName}} gave its target\n{{abilityName}}!",
  "postDefendMoveDisableAb": "{{pokemonName}}'s {{attackName}}\nwas disabled!",
  "postAttackStealHeldItemAb": "{{pokemonName}} stole\n{{targetPokemonName}}'s {{item}}!",
  "postDefendStealHeldItemAb": "{{pokemonName}} stole\n{{targetPokemonName}}'s {{item}}!",
  "copyFaintedAllyAbilityAb": "{{pokemonName}}'s {{abilityName}} was taken over!",
  "intimidateImmunityAb": "{{pokemonName}}'s {{abilityName}}\nprevented it from being Intimidated!",
  "postSummonAllyHealAb": "{{targetPokemonName}} drank down all the\n matcha that {{pokemonName}} made!",
  "postSummonClearAllyStatsAb": "{{pokemonName}}'s stat changes\nwere removed!",
  "traceAb": "{{pokemonName}} traced\n{{targetPokemonName}}'s\n{{abilityName}}!",
  "postSummonTransformAb": "{{pokemonName}} transformed\ninto {{targetPokemonName}}!",
  "protectStatAb": "{{pokemonName}}'s {{abilityName}}\nprevents lowering its {{statName}}!",
  "statusEffectImmunityAb": "{{pokemonName}}'s {{abilityName}}\nprevents {{statusEffect}}!",
  "battlerTagImmunityAb": "{{pokemonName}}'s {{abilityName}}\nprevents {{battlerTag}}!",
  "forewarnAb": "{{pokemonName}} was forwarned about {{moveName}}!",
  "friskAb": "{{pokemonName}} frisked {{targetPokemonName}}'s {{abilityName}}!",
  "postWeatherLapseHealAb": "{{pokemonName}}'s {{abilityName}}\nrestored its HP a little!",
  "postWeatherLapseDamageAb": "{{pokemonName}}'s is hurt\nby its {{abilityName}}!",
  "postTurnResetStatusAb": "{{pokemonName}}{{statusEffectHealText}}",
  "postTurnLootAb": "{{pokemonName}} harvested one {{berryName}}!",
  "postTurnHealAb": "{{pokemonName}}'s {{abilityName}}\nrestored its HP a little!",
  "fetchBallAb": "{{pokemonName}} fetched a\n{{pokeballName}}!",
  "healFromBerryUseAb": "{{pokemonName}}'s {{abilityName}}\nrestored its HP!",
  "arenaTrapAb": "{{pokemonName}}'s {{abilityName}}\nprevents switching!",
  "postBattleLootAb": "{{pokemonName}} picked up\n{{item}}!",
  "postFaintContactDamageAb": "{{pokemonName}}'s {{abilityName}} hurt\nits attacker!",
  "postFaintHPDamageAb": "{{pokemonName}}'s {{abilityName}} hurt\nits attacker!",
  "pressureAb": "{{pokemonName}} is exerting its Pressure!",
  "moldBreakAb": "{{pokemonName}} breaks the mold!",
  "anticipationAb": "{{pokemonName}} shuddered!",
  "turboblazeAb": "{{pokemonName}} is radiating a blazing aura!",
  "teravoltAb": "{{pokemonName}} is radiating a bursting aura!",
  "darkAuraAb": "{{pokemonName}} is radiating a dark aura!",
  "fairyAuraAb": "{{pokemonName}} is radiating a fairy aura!",
  "neutralizingGasAb": "{{pokemonName}}'s Neutralizing Gas filled the area!",
  "asOneGlastrierAb": "{{pokemonName}} has two abilities",
  "asOneSpectrierAb": "{{pokemonName}} has two abilities",
  "airlockAb": "The effects of weather disappeared!",
} as const;
