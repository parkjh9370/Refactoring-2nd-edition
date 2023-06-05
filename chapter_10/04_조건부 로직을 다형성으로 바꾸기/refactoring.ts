/**
 * if, case 형태를 class, getter 함수를 통해 가져올 수 있도록 변경
 *  => 이를 통해 공통 로직을 만들 수 있꼬,
 * 내부 변경점이 있거나 로직이 추가되더라도 해당 class 에서 getter를 통해 값을 가져오고, 변경도 쉽게 할 수 있다.
 */

function plumages(birds) {
  return new Map(birds.map((b) => createBird(b)).map((bird) => [bird.name, bird.plumage]));
}

function speed(birds) {
  return new Map(birds.map((b) => createBird(b)).map((bird) => [bird.name, bird.airSpeedVelocity]));
}

function createBird(bird) {
  switch (bird.type) {
    case 'EuropeanSwallow':
      return new EuropeanSwallow(bird);
    case 'AfricanSwallow':
      return new AfricanSwallow(bird);
    case 'NorwegianBlueParrot':
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}

class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get plumage() {
    return '알 수 없다';
  }
  get airSpeedVelocity() {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  get plumage() {
    return '보통이다';
  }
  get airSpeedVelocity() {
    return 35;
  }
}
class AfricanSwallow extends Bird {
  numberOfCoconuts: number;

  constructor(numberOfCoconuts) {
    super(numberOfCoconuts) 
  }

  get plumage() {
    return this.numberOfCoconuts > 2 ? '지쳤다' : '보통이다';
  }
  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}
class NorwegianBlueParrot extends Bird {
  voltage: number;
  isNailed: boolean;

  constructor(props) {
    super(props)
  }

  get plumage() {
    return this.voltage > 100 ? '그을렸다' : '예쁘다';
  }
  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}