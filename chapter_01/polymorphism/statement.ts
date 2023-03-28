import { PlayGenre, performanceCalculatorParameter, PerformanceCalculator } from './../shared/interface';
import { FormatCurrency } from '../shared/FormatCurrency';

class performanceCalculator implements PerformanceCalculator {
  audienceCount: number;
  _amount: string;

  constructor(parameter: performanceCalculatorParameter) {
    this.audienceCount = parameter.audienceCount;
  }

  get amount(): string {
    return this._amount;
  }

  volumeCredit(): number {
    return Math.max(this.audienceCount - 30, 0);
  }
}

class TragedyCaculator extends performanceCalculator {
  constructor(parameter: performanceCalculatorParameter) {
    super(parameter);
  }

  private addTotalAmountByCondition() {
    if (this.audienceCount > 30) {
      return 1000 * (this.audienceCount - 30);
    }

    return 0;
  }

  get amount(): string {
    return FormatCurrency.KRWToUSD(40000 + this.addTotalAmountByCondition());
  }
}

class ComedyCalculator extends performanceCalculator {
  constructor(parameter: performanceCalculatorParameter) {
    super(parameter)
  }

  private addTotalAmountByCondition() {
    if (this.audienceCount > 20) {
      return 10000 + 500 * (this.audienceCount - 20);
    }

    return 0;
  }

  get amount(): string {
    return FormatCurrency.KRWToUSD(30000 + this.addTotalAmountByCondition() +  (300 * this.audienceCount));
  }

  get volumeCreditAmount(): number {
    return super.volumeCredit() + Math.floor(this.audienceCount / 5);
  }
}

class createPerformance {
  static caculator(type: PlayGenre, audienceCount: number) {
    switch (type) {
      case PlayGenre.tragedy:
        return new TragedyCaculator({ audienceCount });
      case PlayGenre.comedy:
        return new ComedyCalculator({ audienceCount });
    }
  }
}

console.log(createPerformance.caculator(PlayGenre.tragedy, 55).amount) // halmet: $650.00
console.log(createPerformance.caculator(PlayGenre.comedy, 35).amount) // as-like: $580.00
console.log(createPerformance.caculator(PlayGenre.tragedy, 40).amount) // othello: $500.00