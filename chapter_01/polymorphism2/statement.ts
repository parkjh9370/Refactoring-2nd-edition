import invoices from '../invoices.json';
import plays from '../plays.json';

import { FormatCurrency } from '../shared/FormatCurrency';
import { InVoices, Plays } from './../shared/interface';
import { TragedyCalculator } from './PerformanceCalculator/Tragedy/TragedyCaculator';
import { ComedyCalculator } from './PerformanceCalculator/Comedy/ComedyCaculator';

class statement {
  invocies: InVoices
  plays: Plays

  constructor(invoices, plays) {
    this.invocies = invoices;
    this.plays = plays;
  }

  private performanceCalculator(type: string, audienceCount: number) {
    switch (type) {
      case 'tragedy':
        return new TragedyCalculator({ audienceCount });
      case 'comedy':
        return new ComedyCalculator({ audienceCount });
    }
  }

  get statementAmount() {
    const stateAmount = new Map();

    let volumeCreditAmount = 0;
    this.invocies[0].performances.forEach((performance) => {
      stateAmount.set(performance.playID, this.performanceCalculator(this.plays[performance.playID].type, performance.audience).amount)
      volumeCreditAmount += this.performanceCalculator(this.plays[performance.playID].type, performance.audience).volumeCreditAmount
    })

    stateAmount.set('totalAmount', [...stateAmount.values()].reduce((a, c) => a + c))
    stateAmount.set('volumeCredit', volumeCreditAmount);

    return stateAmount;
  }

  get statementPhrases() {
    let phrases = `\n[Statement: ${this.invocies[0].customer}]\n\n`;

    for (const statement of this.statementAmount) {
      phrases += `${statement[0]}: ${FormatCurrency.KRWToUSDCent(statement[1])}\n`
    }

    return phrases;
  }
}

console.log(new statement(invoices, plays).statementAmount);
console.log(new statement(invoices, plays).statementPhrases);
