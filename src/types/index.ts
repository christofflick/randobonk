export type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export type Tier = 'S' | 'A' | 'B' | 'C' | 'D';

export interface Character {
  id: string;
  name: string;
  description?: string;
  tier: Tier;
  image?: string;
}

export interface Weapon {
  id: string;
  name: string;
  tier: Tier;
  isDefault: boolean;
  image?: string;
}

export interface Tome {
  id: string;
  name: string;
  tier: Tier;
  isDefault: boolean;
  image?: string;
}

export interface Item {
  id: string;
  name: string;
  rarity: Rarity;
  isDefault: boolean;
  image?: string;
}

export interface Build {
  character: Character;
  weapons: Weapon[];
  tomes: Tome[];
  items: Item[];
}

export interface FilterState {
  characters: Set<string>;
  weapons: Set<string>;
  tomes: Set<string>;
  items: Set<string>;
}
