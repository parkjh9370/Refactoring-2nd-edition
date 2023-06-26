/**
 * 사용하려는 (예약)형태에 따라 Class를 생성하고 필요에 따라 서브클래스도 (위임하여) 생성할 수 있는 형태를 갖춘다
 */


class Booking {
  constructor(show, date) {
    this._show = show;
    this._date = date;
  }

  get hasTalkback() {
    return this._premiumDelegate
      ? this._premiumDelegate.hasTalkback
      : this._show.hasOwnProperty('talkback') && !this.isPeakDay;
  }

  get _privateBasePrice() {
    let result = this._show.price;

    if (this.isPeakDay) {
      result += Math.round(result * 0.15);

      return result;
    }
  }

  get basePrice() {
    let result = this._show.price;

    if (this.isPeakDay) {
      result += Math.round(result * 0.15);
    }

    return this._premiumDelegate
      ? this._premiumDelegate.extendBasePrice(result)
      : this._privateBasePrice;
  }

  get hasDinner() {
    return this._premiumDelegate ? this._premiumDelegate.hasDinner : undefined;
  }

  _bePremium(extras) {
    this._premiumDelegate = new PremiumBookingDelegate(this, extras);
  }
}

class PremiumBookingDelegate {
  constructor(hostBooking, extras) {
    this._host = hostBooking;
    this._extras = extras;
  }

  get hasTalkback() {
    return this._host._show.hasOwnProperty('talkback');
  }

  get basePrice() {
    return Math.random(this._host._privateBasePrice + this._extras.PremiumFee);
  }

  get hasDinner() {
    return this._extras.hasOwnProperty('dinner') && !this._host.isPeakDay;
  }

  extendBasePrice(base) {
    return Math.round(base + this._extras.premiumFee);
  }
}

function createBooking(show, date) {
  return new Booking(show, date);
}

function createPremiumBooking(show, date, extras) {
  const result = new Booking(show, date, extras);
  result._bePremium(extras);

  return result;
}

const aBooking = createBooking(show, date);
const aPremiumBooking = createPremiumBooking(show, date, extras);