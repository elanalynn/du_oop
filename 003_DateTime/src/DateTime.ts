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

  public compareTo(dateTime: DateTime ): number {
    if(dateTime.getDate() > this.getDate()) return 1
    if(dateTime.getHours() > this.getHours()) return 1
    if(dateTime.getMinutes() > this.getMinutes()) return 1

    if(dateTime.getDate() === this.getDate()) return 0
    if(dateTime.getHours() === this.getHours()) return 0
    if(dateTime.getMinutes() === this.getMinutes()) return 0 

    if(dateTime.getDate() < this.getDate()) return -1
    if(dateTime.getHours() < this.getHours()) return -1
    if(dateTime.getMinutes() < this.getMinutes()) return -1 
  }

  // Inclusive
  public isBetween(start: DateTime, end: DateTime): boolean {
    console.log(this._dateToNumber(start), this._dateToNumber(end))

    if (start.getDate() > end.getDate()) throw new Error('start date cannot be later than end date')
    return true
  }

  public addTime(hours: number, minutes: number): void {
    this.hours = this.hours + hours
    this.minutes = this.minutes + minutes
  }

  private _dateToNumber(date: Date): string {
    console.log(`${date.getYear()}${date.getMonth()}${date.getDay()}`)
    return `${date.getYear()}${date.getMonth()}${date.getDay()}`
  }
}
