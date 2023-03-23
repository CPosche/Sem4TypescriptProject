export type Class = {
  id: number;
  name: string;
  specs: Spec[];
};

export type Spec = {
  id: number;
  name: string;
  mainstat: string;
};

export type SecStat = {
  id: number;
  name: string;
};
