/**
 * 실행 함수의 경우 명시적으로 execute로 동작될 수 있도록 한다.
 * 그 외 서브 함수를 통해 테스트, 검증 등의 역할을 할 수 있다.
 */

function score(candidate: ICandidate, medicalExam: IMedicalExam, scoringGuide: string) {
  return new Scorer(candidate, medicalExam, scoringGuide).execute;
}

interface ICandidate {
  originState: string;
}

interface IMedicalExam {
  isSmoker: boolean
}

class Scorer {
  _candidate: ICandidate;
  _medicalExam: IMedicalExam;
  _result: number;
  _healthLevel: number;
  _hightMedicalRiskFlag: boolean;
  _certificationGrade: string;

  constructor(candidate: ICandidate, medicalExam: IMedicalExam, scoringGuide: string) {
    this._candidate = candidate;
    this._medicalExam = medicalExam;
  }

  execute() {
    this._result = 0;
    this._healthLevel = 0;
    this._hightMedicalRiskFlag = false;

    this.scoreSmoking();
    this._certificationGrade = 'regular';

    this._result -= Math.max(this._healthLevel - 5, 0);
    return this._result;
  }

  scoreSmoking() {
    if (this._medicalExam.isSmoker) {
      this._healthLevel += 10;
      this._hightMedicalRiskFlag = true;
    }
  }
}