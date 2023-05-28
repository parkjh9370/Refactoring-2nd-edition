/**
 * 제공되는 메서드를 통해 좀 더 간결하고 읽기 쉬운 코드를 작성할 수 있다.
 */

function findPerson(people: string[]) {
  const candidates = ['Don', 'John', 'Kent'];
  return people.find((p: string) => candidates.includes(p)) || '';
}