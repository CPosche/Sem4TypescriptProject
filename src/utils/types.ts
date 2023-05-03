export type Class = {
  id: string;
  name: string;
  specs: Spec[];
  armortype: string;
};

export type Spec = {
  name: string;
  mainstat: string;
};

export type SecStat = {
  id: number;
  name: string;
};

export type DungeonSelect = {
  id: string;
  image: string;
};
