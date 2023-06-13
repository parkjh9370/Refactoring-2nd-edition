/**
 * 매개 변수에 대한 추가적인 처리가 필요할 때,
 * getter(질의 함수)로 해당 값을 가져오게 하면 보기 깔끔해진다.
 */


class Order {
  get finalPrice() {
    const basePrice = this.quantity * this.itemPrice;
    return this.discountedPrice(basePrice);
  }

  get discountLevel() {
    return this.quantity > 100 ? 2 : 1;
  }

  discountPrice(basePrice) {
    switch (this.discountLevel) {
      case 1:
        return basePrice * 0.95;
      case 2:
        return basePrice * 0.9;
    }
  }
}