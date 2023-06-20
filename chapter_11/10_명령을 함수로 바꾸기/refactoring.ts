/**
 * 크게 복잡하지 않고, 역할이 크지 않다면 명령 함수가 아닌 일반 함수로 바꿔준다.
 */
{
  interface ICustomer {
    baseRate: number;
  }
  
  interface IProvider {
    connectionCharge: number;
  }
  
  function charges(customer: ICustomer, usage: number, provider: IProvider) {
    const baseCharge = customer.baseRate * usage;
    return baseCharge + provider.connectionCharge;
  }
  
  const customer = {
    baseRate: 0.5
  }
  
  const usage = 2;
  
  const provider = {
    connectionCharge: 1,
  }
  
  const monthCharge = charges(customer, usage, provider);
}
