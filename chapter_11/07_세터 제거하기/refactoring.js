/**
 * 생성 시 값을 setter 로 변경/지정 -> 생성자 함수로 값을 지정
 * 
 * setter는 값을 변경시키는 함수이기에 사용하지 않을 수 있는 곳에서는 사용하지 않는 것이 좋다
 */

class Person {
  constructor(id) {
    this._id = id;
  }

  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get id() {
    return this._id;
  }
}

const martin = new Person('1234');

martin.name = '마틴';