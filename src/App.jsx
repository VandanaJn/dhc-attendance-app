import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Navbar from 'react-bootstrap/Navbar'
import NavLink from 'react-bootstrap/NavLink'
import { Switch, Route } from 'react-router'
import HomePage from './HomePage'
import Events from './Events'
import Participants from './Participants'
import { API, graphqlOperation } from 'aws-amplify'
import { listEvents } from './graphql/queries'
import { withAuthenticator } from 'aws-amplify-react';



class App extends Component {
  constructor() {
    super()
    this.state = {
      events: [],
      participants: [],
      attendance: []
    }
    this.refreshEvents = this.refreshEvents.bind(this)
  }
  
  async refreshEvents() {
    console.log('about to refresh called')
    const data = await API.graphql(graphqlOperation(listEvents))
    
    console.log('refresh called')
    this.setState({
      
      events: data.data.listEvents.items
    })
  }

  async componentDidMount() {
    console.log('componentDidMount called')
    this.refreshEvents()

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
          <NavLink href="#/home">Home</NavLink>
          <NavLink href="#/events">Events</NavLink>
          <NavLink href="#/participants">Participants</NavLink>
        </Navbar>
        <Container>
          <Switch>
            <Route exact path="/home" render={() => <HomePage something={"B"} />} />
            <Route exact path="/events" render={() => <Events events={this.state.events} refreshEvents={this.refreshEvents}/>} />
            <Route exact path="/participants" render={() => <Participants something={"D"} />} />
            <Route exact path="/" render={() => <HomePage something={"A"} />} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default withAuthenticator(App, {
 // Render a sign out button once logged in
  includeGreetings: true,
});
