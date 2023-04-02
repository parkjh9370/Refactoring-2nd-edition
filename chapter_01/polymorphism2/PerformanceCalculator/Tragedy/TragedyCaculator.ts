import { performanceCalculatorParameter } from '../../../shared/interface';
import { performanceCalculator } from './../PerformanceCaculator';

export class TragedyCalculator extends performanceCalculator {
  constructor(parameter: performanceCalculatorParameter) {
    super(parameter);
  }

  private addTotalAmountByCondition() {
    if (this.audienceCount > 30) {
      return 1000 * (this.audienceCount - 30);
    }

    return 0;
  }

  get amount(): number {
    return 40000 + this.addTotalAmountByCondition();
  }

  get volumeCreditAmount(): number {
    return this.volumeCredit();
  }
}