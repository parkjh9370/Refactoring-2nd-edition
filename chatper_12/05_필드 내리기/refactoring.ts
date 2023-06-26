/**
 * 서브클래스에서만 사용하는 필드는 해당 서브클래스에서 사용
 */

{
  class Employee {
    name: string

    constructor(name: string) {
      this.name = name;
    }
  }
  
  class Engineer extends Employee {
    quota: number;

    constructor(name: string, quota: number) {
      super(name)
      this.quota = quota;
    }
  }

  class Salesperson extends Employee {
    quota: number;

    constructor(name: string, quota: number) {
      super(name)
      this.quota = quota;
    }
  }
}