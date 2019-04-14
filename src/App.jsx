import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Navbar from 'react-bootstrap/Navbar'
import NavLink from 'react-bootstrap/NavLink'
import Route from 'react-router-dom/Route'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import HomePage from './HomePage'
import Events from './Events'


class App extends Component {
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
        </Navbar>
        <Container>
          <BrowserRouter>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/events" component={Events} />
          </BrowserRouter>
        </Container>
      </div>
    );
  }
}

export default App;
