import { ability } from "./ability";
import { abilityTriggers } from "./ability-trigger";
import { battle } from "./battle";
import { biome } from "./biome";
import { commandUiHandler } from "./command-ui-handler";
import { egg } from "./egg";
import { fightUiHandler } from "./fight-ui-handler";
import { growth } from "./growth";
import { menu } from "./menu";
import { menuUiHandler } from "./menu-ui-handler";
import { modifierType } from "./modifier-type";
import { move } from "./move";
import { nature } from "./nature";
import { partyUiHandler } from "./party-ui-handler";
import { pokeball } from "./pokeball";
import { pokemon } from "./pokemon";
import { pokemonInfo } from "./pokemon-info";
import { splashMessages } from "./splash-messages";
import { starterSelectUiHandler } from "./starter-select-ui-handler";
import { SummaryUiHandler } from "./summary-ui-handler";
import { tutorial } from "./tutorial";
import { weather } from "./weather";
import { titles,trainerClasses,trainerNames } from "./trainers";
import { splashMessages } from "./splash-messages"
import { titles, trainerClasses, trainerNames } from "./trainers";
import { tutorial } from "./tutorial";
import { battleMessageUiHandler } from "./battle-message-ui-handler";
import { berry } from "./berry";

export const deConfig = {
    ability: ability,
    abilityTriggers: abilityTriggers,
    battle: battle,
    commandUiHandler: commandUiHandler,
    egg: egg,
    fightUiHandler: fightUiHandler,
    growth: growth,
    menu: menu,
    menuUiHandler: menuUiHandler,
    modifierType: modifierType,
    move: move,
    nature: nature,
    pokeball: pokeball,
    pokemon: pokemon,
    pokemonInfo: pokemonInfo,
    splashMessages: splashMessages,
    starterSelectUiHandler: starterSelectUiHandler,
    titles: titles,
    trainerClasses: trainerClasses,
    trainerNames: trainerNames,
    tutorial: tutorial,
    splashMessages: splashMessages,
    nature: nature,
    growth: growth,
    partyUiHandler: partyUiHandler,
    summaryUiHandler: SummaryUiHandler,
    biome: biome,
    weather: weather,
    modifierType: modifierType,
    battleMessageUiHandler: battleMessageUiHandler,
    berry: berry,
}
