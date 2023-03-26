export interface InVoices {
  customer: string;
  performances: Performance[];
}

export interface Performance {
  playID: string;
  audience: number;
}

export type Plays = Record<string, Record<string, string>>

export enum PlayGenre {
  tragedy = 'tragedy',
  comedy = 'comedy',
}