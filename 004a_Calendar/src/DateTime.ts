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
    if (DateTime.dateTimeToMinutes(dateTime) > DateTime.dateTimeToMinutes(this)) return 1
    if (DateTime.dateTimeToMinutes(dateTime) === DateTime.dateTimeToMinutes(this)) return 0
    if (DateTime.dateTimeToMinutes(dateTime) < DateTime.dateTimeToMinutes(this)) return -1
  }

  // Inclusive
  public isBetween(start: DateTime, end: DateTime): boolean {
    if (DateTime.dateTimeToMinutes(start) > DateTime.dateTimeToMinutes(end)) throw new Error('start cannot be later than end')
    return DateTime.dateTimeToMinutes(start) <= DateTime.dateTimeToMinutes(this) && DateTime.dateTimeToMinutes(end) >= DateTime.dateTimeToMinutes(this)
  }

  public addTime(hours: number, minutes: number): void {
    this.hours = this.hours + hours
    this.minutes = this.minutes + minutes
  }

  static minutesToDateTime(minutes: number): DateTime {
    console.log(, minutes)

    //  {{day, month, year}, hour, minute}
    const days = Math.floor(minutes / 8640)
    const months = days - Math.floor(minutes / 8640)
    const years = 1
    const date = new Date(days, months, years)
    const hoursForDate = Math.floor(minutes / 60)
    const minutesForDate = minutes - days - months - years 
    return new DateTime(date, hoursForDate, minutesForDate)
  }

  static dateTimeToMinutes(dateTime: DateTime): number {
    return Number.parseInt(`
      ${dateTime.getDate().getYear()}
      ${dateTime.getDate().getMonth()}
      ${dateTime.getDate().getDay()}
      ${dateTime.getHours()}
      ${dateTime.getMinutes()}
    `)
  }
}
