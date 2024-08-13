export enum Type {
  UNKNOWN = -1,
  NORMAL = 0,
  FIGHTING,
  FLYING,
  POISON,
  GROUND,
  ROCK,
  BUG,
  GHOST,
  STEEL,
  FIRE,
  WATER,
  GRASS,
  ELECTRIC,
  PSYCHIC,
  ICE,
  DRAGON,
  DARK,
  FAIRY,
  STELLAR
}

export type TypeDamageMultiplier = 0 | 0.125 | 0.25 | 0.5 | 1 | 2 | 4 | 8;

export function getTypeDamageMultiplier(attackType: integer, defType: integer, isInverseBattle: boolean = false): TypeDamageMultiplier {
  let multiplier = 1;
  if (attackType === Type.UNKNOWN || defType === Type.UNKNOWN) {
    return multiplier = 1 as TypeDamageMultiplier;
  }

  switch (defType) {
  case Type.NORMAL:
    switch (attackType) {
    case Type.FIGHTING:
      multiplier = 2;
      break;
    case Type.GHOST:
      multiplier = 0;
      break;
    default:
      multiplier = 1;
      break;
    }
    break;
  case Type.FIGHTING:
    switch (attackType) {
    case Type.FLYING:
    case Type.PSYCHIC:
    case Type.FAIRY:
      multiplier = 2;
      break;
    case Type.ROCK:
    case Type.BUG:
    case Type.DARK:
      multiplier = 0.5;
      break;
    default:
      multiplier = 1;
      break;
    }
    break;
  case Type.FLYING:
    switch (attackType) {
    case Type.ROCK:
    case Type.ELECTRIC:
    case Type.ICE:
      multiplier = 2;
      break;
    case Type.FIGHTING:
    case Type.BUG:
    case Type.GRASS:
      multiplier = 0.5;
      break;
    case Type.GROUND:
      multiplier = 0;
      break;
    default:
      multiplier = 1;
      break;
    }
    break;
  case Type.POISON:
    switch (attackType) {
    case Type.GROUND:
    case Type.PSYCHIC:
      multiplier = 2;
      break;
    case Type.FIGHTING:
    case Type.POISON:
    case Type.BUG:
    case Type.GRASS:
    case Type.FAIRY:
      multiplier = 0.5;
      break;
    default:
      multiplier = 1;
      break;
    }
    break;
  case Type.GROUND:
    switch (attackType) {
    case Type.WATER:
    case Type.GRASS:
    case Type.ICE:
      multiplier = 2;
      break;
    case Type.POISON:
    case Type.ROCK:
      multiplier = 0.5;
      break;
    case Type.ELECTRIC:
      multiplier = 0;
      break;
    default:
      multiplier = 1;
      break;
    }
    break;
  case Type.ROCK:
    switch (attackType) {
    case Type.FIGHTING:
    case Type.GROUND:
    case Type.STEEL:
    case Type.WATER:
    case Type.GRASS:
      multiplier = 2;
      break;
    case Type.NORMAL:
    case Type.FLYING:
    case Type.POISON:
    case Type.FIRE:
      multiplier = 0.5;
      break;
    default:
      multiplier = 1;
      break;
    }
    break;
  case Type.BUG:
    switch (attackType) {
    case Type.FLYING:
    case Type.ROCK:
    case Type.FIRE:
      multiplier = 2;
      break;
    case Type.FIGHTING:
    case Type.GROUND:
    case Type.GRASS:
      multiplier = 0.5;
      break;
    default:
      multiplier = 1;
      break;
    }
    break;
  case Type.GHOST:
    switch (attackType) {
    case Type.GHOST:
    case Type.DARK:
      multiplier = 2;
      break;
    case Type.POISON:
    case Type.BUG:
      multiplier = 0.5;
      break;
    case Type.NORMAL:
    case Type.FIGHTING:
      multiplier = 0;
      break;
    default:
      multiplier = 1;
      break;
    }
    break;
  case Type.STEEL:
    switch (attackType) {
    case Type.FIGHTING:
    case Type.GROUND:
    case Type.FIRE:
      multiplier = 2;
      break;
    case Type.NORMAL:
    case Type.FLYING:
    case Type.ROCK:
    case Type.BUG:
    case Type.STEEL:
    case Type.GRASS:
    case Type.PSYCHIC:
    case Type.ICE:
    case Type.DRAGON:
    case Type.FAIRY:
      multiplier = 0.5;
      break;
    case Type.POISON:
      multiplier = 0;
      break;
    default:
      multiplier = 1;
      break;
    }
    break;
  case Type.FIRE:
    switch (attackType) {
    case Type.GROUND:
    case Type.ROCK:
    case Type.WATER:
      multiplier = 2;
      break;
    case Type.BUG:
    case Type.STEEL:
    case Type.FIRE:
    case Type.GRASS:
    case Type.ICE:
    case Type.FAIRY:
      multiplier = 0.5;
      break;
    default:
      multiplier = 1;
      break;
    }
    break;
  case Type.WATER:
    switch (attackType) {
    case Type.GRASS:
    case Type.ELECTRIC:
      multiplier = 2;
      break;
    case Type.STEEL:
    case Type.FIRE:
    case Type.WATER:
    case Type.ICE:
      multiplier = 0.5;
      break;
    default:
      multiplier = 1;
      break;
    }
    break;
  case Type.GRASS:
    switch (attackType) {
    case Type.FLYING:
    case Type.POISON:
    case Type.BUG:
    case Type.FIRE:
    case Type.ICE:
      multiplier = 2;
      break;
    case Type.GROUND:
    case Type.WATER:
    case Type.GRASS:
    case Type.ELECTRIC:
      multiplier = 0.5;
      break;
    default:
      multiplier = 1;
      break;
    }
    break;
  case Type.ELECTRIC:
    switch (attackType) {
    case Type.GROUND:
      multiplier = 2;
      break;
    case Type.FLYING:
    case Type.STEEL:
    case Type.ELECTRIC:
      multiplier = 0.5;
      break;
    default:
      multiplier = 1;
      break;
    }
    break;
  case Type.PSYCHIC:
    switch (attackType) {
    case Type.BUG:
    case Type.GHOST:
    case Type.DARK:
      multiplier = 2;
      break;
    case Type.FIGHTING:
    case Type.PSYCHIC:
      multiplier = 0.5;
      break;
    default:
      multiplier = 1;
      break;
    }
    break;
  case Type.ICE:
    switch (attackType) {
    case Type.FIGHTING:
    case Type.ROCK:
    case Type.STEEL:
    case Type.FIRE:
      multiplier = 2;
      break;
    case Type.ICE:
      multiplier = 0.5;
      break;
    default:
      multiplier = 1;
      break;
    }
    break;
  case Type.DRAGON:
    switch (attackType) {
    case Type.ICE:
    case Type.DRAGON:
    case Type.FAIRY:
      multiplier = 2;
      break;
    case Type.FIRE:
    case Type.WATER:
    case Type.GRASS:
    case Type.ELECTRIC:
      multiplier = 0.5;
      break;
    default:
      multiplier = 1;
      break;
    }
    break;
  case Type.DARK:
    switch (attackType) {
    case Type.FIGHTING:
    case Type.BUG:
    case Type.FAIRY:
      multiplier = 2;
      break;
    case Type.GHOST:
    case Type.DARK:
      multiplier = 0.5;
      break;
    case Type.PSYCHIC:
      multiplier = 0;
      break;
    default:
      multiplier = 1;
      break;
    }
    break;
  case Type.FAIRY:
    switch (attackType) {
    case Type.POISON:
    case Type.STEEL:
      multiplier = 2;
      break;
    case Type.FIGHTING:
    case Type.BUG:
    case Type.DARK:
      multiplier = 0.5;
      break;
    case Type.DRAGON:
      multiplier = 0;
      break;
    default:
      multiplier = 1;
      break;
    }
    break;
  case Type.STELLAR:
    multiplier = 1;
    break;
  }

  // if isInverseBattle is true, reverse the multiplier
  if (isInverseBattle) {
    if (multiplier > 1) {
      multiplier = 0.5;
    } else if (multiplier < 1) {
      multiplier = 2;
    }
  }
  return multiplier as TypeDamageMultiplier;
}

