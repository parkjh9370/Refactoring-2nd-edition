/**
 * 별도의 역할을 수행하는 클래스는 역할을 분리하고, 각각의 클래스에서 값을 가져와 사용할 수 있게 한다.
 */

{
  class Person {
    _telephoneNumber: TelephoneNumber
    _name: string;

    constructor() {
      this._telephoneNumber = new TelephoneNumber();
    }
  
    get name() {
      return this._name;
    }
  
    set name(arg) {
      this._name = arg;
    }
  
    get officeAreaCode() {
      return this._telephoneNumber.areaCode;
    }
  
    set officeAreaCode(arg) {
      this._telephoneNumber.areaCode = arg;
    }
  
    get officeNumber() {
      return this._telephoneNumber.number;
    }
  
    set officeNumber(arg) {
      this._telephoneNumber.number = arg;
    }
  
    get telephoneNumber() {
      return this._telephoneNumber.toString();
    }
  }
  
  class TelephoneNumber {
    _areaCode: string;
    _number: number;
  
    constructor() {}
  
    get areaCode() {
      return this._areaCode;
    }
  
    set areaCode(arg) {
      this._areaCode = arg;
    }
  
    get number() {
      return this._number;
    }
  
    set number(arg) {
      this._number = arg;
    }
  
    get telephoneNumber() {
      return `${this.areaCode} ${this.number}`;
    }
  
    toString() {
      return `${this.areaCode} ${this.number}`;
    }
  }
}