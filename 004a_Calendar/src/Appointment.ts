import { CalendarEvent } from './CalendarEvent'
import { DateTime } from './DateTime';

export class Appointment extends CalendarEvent {
  private occurs: DateTime
  private duration: number
  private details: string

  constructor(label, occurs, duration, details) {
    super(label)

    this.occurs = occurs
    this.duration = duration
    this.details = details
  }

  public isRecurring(): boolean {
    return true
  }
}
