export abstract class CalendarEvent {
  private label: string

  constructor(label: string) {
    this.label = label
  }
  
  abstract isRecurring(): boolean
}
