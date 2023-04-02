export interface InVoices {
  customer: string;
  performances: Performance[];
}

export interface Performance {
  playID: string;
  audience: number;
}

export type Plays = Record<string, Record<string, string>>

export enum Calculator {
  tragedy = 'tragedy',
  comedy = 'comedy',
  credit = 'credit',
}

export type performanceCalculatorParameter = {
  audienceCount: number;
}

export interface PerformanceCalculator {
  volumeCredit(audienceCount: number): number;
}