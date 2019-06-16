// eslint-disable
// this is an auto generated file. This will be overwritten

export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
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
export const listEvents = `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      startdate
      enddate
      hours
      attendees {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getAttendee = `query GetAttendee($id: ID!) {
  getAttendee(id: $id) {
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
export const listAttendees = `query ListAttendees(
  $filter: ModelAttendeeFilterInput
  $limit: Int
  $nextToken: String
) {
  listAttendees(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstname
      lastname
      events {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getAttendance = `query GetAttendance($id: ID!) {
  getAttendance(id: $id) {
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
export const listAttendances = `query ListAttendances(
  $filter: ModelAttendanceFilterInput
  $limit: Int
  $nextToken: String
) {
  listAttendances(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      event {
        id
        name
        startdate
        enddate
        hours
      }
      Attendee {
        id
        firstname
        lastname
      }
      hours
    }
    nextToken
  }
}
`;
