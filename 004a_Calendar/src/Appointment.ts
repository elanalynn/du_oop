import { CalendarEvent } from './CalendarEvent'
import { DateTime } from './DateTime'

export class Appointment extends CalendarEvent {
  private startTime: DateTime
  private endTime: DateTime
  private duration: number
  private details: string

  constructor(label: string, startTime: DateTime, duration: number, details: string) {
    super(label)

    this.startTime = startTime
    this.duration = duration
    this.details = details
    this.endTime = DateTime.minutesToDateTime(DateTime.dateTimeToMinutes(this.startTime) + this.duration)
  }

  public isRecurring(): boolean {
    return true
  }

  public IsOccuringOn(dateTime: DateTime): boolean {
    return dateTime.isBetween(this.startTime, this.endTime)
  }
}
