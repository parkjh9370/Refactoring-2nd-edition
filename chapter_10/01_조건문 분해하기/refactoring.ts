/**
 * 복잡한 조건문 분해
 */
import dayjs from 'dayjs';

const aDate = dayjs(new Date());
const quantity = 30;
const plan = {
  summerStart: dayjs("2023-06-01"),
  summerEnd: dayjs("2023-08-30"),
  summerRate: 3,
  regularRate: 1,
  regularServiceCharge: 1,
}

if (summer()) {
  charge = summerCharge();
} else {
  charge = regularCharge();
}

function summer() {
  return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}

function summerCharge() {
  return quantity * plan.summerRate;
}

function regularCharge() {
  return quantity * plan.regularRate + plan.regularServiceCharge;
}

// charge = summer() ? summerCharge() : regularCharge();
