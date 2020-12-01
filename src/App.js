import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//joining header, footer and content classes to App.js
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
//importing navbar
import {Navbar, Nav} from 'react-bootstrap';
//importing browserrouter
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Create } from './components/create';
import { Read } from './components/read';
import { Edit } from './components/edit';

class App extends Component {
  render() {
    return (
      //router encapsulates the whole div
      <Router>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Navbar>

        <br/>
        <switch>
        <Route path ='/' component={Content} exact/>
        <Route path ='/create' component={Create} />
        <Route path ='/read' component={Read} />
        <Route path='/edit/:id' component={Edit}></Route>
        </switch>

      </div>
      </Router>
    );
  }
}
export default App;
