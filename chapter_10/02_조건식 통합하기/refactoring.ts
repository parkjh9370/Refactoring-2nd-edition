const anEmployee = {
  onVacation: 10,
  seniority: 60,
}

function disabilityAmount(anEmployee) {
  if (isNotEligibleForDisability()) {
    return 0;
  }

  function isNotEligibleForDisability() {
    return anEmployee.seniority < 2 || anEmployee.monthsDisabled > 12 || anEmployee.isPartTime;
  }
}

function factor() {
  if (anEmployee.onVacation && anEmployee.seniority > 10) {
    return 1;
  }
  return 0.5;
}