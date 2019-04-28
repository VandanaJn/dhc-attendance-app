import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Navbar from 'react-bootstrap/Navbar'
import NavLink from 'react-bootstrap/NavLink'
import {  Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import Events from './Events'
import Participants from './Participants'



class App extends Component {
  constructor() {
    super()
    this.state = {
      events: [
        { EventId: 1, EventName: "Event1" }, { EventId: 2, EventName: "Event2" },
        { EventId: 3, EventName: "Event3" }, { EventId: 4, EventName: "Event4" },
        { EventId: 5, EventName: "Event5" }, { EventId: 6, EventName: "Event6" },
        { EventId: 7, EventName: "Event7" }, { EventId: 8, EventName: "Event8" },
        { EventId: 9, EventName: "Event9" }, { EventId: 10, EventName: "Event10" },
        { EventId: 11, EventName: "Event11" }, { EventId: 12, EventName: "Event12" }],
      participants: [],
      attendance: []
    }
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Jumbotron  >
            <div>
              <h2 className="text-center">
                Divine Heart Center - Attendance Application
           </h2>
            </div>
          </Jumbotron>
        </Container>
        <Navbar>
          <NavLink href="home">Home</NavLink>
          <NavLink href="events">Events</NavLink>
          <NavLink href="participants">Participants</NavLink>
        </Navbar>
        <Container>
         <Switch>
            <Route exact path="/" render={() => <HomePage something={"A"} />} />
            <Route exact path="/home" render={() => <HomePage something={"B"} />} />
            <Route exact path="/events" render={() => <Events events={this.state.events} />} />
            <Route exact path="/participants" render={() => <Participants something={"D"} />} />
            </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
