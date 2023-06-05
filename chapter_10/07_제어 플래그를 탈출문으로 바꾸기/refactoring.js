/**
 * 값에 대해 조건부 로직이 필요하거나 검증이 필요할 때
 * 
 * 조건에 부합할 때 return을 통해 해당 반복문을 종료하거나
 * 자바스크립트 메서드를 활용해 이를 처리할 수 있다.
 */

function checkForMiscreants(people) {
  for (const p of people) {
    if (!found) {
      if (p === '조커') {
        sendAlert();
        return;
      }
      if (p === '사루만') {
        sendAlert();
        return;
      }
    }
  }
}

// Or

function checkForMiscreantsAlt(people) {
  if (people.some((p) => ['조커', '사루만'].includes(p))) sendAlert();
}

checkForMiscreants(people);
