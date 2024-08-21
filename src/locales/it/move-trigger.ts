import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const moveTriggers: SimpleTranslationEntries = {
  "hitWithRecoil" : "{{pokemonName}} ha subito il contraccolpo!",
  "cutHpPowerUpMove": "{{pokemonName}} riduce i suoi PS per potenziare la sua mossa!",
  "absorbedElectricity": "{{pokemonName}} assorbe elettricità!",
  "switchedStatChanges": "{{pokemonName}} scambia con il bersaglio le modifiche alle statistiche!",
  "switchedTwoStatChanges": "{{pokemonName}} scambia con il bersaglio le modifiche a {{firstStat}} e {{secondStat}}!",
  "switchedStat": "{{pokemonName}} scambia la sua {{stat}} con quella del bersaglio!",
  "sharedGuard": "{{pokemonName}} somma le sue capacità difensive con quelle del bersaglio e le ripartisce equamente!",
  "sharedPower": "{{pokemonName}} somma le sue capacità offensive con quelle del bersaglio e le ripartisce equamente!",
  "goingAllOutForAttack": "{{pokemonName}} fa sul serio!",
  "regainedHealth": "{{pokemonName}} s'è\nripreso!",
  "keptGoingAndCrashed": "{{pokemonName}} si sbilancia e\nsi schianta!",
  "fled": "{{pokemonName}} è fuggito!",
  "cannotBeSwitchedOut": "{{pokemonName}} non può essere sostituito!",
  "swappedAbilitiesWithTarget": "{{pokemonName}} scambia la sua\nabilità con il bersaglio!",
  "coinsScatteredEverywhere": "Ci sono monete sparse ovunque!",
  "attackedByItem": "{{itemName}} attacca {{pokemonName}}!",
  "whippedUpAWhirlwind": "{{pokemonName}} genera un\nuragano!",
  "flewUpHigh": "{{pokemonName}} vola\nin alto!",
  "tookInSunlight": "{{pokemonName}}  assorbe la luce!",
  "dugAHole": "{{pokemonName}} si nasconde sottoterra!",
  "loweredItsHead": "{{pokemonName}} abbassa la testa!",
  "isGlowing": "{{pokemonName}} è avvolto da una luce intensa!",
  "bellChimed": "	Si sente suonare una campanella!",
  "foresawAnAttack": "{{pokemonName}} presagisce\nl’attacco imminente!",
  "isTighteningFocus": "{{pokemonName}} si concentra al massimo!",
  "hidUnderwater": "{{pokemonName}} sparisce\nsott’acqua!",
  "soothingAromaWaftedThroughArea": "Un gradevole profumo si diffonde nell’aria!",
  "sprangUp": "{{pokemonName}} spicca un gran balzo!",
  "choseDoomDesireAsDestiny": "{{pokemonName}} ipoteca\nil futuro con Desiderio Fatale!",
  "vanishedInstantly": "{{pokemonName}} sparisce\nimprovvisamente!",
  "tookTargetIntoSky": "{{pokemonName}} trascina\nin aria {{targetName}}!",
  "becameCloakedInFreezingLight": "{{pokemonName}} è avvolto da\nuna luce fredda!",
  "becameCloakedInFreezingAir": "{{pokemonName}} è avvolto da\nun’atmosfera gelida!",
  "isChargingPower": "{{pokemonName}} accumula energia!",
  "burnedItselfOut": "Le fiamme di {{pokemonName}} si sono spente!",
  "startedHeatingUpBeak": "{{pokemonName}} inizia a\nscaldare il becco!",
  "setUpShellTrap": "{{pokemonName}} ha preparato\nla Gusciotrappola!",
  "isOverflowingWithSpacePower": "La forza dell’universo pervade {{pokemonName}}!",
  "usedUpAllElectricity": "{{pokemonName}} ha usato tutta la sua elettricità!",
  "stoleItem": "{{pokemonName}} ruba\nil/lo/la {{itemName}} di {{targetName}}!",
  "incineratedItem": "{{pokemonName}} incenerisce\nil/lo/la {{itemName}} di {{targetName}}!",
  "knockedOffItem": "{{pokemonName}} fa cadere\nil/lo/la {{itemName}} di {{targetName}}!",
  "tookMoveAttack": "{{pokemonName}} attira\nl'attacco {{moveName}} su di sé!",
  "cutOwnHpAndMaximizedStat": "{{pokemonName}} riduce i suoi PS\ne aumenta al massimo il/la suo/a {{statName}}!",
  "copiedStatChanges": "{{pokemonName}} copia\nle modifiche alle statistiche di {{targetName}}!",
  "magnitudeMessage": "Magnitudo {{magnitude}}!",
  "tookAimAtTarget": "{{pokemonName}} prende la mira\nsu {{targetName}}!",
  "transformedIntoType": "{{pokemonName}} è diventato\ndi tipo {{typeName}}!",
  "copiedMove": "{{pokemonName}} copia\n{{moveName}}!",
  "sketchedMove": "{{pokemonName}} disegna uno schizzo\ndella mossa {{moveName}}!",
  "acquiredAbility": "L’abilità di {{pokemonName}}\nè ora {{abilityName}}!",
  "copiedTargetAbility": "{{pokemonName}} copia l’abilità {{abilityName}}\ndi {{targetName}}!",
  "transformedIntoTarget": "{{pokemonName}} assume le sembianze\ndi {{targetName}}!",
  "tryingToTakeFoeDown": "{{pokemonName}} tenta di far subire a chi lo manda KO la sua stessa sorte!",
  "addType": "Adesso {{pokemonName}} è anche\ndi tipo {{typeName}}!",
  "cannotUseMove": "{{pokemonName}} non può usare {{moveName}}!",
  "healHp": "{{pokemonName}} ha recuperato dei PS.",
  "sacrificialFullRestore": "{{pokemonName}} riceve i benefici\neffetti di Curardore!",
  "invertStats": "Le modifiche alle statistiche di {{pokemonName}}\nvengono invertite!",
  "resetStats": "Tutte le modifiche alle statistiche sono state annullate!",
  "statEliminated": "All stat changes were eliminated!",
  "faintCountdown": "{{pokemonName}}\nandrà KO dopo {{turnCount}} turni.",
  "copyType": "{{pokemonName}} assume il tipo\ndi {{targetPokemonName}}!",
  "suppressAbilities": "L’abilità di {{pokemonName}}\nperde ogni efficacia!",
  "swapArenaTags": "{{pokemonName}} ha invertito gli effetti attivi\nnelle due metà del campo!",
  "exposedMove": "{{pokemonName}} identified\n{{targetPokemonName}}!",
} as const;
