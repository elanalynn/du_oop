// Java Example
// public class PeriodicAppointment extends Appointment {
//   public PeriodicAppointment (
//     ObjectId objectId,
//     String label,
//     DateTime firstOccurs,
//     int durationMinutes,
//     DateTime notToExceedDateTime,
//     int periodHours,
//     String details
//   ) {
//     super ( new ClassId( “PeriodicAppointment”), objectId, label );
//   }
//   …
// }

import { Appointment } from './Appointment'
import { ClassId } from './ClassId'
import { ObjectId } from './ObjectId'
import { DateTime } from './DateTime'

export class PeriodicAppointment extends Appointment {
  constructor(
    classId: ClassId,
    objectId: ObjectId,
    label: string,
    occursFirst: DateTime,
    durationMinutes: number,
    notToExceedDateTime: DateTime,
    periodicHours: number,
    details: string,
    recurring: boolean
   ) {
     super(classId, objectId, label, occursFirst, durationMinutes, details, recurring)
   }
}