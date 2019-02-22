import { CalendarEvent } from './CalendarEvent'

export abstract class Appointment extends CalendarEvent {
  constructor() {
    super(label)
  }

  public getDate(): Date {
    return this.date
  }

  public setDate(date:Date): void {
    this.date = date
  }

}
