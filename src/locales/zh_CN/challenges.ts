import { TranslationEntries } from "#app/interfaces/locales";

export const challenges: TranslationEntries = {
  "title": "适用挑战条件",
  "illegalEvolution": "{{pokemon}}变成了\n不符合此挑战条件的宝可梦！",
  "singleGeneration": {
    "name": "单一世代",
    "desc": "你只能使用第{{gen}}\n世代的宝可梦",
    "desc_default": "你只能使用所选\n世代的宝可梦",
    "gen_1": "一",
    "gen_2": "二",
    "gen_3": "三",
    "gen_4": "四",
    "gen_5": "五",
    "gen_6": "六",
    "gen_7": "七",
    "gen_8": "八",
    "gen_9": "九",
  },
  "singleType": {
    "name": "单属性",
    "desc": "你只能使用{{type}}\n属性的宝可梦",
    "desc_default": "你只能使用所选\n属性的宝可梦"
  },
  "freshStart": {
    "name": "初次尝试",
    "desc": "你只能使用御三家，就像是你第一次玩宝可梦肉鸽一样。",
    "value.0": "关闭",
    "value.1": "开启",
  },
  "inverseBattle": {
    "name": "逆转之战",
    "desc": "属性相克关系被反转，且没有任何属性对其他属性免疫。\n禁用其他挑战的成就。",
    "value.0": "关闭",
    "value.1": "开启",
  }
} as const;
