/**
 * TelephoneNumber 생성 시 그 요소인 areaCode, number를 불변 객체(value Object)로 만들어서 전달시킴
 * -> Person 객체를 만들 시 해당 class에서만 전화번호의 값 객체인 areaCode, number 값을 가져오거나 수정할 수 있다.
 */
class Person {
  _telephoneNumber: TelephoneNumber;

  set officeAreaCode(arg) {
    this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }

  set officeNumber(arg) {
    this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg);
  }

  get officeNumber() {
    return this._telephoneNumber.number;
  }
}

class TelephoneNumber {
  _areaCode: string;
  _number: string;

  constructor(areaCode: string, number: string) {
    this._areaCode = areaCode;
    this._number = number;

    Object.freeze(this);
  }

  get areaCode() {
    return this._areaCode;
  }

  get number() {
    return this._number;
  }

  // 동치성 검사... object.freeze로 대체할 수 있을 듯?
  equals(other: TelephoneNumber) {
    if (!(other instanceof TelephoneNumber)) return false;
    return this.areaCode === other.areaCode && this.number === other.number;
  }
}