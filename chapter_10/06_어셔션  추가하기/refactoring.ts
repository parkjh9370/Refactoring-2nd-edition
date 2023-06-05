/**
 * class 내부에서 쓰일 값에 대한 타입, 대/소 비교 등의 검증 작업을 추가할 수 있다.
 */

{
  class Customer {
    _aNumber: number;
    _discountRate: number;
  
    constructor(aNumber: number, discountRate: number) {
      this._aNumber = aNumber;
      this._discountRate = discountRate;
    }
  
    applyDiscount(aNumber) {
      if (!this.discountRate) {
        return aNumber;
      } else {
        return aNumber - this.discountRate * aNumber;
      }
    }
  
    set discountRate(aNumber) {
      this.assert(this._aNumber, this._discountRate);
      this._discountRate = aNumber;
    }
  
    assert(aNumber: number, discountRate: number) {
      if (aNumber === null) {
        throw new Error('Number가 null 입니다');
      }
  
      if (discountRate <= 0) {
        throw new Error('DiscountRate은 0보다 작을 수 없습니다')
      } 
    }
  }
}