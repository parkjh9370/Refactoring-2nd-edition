/**
 * 때에 따라 getter -> 매개변수 형태로 구현하면 코드 가독성이 더 좋아진다.
 * 
 * 흠... 글쎄.. 이부분은 솔직히 100% 동의는 못하겠다
 */

// 전역객체 thermostat
const thermostat = {
  selectedTemperature: 15,
  currentTemperature: 20,
};

if (thePlan.targetTemperature(thermostat.selectedTemperature) > thermostat.currentTemperature) setToHeat();
else if (thePlan.targetTemperature(thermostat.selectedTemperature) < thermostat.currentTemperature) setToCool();
else setOff();

class HeatingPlan {
  targetTemperature(selectedTemperature) {
    if (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
  }
}