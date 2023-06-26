/**
 * 서브 클래스랑만 관련있는 메서드는 서브 클래스에서 정의
 */

class Employee { }

class Engineer extends Employee {}
class Salesperson extends Employee {
  get quota() {}
}