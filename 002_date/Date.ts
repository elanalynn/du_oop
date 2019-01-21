import JulianNumber from './JulianNumber'

export default class Date {
  private day: number
  private month: number
  private year: number


  constructor(day: number, month: number, year: number) {
    this.day = day
    this.month = month
    this.year = year
  }

  getDay(): number {
    return this.day
  }

  setDay(day: number): void {
    this.validateDay(day, this.month, this.year) ? this.day = day : null
  }

  getMonth(): number {
    return this.month
  }

  setMonth(month: number): void {
    (month > 0 && month <= 12) ? this.month = month : null
  }

  getYear(): number {
    return this.year
  }

  setYear(year: number): void {
    this.year = year
  }

  private julianNumber(day: number, month: number, year: number): number {
    const julianNumber = new JulianNumber()
    return julianNumber.toJulianNumber(day, month, year)
  }

  private validateDay(day, month, year) {
    return ([1,3,5,7,8,10,12].includes(this.month) && (day <= 31))
      || ([4,6,9,11].includes(this.month) && (day <= 30))
      || ((this.month === 2) && !(year % 4) && (day <= 29))
      || ((this.month === 2) && (day <= 28) && (year % 4)) ? true : false
  }
}
