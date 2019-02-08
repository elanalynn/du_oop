import JulianNumber from './JulianNumber'

interface Comparable<T> {
  compareTo: any
} 

enum Month {
  JANUARY,
  FEBRUARY,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPTEMBER,
  OCTOBER,
  NOVEMBER,
  DECEMBER,
}

enum DayOfWeek {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY
}

export default class Date implements Comparable<Date> {
  private day: number
  private month: Month
  private year: number
  private dayOfWeek: DayOfWeek

  constructor(day: number, month: Month, year: number) {
    this.day = day
    this.month = month
    this.year = year
  }

  public getDay(): number {
    return this.day
  }

  public setDay(day: number): void {
    this.validateDay(day, this.month, this.year) ? this.day = day : null
  }

  public getMonth(): Month {
    return this.month
  }

  public setMonth(month: Month): void {
    (month > 0 && month <= 12) ? this.month = month : null
  }

  public getYear(): number {
    return this.year
  }

  public setYear(year: number): void {
    this.year = year
  }

  public getDayOfWeek(): DayOfWeek {
    const dayOfWeek = (this._julianNumber() + 1 ) % 7
    return this.dayOfWeek
  }

  public setDayOfWeek(dayOfWeek): void {
    this.dayOfWeek = dayOfWeek
  }

  public compareTo(date: Date): DayOfWeek {
    return this.dayOfWeek
  }

  public addDays(days: number): void {
    this.day + days
  }

  public subtractDays(days: number): void {
    this.day - days
  }
  // Inclusive
  public isBetween(start: Date, end: Date): boolean {
    return true
  }

  static isLeapYear(year: number): boolean {
    return !(year % 4) && (year % 100) || !(year % 4) && !(year % 400) ? true : false
  }
   
  public getLastDayOfMonth(month: Month, year: number ): number {
    return 1
  }
  
  private _julianNumber(): number {
    const julianNumber = new JulianNumber()
    return julianNumber.toJulianNumber(this.day, this.month, this.year)
  }

  private validateDay(day: number, month: Month, year: number) {
    return true
  //   return ([1,3,5,7,8,10,12].includes(this.month) && (day <= 31))
  //     || ([4,6,9,11].includes(this.month) && (day <= 30))
  //     || ((this.month === 2) && !(year % 4) && (day <= 29))
  //     || ((this.month === 2) && (day <= 28) && (year % 4)) ? true : false
  }
}
