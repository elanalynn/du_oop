import { Date } from './Date'
import { Comparable } from './interfaces/Comparable'
import { Month } from './enums/Month'

export class DateTime implements Comparable<Date> {
  private date: Date
  private hours: number
  private minutes: number

  constructor(date: Date = new Date(), hours: Month = 0, minutes: number = 0) {
    this.date = date
    this.hours = hours
    this.minutes = minutes
  }

  public getDate(): Date {
    return this.date
  }

  public setDate(date:Date): void {
    this.date = date
  }

  public getHours(): number {
    return this.hours
  }

  public setHours(hours: number): void {
    this.hours = hours
  }

  public getMinutes(): number {
    return this.minutes
  }

  public setMinutes(minutes: number): void {
    this.minutes = minutes
  }

  public compareTo(dateTime: DateTime ): number {
    if (DateTime.dateToMinutes(dateTime) > DateTime.dateToMinutes(this)) return 1
    if (DateTime.dateToMinutes(dateTime) === DateTime.dateToMinutes(this)) return 0
    if (DateTime.dateToMinutes(dateTime) < DateTime.dateToMinutes(this)) return -1
  }

  // Inclusive
  public isBetween(start: DateTime, end: DateTime): boolean {
    if (DateTime.dateToMinutes(start) > DateTime.dateToMinutes(end)) throw new Error('start cannot be later than end')
    if (DateTime.dateToMinutes(start) <= DateTime.dateToMinutes(this) && DateTime.dateToMinutes(end) >= DateTime.dateToMinutes(this)) {
      return true
    }
    else return false
  }

  public addTime(hours: number, minutes: number): void {
    this.hours = this.hours + hours
    this.minutes = this.minutes + minutes
  }

  static dateToMinutes(dateTime: DateTime): string {
    return `
      ${dateTime.getDate().getYear()}
      ${dateTime.getDate().getMonth()}
      ${dateTime.getDate().getDay()}
      ${dateTime.getHours()}
      ${dateTime.getMinutes()}
    `
  }

  static minutesToDate(minutes: number): DateTime {
    console.log(minutes % 60)
    return new DateTime()
  }
}
