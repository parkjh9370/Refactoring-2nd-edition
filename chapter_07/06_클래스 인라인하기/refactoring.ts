/**
 * 독립적인 클래스로 필요성이 없다면 1개 클래스에서 그 역할을 모두 수행할 수 있게 하기
 */

class Shipment {
  _trackingInformation: string;
  _shippingCompany: string;
  _trackingNumber: string;

  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }

  get trackingInformation() {
    return this._trackingInformation;
  }

  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }

  get shippingCompany() {
    return this._shippingCompany;
  }

  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }

  get trackingNumber() {
    return this._trackingNumber;
  }

  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }
}
