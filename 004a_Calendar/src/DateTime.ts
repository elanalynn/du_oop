import { Date } from './Date'
import { Comparable } from './interfaces/Comparable'

export class DateTime implements Comparable<Date> {
  private date: Date
  private hours: number
  private minutes: number

  constructor(date: Date = new Date(), hours: number = 0, minutes: number = 0) {
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
    if (DateTime.dateTimeToStringNumber(dateTime) > DateTime.dateTimeToStringNumber(this)) return 1
    if (DateTime.dateTimeToStringNumber(dateTime) === DateTime.dateTimeToStringNumber(this)) return 0
    if (DateTime.dateTimeToStringNumber(dateTime) < DateTime.dateTimeToStringNumber(this)) return -1
  }

  // Inclusive
  public isBetween(start: DateTime, end: DateTime): boolean {
    if (DateTime.dateTimeToStringNumber(start) > DateTime.dateTimeToStringNumber(end)) throw new Error('start cannot be later than end')
    return DateTime.dateTimeToStringNumber(start) <= DateTime.dateTimeToStringNumber(this) && DateTime.dateTimeToStringNumber(end) >= DateTime.dateTimeToStringNumber(this)
  }

  public addTime(hours: number, minutes: number): void {
    this.hours = this.hours + hours
    this.minutes = this.minutes + minutes
  }

  static stringNumberToDateTime(dateString: string): DateTime {
    const year = Number.parseInt(dateString.slice(0, 4))
    const month = Number.parseInt(dateString.slice(4, 6))
    const day = Number.parseInt(dateString.slice(6, 8))
    const hour = Number.parseInt(dateString.slice(8, 10))
    const minute = Number.parseInt(dateString.slice(10, 12))
    const date = new Date (day, month, year)
    return new DateTime(date, hour, minute)
  }

  static dateTimeToStringNumber(dateTime: DateTime): string {
    const dateString = `${dateTime.getDate().getYear()}${dateTime.getDate().getMonth()}${dateTime.getDate().getDay()}${dateTime.getHours()}${dateTime.getMinutes()}`
    return dateString
  }
}
