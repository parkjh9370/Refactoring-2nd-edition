/**
 * 전화번호 형식 등 포맷팅이 정해진 데이터는 클래스 내부에서 검증 및 캡슐화해서 사용할 수 있도록
 */

class Order {
  _priority: string;

  constructor(data) {
    this._priority = data.priority;
  }

  get priorityString() {
    return this._priority.toString();
  }

  set priority(aString) {
    this._priority = new Priority(aString).priority;
  }
}

class Priority {
  _value: string;
  
  constructor(value) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value)) {
      this._value = value;
    } else {
      throw new Error(`<${value}>는 유효하지 않은 우선순위입니다.`);
    }
  }

  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }

  get priority() {
    return this._value;
  }

  get _index() {
    return Priority.legalValues().findIndex((s) => s === this._value);
  }

  higherThan(other) {
    return this._index > other._index;
  }
}

const highPriorityCount = new Order(['high', 'rush']).priority.filter(
  (o) => 'high' === o.priorityString || 'rush' === o.priorityString
).length;