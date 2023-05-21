// 고객 정보에 새로운 값을 넣으려고 한다면, 생성된 고객 수만큼 그 새로운 값을 갱신해줘야함

class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = new Customer(data.customer);
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}