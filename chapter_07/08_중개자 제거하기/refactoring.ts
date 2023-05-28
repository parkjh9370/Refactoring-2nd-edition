/**
 * 서버에서는 역할을 수행하는 클래스와 위임 메서드가 추가될 때 마다 작업을 해주어야 하기 때문에
 * 단순히 전달만 해주는 위임 메서드를 추가하는 것보다 해당 객체 메서드를 통해 직접 호출할 수 있도록한다
 * 
 * => 상황에 맞게 자주 사용하는 메서드는 위임 메서드로 만들고, 그게 아니라면 직접 해당 객체 메서드를 호출할 수 있도록 한다.
 */
{
  class Person {
    _name: string;
    _department: string;

    constructor(name) {
      this._name = name;
    }

    get name() {
      return this._name;
    }

    get department() {
      return this._department;
    }

    set department(arg) {
      this._department = arg;
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
}