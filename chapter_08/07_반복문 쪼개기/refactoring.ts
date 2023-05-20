const people = [
  {
    name: '직원1',
    age: 31,
    salary: 31,
  },
  {
    name: '직원2',
    age: 30,
    salary: 30,
  },
  {
    name: '직원3',
    age: 29,
    salary: 36,
  },
  {
    name: '직원4',
    age: 29,
    salary: 25,
  },
  {
    name: '직원5',
    age: 29,
    salary: 25,
  },
]

function getTotalSalaryOfYoungestAgePeople() {
  return `최연소: ${youngestAge()}, 총급여: ${totalSalary}`;

  function totalSalary() {
    return people.reduce((total, p) => total + p.salary, 0);
  }

  function youngestAge() {
    return Math.min(...people.map((p) => p.age));
  }
}