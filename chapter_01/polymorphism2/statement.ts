import invoices from '../invoices.json';
import plays from '../plays.json';

import { FormatCurrency } from '../shared/FormatCurrency';
import { Calculator, InVoices, Plays } from '../shared/interface';
import { TragedyCalculator } from './PerformanceCalculator/Tragedy/TragedyCaculator';
import { ComedyCalculator } from './PerformanceCalculator/Comedy/ComedyCaculator';

class statement {
  invoices: InVoices;
  plays: Plays;

  constructor(invoices: InVoices, plays: Plays) {
    this.invoices = invoices;
    this.plays = plays;
  }

  private performanceCalculator(type: string, audienceCount: number): TragedyCalculator | ComedyCalculator {
    switch (type) {
      case Calculator.tragedy:
        return new TragedyCalculator({ audienceCount });
      case Calculator.comedy:
        return new ComedyCalculator({ audienceCount });
    }
  }

  get statementAmount(): Map<string, string | number> {
    const stateAmount = new Map<string, number | string>();

    let volumeCreditAmount = 0;
    this.invoices.performances.forEach((performance) => {
      stateAmount.set(performance.playID, this.performanceCalculator(this.plays[performance.playID].type, performance.audience).amount);
      volumeCreditAmount += this.performanceCalculator(this.plays[performance.playID].type, performance.audience).volumeCreditAmount;
    });

    stateAmount.set('totalAmount', [...stateAmount.values()].reduce((a, c) => Number(a) + Number(c)));
    stateAmount.set('volumeCreditAmount', volumeCreditAmount);

    return stateAmount;
  }

  get statementPhrases(): string {
    let phrases = `\n[Statement: ${this.invoices.customer}]\n\n`;

    for (const [k, v] of this.statementAmount) {
      phrases += `${k}: ${FormatCurrency.KRWToUSDCent(v)}\n`;
    }

    return phrases;
  }
}

// get statementAmount(): statement Map 출력
console.log(new statement(invoices[0], plays).statementAmount);

// get statementPhrases(): statement phrases 출력
console.log(new statement(invoices[0], plays).statementPhrases);
