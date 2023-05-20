class Customer {
  _name: string;
  _discountRate: number;
  _contract: CustomerContract;

  constructor(name: string, discountRate: number) {
    this._name = name;
    this._contract = new CustomerContract('10/21', 30);
    this._setDiscountRate(this._contract.discountRate);
  }

  get discountRate(): number {
    return this._discountRate;
  }

  _setDiscountRate(aNumber: number) {
    this._contract.discountRate = aNumber;
  }

  becomePreferred() {
    this._setDiscountRate(this._discountRate + 0.03);
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.discountRate));
  }
}

class CustomerContract {
  _startDate: string;
  _discountRate: number;

  constructor(startDate: string, discountRate: number) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }

  get discountRate(): number {
    return this._discountRate;
  }

  set discountRate(arg: number) {
    this._discountRate = arg;
  }
}