/**
 * Retrieve the types resisting a given type
 * @returns An array populated with Types, or an empty array if no resistances exist (Unknown or Stellar type)
 */
export function getTypeResistances(type: number, isInverseBattle: boolean = false): Type[] {
  const typeResistances: Type[] = [];

  for (let i = 0; i < Type.STELLAR; i++) {
    if (getTypeDamageMultiplier(type, i, isInverseBattle) < 1) {
      typeResistances.push(i);
    }
  }

  return typeResistances;
}

/**
 * Retrieve the color corresponding to a specific damage multiplier
 * @returns A color or undefined if the default color should be used
 */
export function getTypeDamageMultiplierColor(multiplier: TypeDamageMultiplier, side: "defense" | "offense"): string | undefined {
  if (side === "offense") {
    switch (multiplier) {
    case 0:
      return "#929292";
    case 0.125:
      return "#FF5500";
    case 0.25:
      return "#FF7400";
    case 0.5:
      return "#FE8E00";
    case 1:
      return undefined;
    case 2:
      return "#4AA500";
    case 4:
      return "#4BB400";
    case 8:
      return "#52C200";
    }
  } else if (side === "defense") {
    switch (multiplier) {
    case 0:
      return "#B1B100";
    case 0.125:
      return "#2DB4FF";
    case 0.25:
      return "#00A4FF";
    case 0.5:
      return "#0093FF";
    case 1:
      return undefined;
    case 2:
      return "#FE8E00";
    case 4:
      return "#FF7400";
    case 8:
      return "#FF5500";
    }
  }
}

export function getTypeRgb(type: Type): [ integer, integer, integer ] {
  switch (type) {
  case Type.NORMAL:
    return [ 168, 168, 120 ];
  case Type.FIGHTING:
    return [ 192, 48, 40 ];
  case Type.FLYING:
    return [ 168, 144, 240 ];
  case Type.POISON:
    return [ 160, 64, 160 ];
  case Type.GROUND:
    return [ 224, 192, 104 ];
  case Type.ROCK:
    return [ 184, 160, 56 ];
  case Type.BUG:
    return [ 168, 184, 32 ];
  case Type.GHOST:
    return [ 112, 88, 152 ];
  case Type.STEEL:
    return [ 184, 184, 208 ];
  case Type.FIRE:
    return [ 240, 128, 48 ];
  case Type.WATER:
    return [ 104, 144, 240 ];
  case Type.GRASS:
    return [ 120, 200, 80 ];
  case Type.ELECTRIC:
    return [ 248, 208, 48 ];
  case Type.PSYCHIC:
    return [ 248, 88, 136 ];
  case Type.ICE:
    return [ 152, 216, 216 ];
  case Type.DRAGON:
    return [ 112, 56, 248 ];
  case Type.DARK:
    return [ 112, 88, 72 ];
  case Type.FAIRY:
    return [ 232, 136, 200 ];
  case Type.STELLAR:
    return [ 255, 255, 255 ];
  default:
    return [ 0, 0, 0 ];
  }
}
