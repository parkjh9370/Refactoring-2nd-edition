// 하나의 변수에 두 번 이상 값이 바뀔때, 해당 변수명을 분리해서 할당해주기
function distanceTraveled(scenario, time) {
  let result;
  const primaryAcceleration = scenario.primaryForce / scenario.mass;
  const primaryTime = Math.min(time, scenario.delay);

  result = 0.5 * primaryAcceleration * primaryTime * primaryTime;

  const secondaryTime = time - scenario.delay;

  if (secondaryTime > 0) {
    const primaryVelocity = primaryAcceleration * scenario.delay;
    const secondaryAcceleration = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;

    result += primaryVelocity * secondaryTime + 0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }

  return result;
}