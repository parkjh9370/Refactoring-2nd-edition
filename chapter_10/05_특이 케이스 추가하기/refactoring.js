/**
 * 값에 대해 예외 케이스가 되는 공통 함수를 만들고(예외 케이스 처리)
 * 
 * class 내부에 get method에 생성한 특이 케이스 함수를 넣고 class의 데이터 정합성을 검증한다. 
 */

class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return this._customer === '미확인 고객' ? new UnknownCustomer() : this._customer;
  }
}

// 특이 케이스 검사코드. 튀는 케이스가 있는 경우 유지하고, 필요 없는 경우 제거한다.
function isUnknown(arg) {
  if (!(arg instanceof Customer) || arg instanceof UnknownCustomer) {
    throw new Error(`잘못된 갑소가 비교: <${arg}>`);
  }
  return arg === '미확인 고객';
}

class Customer {
  constructor(customer) {
    this._name = customer.name;
    this._billingPlan = customer.billingPlan;
    this._paymentHistory = customer.paymentHistory;
  }

  get name() {
    return this._name;
  }

  get billingPlan() {
    return this._billingPlan;
  }

  set billingPlan(arg) {
    this._billingPlan = arg;
  }

  get paymentHistory() {
    return this._paymentHistory;
  }

  get isUnknown() {
    return false;
  }
}

// JS의 서브클래스 규칙과 동적타이핑 덕분에 Customer의 서브클래스로 만들지 않는 것이 낫다.
class UnknownCustomer {
  get isUnknown() {
    return true;
  }
  get name() {
    return '거주자';
  }
  get billingPlan() {
    return this.registry.billingPlans.basic;
  }
  set billingPlan(arg) {
    // 무시한다.
  }
  get paymentHistory() {
    return new NullPaymentHistory();
  }
}

class NullPaymentHistory {
  get weeksDelinquentInLastYear() {
    return 0;
  }
}

// client1
const aCustomer = site.customer;
const customerName = aCustomer.name; // 이제 customerName 변수를 선언하지 않고 인라인해도 된다.

// client2
const plan = aCustomer.billingPlan;

// client3
aCustomer.billingPlan = newPlan;

// client4
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;