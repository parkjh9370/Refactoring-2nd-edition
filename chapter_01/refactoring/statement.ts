import { InVoices, Plays, Performance, PlayGenre, performanceCalculatorParameter, PerformanceCalculator } from './../shared/interface';
import { FormatCurrency } from '../shared/FormatCurrency';

const caculateAmountByGenre = (plays: Plays, performance: Performance): number => {
  let amount = 0;
  const play = plays[performance.playID]
  const audienceCount = performance.audience;

  switch (play.type) {
    case PlayGenre.tragedy: {
      amount = 40000;
      if (audienceCount > 30) {
        amount += 1000 * (audienceCount - 30);
      }
      break;
    }
    case PlayGenre.comedy: {
      amount = 30000;
      if (audienceCount > 20) {
        amount += 10000 + 500 * (audienceCount - 20);
      }
      amount += 300 * audienceCount;
      break;
    }
  }

  return amount
}

const caculateVolumeCreditAmountByGenre = (plays: Plays, performance: Performance): number => {
  const play = plays[performance.playID];
  const audienceCount = performance.audience;

  let volumeCrediteAmount = Math.max(audienceCount - 30, 0);
  switch (play.type) {
    case PlayGenre.comedy: {
      volumeCrediteAmount += Math.floor(audienceCount / 5);
      break;
    }
    case PlayGenre.tragedy: {
      break;
    }
  }

  return volumeCrediteAmount;
}

export function createStatement(invoice: InVoices, plays: Plays) {
  let totalAmount = 0;
  let volumeCreditTotalAmount = 0;

  const result: string[] = [];
  result.push(`고객명: ${invoice.customer}\n`)

  for (const performance of invoice.performances) {
    const playName = plays[performance.playID];
    const amount = caculateAmountByGenre(plays, performance);
    
    result.push(`${playName.name}: ${FormatCurrency.KRWToUSD(amount)} ${performance.audience}석\n`)

    totalAmount += amount;
    volumeCreditTotalAmount += caculateVolumeCreditAmountByGenre(plays, performance);
  }

  result.push(`총액: ${FormatCurrency.KRWToUSD(totalAmount)}\n`)
  result.push(`적립 포인트: ${FormatCurrency.KRWToUSD(volumeCreditTotalAmount)}점\n`)

  return result.join('');
}

export const statement = (invoices: InVoices, plays: Plays) => {
  return createStatement(invoices, plays);
}