import { SystemDate } from './SystemDate'
import { Date } from './Date'
import { Comparable } from './interfaces/Comparable'
import { Month } from './enums/Month'

export class DateTime implements Comparable<Date> {
  private date: Date
  private hours: number
  private minutes: number

  constructor(date: Date, hours: Month = 0, minutes: number = 0) {
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

  public compareTo(dateTime: DateTime ): boolean {
    return true
  }

  // Inclusive
  public isBetween(start: DateTime, end: DateTime): boolean {
    return true
  }

  public addTime(hours: number, minutes: number): void {

  }
}
