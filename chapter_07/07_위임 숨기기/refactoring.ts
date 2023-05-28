/**
 * 분리되어 있는 클래스에 위임 메서드를 사용함으로써, 클라이언트에서는 내부 동작을 알 필요 없이 간결하게 값을 가져올 수 있게 한다
 */

{
  class Person {
    _name: string;
    _department: Department;

    constructor(name) {
      this._name = name;
    }

    get name() {
      return this._name;
    }

    set department(arg) {
      this._department = arg;
    }

    get manager() {
      return this._department.manager;
    }
  }
  
  class Department {
    _chargeCode: string;
    _manager: string;

    get chargeCode() {
      return this._chargeCode;
    }
    set chargeCode(arg) {
      this._chargeCode = arg;
    }
    get manager() {
      return this._manager;
    }
    set manager(arg) {
      this._manager = arg;
    }
  }

  const manager = new Person('Rookie').manager;
}