/**
 * 서브클래스를 슈퍼 클래스 필드로 대체해 제거한다
 * => 다형성을 가지는 경우 슈퍼 클래스를 상속해 각각의 서브클래스가 하나의 독립적인 클래스 역할읋 하도록 만든다
 */

class Person {
  constructor(name, genderCode) {
    this._name = name;
    this._genderCode= genderCode;
  }

  get name() {
    return this._name;
  }

  get genderCode() {
    return this._genderCode;
  }

  get isMale() {
    return 'M' === this._genderCode;
  }

  // 생략
}

class Male extends Person {
  get genderCode() {
    return 'M';
  }
}

class Female extends Person {
  get genderCode() {
    return 'F';
  }
}

function createPerson(aRecord) {
  switch (aRecord.gender) {
    case 'M':
      return new Male(aRecord.name, 'M');
    case 'F':
      return new Female(aRecord.name, 'F');
    default:
      return new Person(aRecord.name, 'X');
  }
}

function loadFromInput(data) {
  return data.map((aRecord) => createPerson(aRecord));
}

// 클라이언트
const numberOfMales = people.filter((p) => p.isMale.length);