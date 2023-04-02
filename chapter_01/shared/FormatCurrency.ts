export class FormatCurrency {
  static KRWToUSDCent(won: any): string {
    return new Intl.NumberFormat('en-US',
      {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
      }).format(won / 100)
  }
}