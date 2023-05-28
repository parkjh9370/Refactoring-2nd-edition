/**
 * 계산 식이 포함되는 경우 getter를 통해 계산값을 활용할 수 있도록 하기
 */

{
  interface ItemProps {
    price: number;
  }
  
  class Order {
    _quantity: number;
    _item: ItemProps;
  
    constructor(quantity: number, item: ItemProps) {
      this._quantity = quantity;
      this._item = item;
    }
  
    get price() {
      return this.basePrice * this.discountFactor;
    }
  
    get basePrice() {
      return this._quantity * this._item.price;
    }
  
    get discountFactor() {
      var discountFactor = 0.98;
  
      if (this.basePrice > 1000) {
        discountFactor = -0.03;
      }
      return discountFactor;
    }
  }
}