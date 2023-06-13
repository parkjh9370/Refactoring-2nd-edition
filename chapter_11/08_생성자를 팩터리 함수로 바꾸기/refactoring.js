/**
 * 생성자 -> 함수 형태로 구현
 * 좀 더 명확한 의미(함수 메서드 명)로 생성자를 만들어낼 수 있다.
 */

class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }

  get name() {
    return this._name;
  }
  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }
  static get legalTypeCodes() {
    return {
      E: 'Engineer',
      M: 'Manager',
      S: 'Salesperson',
    };
  }
}

// 팩터리 함수
function createEmployee(name, typeCode) {
  return new Employee(name, typeCode);
}

function createEngineer(name) {
  return new Employee(name, 'E');
}

const candidate = new Employee(document.name, document.empType);
const leadEngineer = new Employee(document.leadEngineer);