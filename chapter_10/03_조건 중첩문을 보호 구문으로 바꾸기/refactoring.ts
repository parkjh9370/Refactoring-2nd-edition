/**
 * if, else if, else 를 연달아 쓰는 중첩 조건문 지양
 * 하나의 조건문 if에서 명확한 return 사용하고, 그렇지 않은 경우 분리(else if, else 사용 X)
 */

function payment(employee) {
  if (employee.isSeparated) {
    return { amount: 0, reasonCode: 'SEP' };
  }
  if (employee.isRetired) {
    return { amount: 0, reasonCode: 'RET' };
  }

  // return someFinalComputation();
}

function adjustedCapital(anInstrument) {
  if (anInstrument.capital <= 0 || (anInstrument.interestRate <= 0 && anInstrument.duration <= 0)) {
    return 0;
  }
  return (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
}