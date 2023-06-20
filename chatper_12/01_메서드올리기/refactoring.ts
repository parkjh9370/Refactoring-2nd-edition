/**
 * 부모 class 에서 정의된 공통 값(method)을 상속을 통해 받아오기
 */

class Employee {
  _name: string;

  constructor(name: string) {
    this._name = name;
  }
}

class Salesperson extends Employee {
  constructor(name: string) {
    super(name);
  }
}