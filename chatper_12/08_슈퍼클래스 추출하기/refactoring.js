/**
 * 비슷한 일을 수행하는 두 개 이상 클래스가 있다면
 * 상속을 통해 공통된 부분(필드, 메서드)은 슈퍼 클래스에 정의해 주도록 한다
 */

class Party {
  constructor(name) {
    this._name = name;
    this._monthlyCost = monthlyCost;
  }

  get monthlyCost() {
    return this._monthlyCost;
  }

  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Department extends Party {
  constructor(name, staff) {
    super(name);

    this._staff = staff;
  }

  get staff() {
    return this._staff.slice();
  }
  get name() {
    return this._name;
  }

  get totalMonthlyCost() {
    return this.staff
      .map((e) => e.monthlyCost)
      .reduce((sum, cost) => sum + cost);
  }

  get headCount() {
    return this.staff.length;
  }
}

class Employee extends Party {
  constructor(name, id, monthlyCost) {
    super(name);

    this._id = id;
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }
}