export interface InVoices {
  customer: string;
  performances: {
    playID: string;
    audience: number;
  }[];
}

export type plays = Record<string, Record<string, string>>