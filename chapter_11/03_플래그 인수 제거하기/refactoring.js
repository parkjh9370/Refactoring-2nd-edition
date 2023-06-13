/**
 * 플래그 인수: 호출되는 함수가 실행할 로직을 호출하는 쪽에서 선택하기 위해 전달하는 인수
 * => 어떤 플래그 인자를 전달해야, 내가 사용하고 싶은 내부 로직을 탈지에 대해
 * 내부 구현을 모두 파악해야 해당 함수를 사용할 수 있음
 * 
 * 플래그 인수를 사용하는 것은 지양하자
 */

// 클라이언트1
aShipment.deliveryDate = rushDeliveryDate(anOrder);

// 클라이언트2
aShipment.deliveryDate = regularDeliveryDate(anOrder);

function rushDeliveryDate(anOrder) {
  let deliveryTime;
  if (['MA', 'CT'].includes(anOrder.deliveryState)) deliveryTime = 1;
  else if (['NY', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 2;
  else deliveryTime = 3;

  return anOrder.placedOn.plusDays(1 + deliveryTime);
}

function regularDeliveryDate(anOrder) {
  let deliveryTime;
  if (['MA', 'CT', 'NY'].includes(anOrder.deliveryState)) deliveryTime = 2;
  else if (['ME', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 3;
  else deliveryTime = 4;
  return anOrder.placedOn.plusDays(2 + deliveryTime);
}

// Or

function rushDeliveryDate(anOrder) {
  return deliveryDate(anOrder, true);
}
function regularDeliveryDate(anOrder) {
  return deliveryDate(anOrder, false);
}