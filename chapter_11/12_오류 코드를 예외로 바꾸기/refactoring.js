/**
 * 오류에 대한 예외 처리
 * - 프로그램은 정상 동작할 수 있어야 함
 * - 정확히 어떤 로직에서 예외처리가 되어 있고, 오류를 thorw 해줄 지 작성되어야
 * 해당 예외에 대한 동작과 결과를 예측할 수 있음
 */

class OrderProcessingError extends Error {
  constructor(errorCode) {
    super(`주문처리 오류: ${errorCode}`);
    this.code = errorCode;
  }
  get name() {
    return 'OrderProcessingError';
  }
}

function localShippingRules(country) {
  const data = countryData.shippingRules[country];

  if (data) return new ShippingRules(data);
  else throw new OrderProcessingError(-23);
}

function calculateShippingCosts(anOrder) {
  //관련 없는 코드
  const shippingRules = localShippingRules(anOrder.country);
  // 더 관련 없는 코드
}

try {
  calculateShippingCosts(orderData);
} catch (e) {
  if (e instanceof OrderProcessingError) {
    errorList.push({ order: orderData, errorCode: e.code });
  } else {
    throw e;
  }
}