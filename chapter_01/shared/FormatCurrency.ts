export class FormatCurrency {
  static KRWToUSD(won: number): string {
    return new Intl.NumberFormat('en-US',
      {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
      }).format(won / 100)
  }
}