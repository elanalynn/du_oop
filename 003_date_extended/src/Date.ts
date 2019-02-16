import { SystemDate } from './SystemDate'
import JulianNumber from './JulianNumber'

interface Comparable<T> {
  compareTo: any
} 

export enum Month {
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

export class Date implements Comparable<Date> {
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
    this._validateDay(day, this.month, this.year) ? this.day = day : null
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

  public getDayOfWeek(): string {
    const dayOfWeekNumber = (this._julianNumber() + 1 ) % 7
    return DayOfWeek[dayOfWeekNumber]
  }

  public compareTo(date: Date): number {
    const dateInMs = this._toMs(date)
    const systemDate = new SystemDate()
    const todayInMs = systemDate.now()

    if (dateInMs > todayInMs) return 1
    if (dateInMs < todayInMs) return -1
    return 0
  }

  public addDays(days: number): void {
    this.day += days
  }

  public subtractDays(days: number): void {
    this.day -= days
  }

  public isBetween(start: Date, end: Date): boolean {
    const invalidRange = this._toMs(start) >= this._toMs(end)
    if (invalidRange) throw new Error('Invalid Range')

    const afterStart = this._toMs(start) <= this._toMs(this)
    const beforeEnd = this._toMs(end) >= this._toMs(this)

    return afterStart && beforeEnd
  }

  static isLeapYear(year: number): boolean {
    return !(year % 4) && (year % 100) || !(year % 4) && !(year % 400) ? true : false
  }
   
  public getLastDayOfMonth(month: number, year: number): number {
    if (month === 2) {
      if (Date.isLeapYear(year)) return 29
      else return 28
    }
    if ([1,3,5,7,8,10,12].includes(month)) return 31
    if ([4,6,9,11].includes(month)) return 30
  }
  
  private _julianNumber(): number {
    const julianNumber = new JulianNumber()
    return julianNumber.toJulianNumber(this.day, this.month, this.year)
  }

  private _validateDay(day: number, month: Month, year: number) {
    return ([1,3,5,7,8,10,12].includes(this.month) && (day <= 31))
      || ([4,6,9,11].includes(this.month) && (day <= 30))
      || ((this.month === 2) && !(year % 4) && (day <= 29))
      || ((this.month === 2) && (day <= 28) && (year % 4)) ? true : false
  }

  private _toMs(date: Date): number {
    const msInADay = 86400
    const days = ((date.year - 1970) * 365) + (date.month * 30.4166) + date.day
    const ms = (days * msInADay) * 1000
    return ms
  }
}
