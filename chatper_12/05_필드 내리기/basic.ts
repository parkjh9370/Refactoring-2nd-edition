{
  class Employee {
    quota: number

    constructor(quota: number) {
      this.quota = quota;
    }
  }
  
  class Engineer extends Employee {
    constructor(quota: number) {
      super(quota)
    }
  }

  class Salesperson extends Employee {
    constructor(quota: number) {
      super(quota)
    }
  }
}