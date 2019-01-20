interface YearMap {
  [key:string]: number
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
  jul: number;
  aug: number;
  sep: number;
  oct: number;
  nov: number;
  dec: number;
}

export default class JulianNumber {
  toJulianNumber(day: number, monthName: string, year: number): number {
    const month: number = this.monthNum(monthName)

    const julianNumber: number = ( 1461 * (year + 4800 + (month - 14 ) / 12 ) ) / 4 + ( 367 * (month - 2 - 12 * ( (month - 14 ) / 12 ) ) ) / 12 - ( 3 * ( ( year + 4900 + ( month - 14 ) / 12 ) / 100 ) ) / 4 + day - 32075

    return Math.round(julianNumber)
  }
  
  fromJulianNumber(julianNumber: number): Date {
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

  private monthNum(month: string): number {
    const months: YearMap = {
      jan: 1,
      feb: 2,
      mar: 3,
      apr: 4,
      may: 5,
      jun: 6,
      jul: 7,
      aug: 8,
      sep: 9,
      oct: 10,
      nov: 11,
      dec: 12
    }
    
    return months[month]
  }
}
