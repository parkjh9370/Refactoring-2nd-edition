const retrievePricingPlan = () => {
  return { unit: 'unit' };
}

const retrieveOrder = () => {
  return;
}

const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retrieveOrder();
let charge: number;