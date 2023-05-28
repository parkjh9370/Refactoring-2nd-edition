interface OrganizationProps {
  name: string;
  country: string;
}

class Organizations {
  _name: string;
  _country: string;

  constructor(data: OrganizationProps) {
    this._name = data.name;
    this._country = data.country;
  }

  set setName(aString) {
    this._name = aString;
  }

  get getName() {
    return this._name;
  }

  set setCountry(aCountryCode) {
    this._country = aCountryCode;
  }

  get getCountry() {
    return this._country;
  }
}

class CustomerData {
  _data: any

  constructor(data) {
    this._data = data;
  }

  setUsage(customerId, year, month, amount) {
    this._data[customerId].usages[year][month] = amount;
  }

  get rawData() {
    return this._data.cloneDeep(this._data);
  }

  usage(customerId, year, month) {
    return this._data[customerId].usages[year][month];
  }
}

const organizations = new Organizations({ name: '에크미 구스베리', country: 'GB' })

function getOrganization() {
  return organizations;
}

let result: string;
result += `<h1>${getOrganization().getName}</h1>`;
getOrganization().setName = 'newName';

