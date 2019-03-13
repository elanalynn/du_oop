# Calendar Class (TypeScript)

### Requirements
- [Node](https://nodejs.org/en/download/) 
- [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)

### Running Tests
- cd into directory
- Install dependencies: `yarn` or `yarn install`
- Run tests: `yarn test`

### Assignment Instructions
Each existing persistent domain class will be derived from `DiaryProduct`.
The class definition for DiaryProduct is:

```java
public class DiaryProduct {
  public DiaryProduct ( ClassId classId, ObjectId objectId);
  public ClassId GetClassId();
  public ObjectId GetObjectId();
  private ClassId  mClassId;
  private ObjectId mObjectId;
}
```

Each existing domain class must have the interfaces slightly modified:

```java
public class CalendarEvent extends DiaryProduct {
  public CalendarEvent ( ClassId classId, ObjectId objectId, String label ) {
    super( classId, objectId, label );
    …
  }
}

public class Contact extends DiaryProduct {
  public Contact ( ObjectId objectId, …. ) {
    super( new ClassId( “Contact”), objectId );
      …
  }
}

public class Reminder extends CalendarEvent {
  public Reminder ( ObjectId objectId, String label, Date date, String details) {
    super ( new ClassId( “Reminder”), objectId, label );
  }
}

public class Appointment extends CalendarEvent {
  public Appointment ( ObjectId objectId, String label,  DateTime occurs, int durationMinutes, String details {
    super ( new ClassId( “Appointment”), objectId, label );
    …
  }

  protected Appointment ( ClassId classId, ObjectId objectId, String label,   DateTime occurs, int durationMinutes, String details) {
  super ( classId, objectId, label );
  …
  }
}

 
public void AddRelation( Contact contact );

private Relation1M<Contact> mContacts;

}}}

 

public class PeriodicAppointment extends Appointment {
  public PeriodicAppointment ( ObjectId objectId, String label, DateTime firstOccurs, int durationMinutes, DateTime notToExceedDateTime, int periodHours, String details) {
    super ( new ClassId( “PeriodicAppointment”), objectId, label );
  }
  …
}
```
