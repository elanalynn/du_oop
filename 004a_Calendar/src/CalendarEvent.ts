import { DateTime } from './DateTime'

export abstract class CalendarEvent {
  private label: string

  constructor(label: string) {
    this.label = label
  }
  
  abstract isRecurring(): boolean

  abstract isOccuringOn( date: DateTime ): boolean
}
