import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Navbar from 'react-bootstrap/Navbar'
import NavLink from 'react-bootstrap/NavLink'
import { BrowserRouter, Route} from 'react-router-dom'
import HomePage from './HomePage'
import Events from './Events'
import Participants from './Participants'



class App extends Component {
  constructor() {
    super()
    this.state = {
      events:["Event1", "Event2", "Event3"],
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
          <BrowserRouter>
              <Route exact path="/" render={()=><HomePage  something={"A"} />}/>
              <Route exact path="/home" render={()=><HomePage  something={"B"} />}/>
              <Route exact path="/events" render={()=><Events  events={this.state.events} />}/>
              <Route exact path="/participants" render={()=><Participants  something={"D"} />}/>
          </BrowserRouter>
        </Container>
      </div>
    );
  }
}

export default App;
