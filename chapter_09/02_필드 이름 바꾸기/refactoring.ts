/**
 * 필드 이름 name -> title로 변경
 * -> 필드 이름을 좀 더 명시적으로 바꾸고, 그 과정에서 캡슐화된 변수 및 get, set method 테스트 
 */

interface Organizations {
  title: string;
  country: string;
}

class Organization {
  _title: string;
  _country: string;

  constructor(organization: Organizations) {
    this._title = organization.title;
    this._country = organization.country;
  }

  get title() {
    return this._title;
  }
  set title(aString) {
    this._title = aString;
  }
  get country() {
    return this._country;
  }
  set country(aCountryCode) {
    this._country = aCountryCode;
  }
}

const organization = new Organization({ title: '애크미 구스베리', country: 'GB' });