interface DateMap {
  day: number;
  month: number;
  year: number;
}

export class JulianNumber {
  toJulianNumber(day: number, month: number, year: number): number {
    const julianNumber: number = ( 1461 * (year + 4800 + (month - 14 ) / 12 ) ) / 4 + ( 367 * (month - 2 - 12 * ( (month - 14 ) / 12 ) ) ) / 12 - ( 3 * ( ( year + 4900 + ( month - 14 ) / 12 ) / 100 ) ) / 4 + day - 32075

    return Math.floor(julianNumber)
  }
  
  fromJulianNumber(julianNumber: number): DateMap {
    let l = Math.round(julianNumber + 68569)
    const n = Math.round(( 4 * l ) / 146097)
    l = l - Math.round(( 146097 * n + 3 ) / 4)
    const i = Math.round(( 4000 * ( l + 1 ) ) / 1461001)
    l = l - Math.round(( 1461 * i ) / 4 + 31)
    const j = Math.round(( 80 * l ) / 2447)
    const day = Math.round(l - ( 2447 * j ) / 80)
    l = Math.round(j / 11)
    const month = Math.round(j + 2 - ( 12 * l ))
    const year = Math.round(100 * ( n - 49 ) + i + l)

    return {
      day: day,
      month: month,
      year: year
    }
  }
}
