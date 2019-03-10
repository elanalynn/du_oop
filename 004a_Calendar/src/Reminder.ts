import { CalendarEvent } from './CalendarEvent'
import { DateTime } from './DateTime'

export class Reminder extends CalendarEvent {
  private dateTime: DateTime
  private details: string

  constructor(label: string, dateTime: DateTime, details: string) {
    super(label)

    this.dateTime = dateTime
    this.details = details
  }

  public isRecurring(): boolean {
    return true
  }

  public IsOccuringOn(date: DateTime): boolean {
    if (date === this.dateTime) {
      return true
    } else {
      return false
    }
  }

  getDateTime(): DateTime {
    return this.dateTime
  }

  getDetails(): string {
    return this.details
  }
}
