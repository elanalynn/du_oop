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
    const a: number = julianNumber + 68569
    const b: number = ( 4 * a ) / 146097
    const c: number = a - ( 146097 * b + 3 ) / 4
    const d: number = ( 4000 * ( c + 1 ) ) / 1461001
    const e: number = c - ( 1461 * d ) / 4 + 31
    const f: number = ( 80 * e ) / 2447
    const day: number = e - ( 2447 * f ) / 80
    const g: number = f / 11
    const month: number = f + 2 - ( 12 * g )
    const year: number = 100 * ( b - 49 ) + d + g
    
    return new Date(year, month, day)
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
