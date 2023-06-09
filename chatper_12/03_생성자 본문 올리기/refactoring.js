/**
 * 리팩토링 전
 */
class Party {}

class Employee extends Party {
  constructor(name, id, monthlyCost) {
    super();

    this._name = name;
    this._id = id;
    this._monthlyCost = monthlyCost;
  }
}

/**
 * 리팩토링 후
 */
class Party {
  constructor(name) {
    this._name = name;
  }
}

class Employee extends Party {
  constructor(name, id, monthlyCost) {
    super(name);

    this._id = id;
    this._monthlyCost = monthlyCost;
  }
}

/**
 * 공통 생성자는 부모 클래스에서 정의해 준다
 */