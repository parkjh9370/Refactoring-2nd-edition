import { PerformanceCalculator, performanceCalculatorParameter } from '../../shared/interface';

export class performanceCalculator implements PerformanceCalculator {
  audienceCount: number;
  _amount: number;

  constructor(parameter: performanceCalculatorParameter) {
    this.audienceCount = parameter.audienceCount;
  }

  get amount(): number {
    return this._amount;
  }

  volumeCredit(): number {
    return Math.max(this.audienceCount - 30, 0);
  }
}
