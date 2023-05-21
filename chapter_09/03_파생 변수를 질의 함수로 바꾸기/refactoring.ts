/**
 * 하나의 메서드, 함수에서는 다른 값에 영향이 갈 수 없도록 한다.
 * 값에 수정을 가하는 함수와 값을 가져오는 함수 역할을 분리한다.
 */

interface Adjustment {
  amount: number;
}

class ProductionPlan {
  _production: string;
  _adjustments: Adjustment[];

  constructor(production: string) {
    this._production = production;
    this._adjustments = [];
  }

  applyAdjustment(anAdjustment: Adjustment) {
    this._adjustments.push(anAdjustment);
  }

  get production() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }
}