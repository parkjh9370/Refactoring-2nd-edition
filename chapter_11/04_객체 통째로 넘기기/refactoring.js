/**
 * 인자 값을 바탕으로 로직을 처리해주는 함수를 만들때,
 * 처리에 필요한 인자 값만 넘겨주는 것이 아니라
 * 
 * 그 인자가 포함된 모든 객체를 넘겨주도록 한다
 * 
 * => 추 후, 내부 로직에서 다른 인자를 사용해야 할 때 쉽게 처리해줄 수 있음
 */


if (aPlan.withinRange(aRoom.daysTempRange)) {
  alert.push('방 온도가 지정범위를 벗어났습니다.');
}

class HeatingPlan {
  withinRange(aNumberRange) {
    return aNumberRange.low >= this._temperatureRange.low && aNumberRange.high <= this._temperatureRange.high;
  }
}