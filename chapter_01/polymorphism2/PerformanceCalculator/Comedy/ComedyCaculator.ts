import { performanceCalculatorParameter } from '../../../shared/interface';
import { performanceCalculator } from '../PerformanceCaculator';

export class ComedyCalculator extends performanceCalculator {
  constructor(parameter: performanceCalculatorParameter) {
    super(parameter)
  }

  private addTotalAmountByCondition(): number {
    if (this.audienceCount > 20) {
      return 10000 + 500 * (this.audienceCount - 20);
    }

    return 0;
  }

  get amount(): number {
    return 30000 + this.addTotalAmountByCondition() +  (300 * this.audienceCount);
  }

  get volumeCreditAmount(): number {
    return super.volumeCredit() + Math.floor(this.audienceCount / 5);
  }
}