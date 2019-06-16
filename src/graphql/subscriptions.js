// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateEvent = `subscription OnCreateEvent {
  onCreateEvent {
    id
    name
    startdate
    enddate
    hours
    attendees {
      items {
        id
        hours
      }
      nextToken
    }
  }
}
`;
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
    id
    name
    startdate
    enddate
    hours
    attendees {
      items {
        id
        hours
      }
      nextToken
    }
  }
}
`;
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
    id
    name
    startdate
    enddate
    hours
    attendees {
      items {
        id
        hours
      }
      nextToken
    }
  }
}
`;
export const onCreateAttendee = `subscription OnCreateAttendee {
  onCreateAttendee {
    id
    firstname
    lastname
    events {
      items {
        id
        hours
      }
      nextToken
    }
  }
}
`;
export const onUpdateAttendee = `subscription OnUpdateAttendee {
  onUpdateAttendee {
    id
    firstname
    lastname
    events {
      items {
        id
        hours
      }
      nextToken
    }
  }
}
`;
export const onDeleteAttendee = `subscription OnDeleteAttendee {
  onDeleteAttendee {
    id
    firstname
    lastname
    events {
      items {
        id
        hours
      }
      nextToken
    }
  }
}
`;
export const onCreateAttendance = `subscription OnCreateAttendance {
  onCreateAttendance {
    id
    event {
      id
      name
      startdate
      enddate
      hours
      attendees {
        nextToken
      }
    }
    Attendee {
      id
      firstname
      lastname
      events {
        nextToken
      }
    }
    hours
  }
}
`;
export const onUpdateAttendance = `subscription OnUpdateAttendance {
  onUpdateAttendance {
    id
    event {
      id
      name
      startdate
      enddate
      hours
      attendees {
        nextToken
      }
    }
    Attendee {
      id
      firstname
      lastname
      events {
        nextToken
      }
    }
    hours
  }
}
`;
export const onDeleteAttendance = `subscription OnDeleteAttendance {
  onDeleteAttendance {
    id
    event {
      id
      name
      startdate
      enddate
      hours
      attendees {
        nextToken
      }
    }
    Attendee {
      id
      firstname
      lastname
      events {
        nextToken
      }
    }
    hours
  }
}
`;
