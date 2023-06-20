/**
 * 변수에 값을 할당하고, 값을 단 한 번만 정하면 될 떄는
 * 함수를 반환해 초기화 + 값 할당을 동시에 해서 해당 변수 값을 한번에 예측할 수 있도록 한다. 
 */

const totalAscent = calculateAscent();
const totalTime = calculateTime();
const totalDistance = calculateDistance();

const pace = totalTime / 60 / totalDistance;

function calculateAscent() {
  let result = 0;

  for (let i = 1; i < ProcessingInstruction.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;
    result += verticalChange > 0 ? verticalChange : 0;
  }
  return result;
}