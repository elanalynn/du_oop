import { CalendarEvent } from './CalendarEvent'
import { ClassId } from './ClassId'
import { ObjectId } from './ObjectId'
import { Date } from './Date'
import { DateTime } from './DateTime'

export class Appointment extends CalendarEvent {
  private occursFirst: DateTime
  private endTime: DateTime
  private duration: number
  private details: string
  private recurring: boolean

  constructor(
    classId: ClassId,
    objectId: ObjectId,
    label: string,
    occursFirst: DateTime,
    duration: number,
    details: string,
    recurring: boolean
  ) {
    super(classId, objectId, label)

    this.occursFirst = occursFirst
    this.duration = duration
    this.details = details
    this.endTime = this.calculateEndTime(this.occursFirst, this.duration)
    this.recurring = recurring
  }

  public isRecurring(): boolean {
    return this.recurring
  }

  public isOccuringOn(dateTime: DateTime): boolean {
    return dateTime.isBetween(this.occursFirst, this.endTime)
  }

  private calculateEndTime(occursFirst, duration): DateTime {
    const dateString = DateTime.dateTimeToStringNumber(this.occursFirst)

    const minutes = Number.parseInt(dateString.slice(-2) + this.duration)

    DateTime.stringNumberToDateTime(DateTime.dateTimeToStringNumber(this.occursFirst) + this.duration)

    return new DateTime(new Date(), 2, minutes)
  }

  public getClassId(): ClassId {
    return super.getClassId()
  }

  public getObjectId(): ObjectId {
    return super.getObjectId()
  }

  public getLabel(): string {
    return super.getLabel()
  }

  public getOccursFirst(): DateTime {
    return this.occursFirst
  }

  public getDurationMinutes(): number {
    return this.duration
  }
  
  public getDetails(): string {
    return this.details
  }
}
