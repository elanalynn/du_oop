import { CalendarEvent } from './CalendarEvent'
import { DateTime } from './DateTime'

export class Reminder extends CalendarEvent {
  private dateTime: DateTime
  private details: string
  private recurring: boolean

  constructor(label: string, dateTime: DateTime, details: string, recurring: boolean) {
    super(label)

    this.dateTime = dateTime
    this.details = details
    this.recurring = recurring
  }

  public getDateTime(): DateTime {
    return this.dateTime
  }

  public getDetails(): string {
    return this.details
  }

  public isRecurring(): boolean {
    return this.recurring
  }

  public isOccuringOn(date: DateTime): boolean {
    return date === this.dateTime
  }
}
