export type Class = {
  id: string;
  name: string;
  specs: Spec[];
  armortype: string;
};

export type Spec = {
  name: string;
  mainstat: string;
  id: string;
};

export type SecStat = {
  id: number;
  name: string;
};

export type DungeonSelect = {
  id: string;
  image: string;
};

export type CalculatedData = {
  dungeons: string[];
  Items: Item[];
};

export type Item = {
  name: string;
  preview_item: TPreviewItem;
};

export type TPreviewItem = {
  inventory_type: TInventoryType;
  item_subclass: TItemSubclass;
  stats: TStat[];
  level: TItemLevel;
};

export type TInventoryType = {
  type: string;
  name: string;
};

export type TItemSubclass = {
  key: { href: string };
  name: string;
  id: Number;
};

export type TItemLevel = {
  value: Number;
  display_string: string;
};

export type TStat = {
  type: TStatType;
  value: Number;
  display: TStatDisplay;
};

export type TStatType = {
  type: string;
  name: string;
};

export type TStatDisplay = {
  display_string: string;
  color: { r: Number; g: Number; b: Number; a: Number };
};
