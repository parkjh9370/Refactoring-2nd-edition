let _repositoryData;

export function initialize() {
  _repositoryData = {};
  _repositoryData.customers = new Map();
}

interface Customers {
  number: number;
  id: number;
}

/**
 * 고객 데이터를 저장하는 Repository에 저장된 고객은 고유 id와 number를 가지고 있다.
 * 
 * 만들고, Order가 추가되거나 수정되었을 때 해당 고객 Repository 정보를 수정할 수 있는 Order Class 생성
 * 해당 Order class는 고객 id를 통해 생성 가능
 * 
 * registerCustomer 메서드를 통해서 해당 고객 Repository에 접근할 수 있으며,
 * 검증과정(registerCustomer)에서 기존에 등록된 고객 id가 있을 때만 Repository에 해당 고객 Order를 등록(추가)할 수 있도록 한다.
 */

class Order {
  _number: number;
  _customer: Customer;

  constructor(customer: Customers) {
    this._number = customer.number;
    this._customer = this.registerCustomer(customer.id);
  }

  private registerCustomer(id: number) {
    if (!_repositoryData.customer.has(id)) {
      _repositoryData.customers.set(id, new Customer(id));
    }

    return this.findCustomer(id);
  }

  private findCustomer(id: number) {
    return _repositoryData.customers.get(id);
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  _id: number;

  constructor(id: number) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}