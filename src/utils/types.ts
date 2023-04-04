import ObjectID from "bson-objectid";

export type Class = {
  id: ObjectID;
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
