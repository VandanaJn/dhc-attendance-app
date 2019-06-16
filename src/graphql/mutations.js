// eslint-disable
// this is an auto generated file. This will be overwritten

export const createEvent = `mutation CreateEvent($input: CreateEventInput!) {
  createEvent(input: $input) {
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
export const updateEvent = `mutation UpdateEvent($input: UpdateEventInput!) {
  updateEvent(input: $input) {
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
export const deleteEvent = `mutation DeleteEvent($input: DeleteEventInput!) {
  deleteEvent(input: $input) {
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
export const createAttendee = `mutation CreateAttendee($input: CreateAttendeeInput!) {
  createAttendee(input: $input) {
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
export const updateAttendee = `mutation UpdateAttendee($input: UpdateAttendeeInput!) {
  updateAttendee(input: $input) {
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
export const deleteAttendee = `mutation DeleteAttendee($input: DeleteAttendeeInput!) {
  deleteAttendee(input: $input) {
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
export const createAttendance = `mutation CreateAttendance($input: CreateAttendanceInput!) {
  createAttendance(input: $input) {
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
export const updateAttendance = `mutation UpdateAttendance($input: UpdateAttendanceInput!) {
  updateAttendance(input: $input) {
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
export const deleteAttendance = `mutation DeleteAttendance($input: DeleteAttendanceInput!) {
  deleteAttendance(input: $input) {
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
