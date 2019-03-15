import { Appointment } from './Appointment'
import { ClassId } from './ClassId'
import { ObjectId } from './ObjectId'
import { DateTime } from './DateTime'

export class PeriodicAppointment extends Appointment {
  private notToExceedDateTime: DateTime
  private periodicHours: number

  constructor(
    objectId: ObjectId,
    label: string,
    occursFirst: DateTime,
    durationMinutes: number,
    notToExceedDateTime: DateTime,
    periodicHours: number,
    details: string,
    recurring: boolean
   ) {
    super(new ClassId('PeriodicAppointment'), objectId, label, occursFirst, durationMinutes, details, recurring)

    this.notToExceedDateTime = notToExceedDateTime
    this.periodicHours = periodicHours
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
    return super.getOccursFirst()
  }

  public getDurationMinutes(): number {
    return super.getDurationMinutes()
  }

  public getNotToExceedDateTime(): DateTime {
    return this.notToExceedDateTime
  }

  public getPeriodicHours(): number {
    return this.periodicHours
  }

  public getDetails(): string {
    return super.getDetails()
  }
}