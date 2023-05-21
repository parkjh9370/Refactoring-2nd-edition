// 명시적으로 쓰일 수 있는 상수는 변수에 값을 할당해 해당 변수가 뜻하는 바를 명확히 한다.

const STANDARD_GRAVITY = 9.81;

function potentialEnergy(mass: number, height: number) {
  return mass * STANDARD_GRAVITY * height;
}