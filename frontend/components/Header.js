import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { logout } from '../actions/index';
import logo from '../assets/images/logo.png';
import Land from './Land';

class Header extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  isLoggedIn() {
    if (this.props.loggedIn === false) {
      return <Link to={'/login'}> login </Link>;
    } else {
      return (
        <div>
          <button onClick={this.logout}> Logout </button>
        </div>
      );
    }
  }

  logout() {
    this.props.logout();
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Eco District Hampton Roads</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={'/'}>
              <Link to={'/'}>Home</Link>
            </Nav.Link>
            <Nav.Link href="/news">
              <Link to={'/news'}>News</Link>
            </Nav.Link>
            <Nav.Link href={'/issues'}>
              <Link to={'/issues'}>Report an Issue</Link>
            </Nav.Link>
            <Nav.Link href={'/surveys'}>
              <Link to={'/surveys'}>Surveys</Link>
            </Nav.Link>
            <Nav.Link href="/opportunities">
              <Link to={'/opportunities'}>Jobs/Education</Link>
            </Nav.Link>
            <Nav.Link href="/recognition">
              <Link to={'/recognition'}>Recognizing Residents</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {this.isLoggedIn()}
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.login.username,
    loggedIn: state.login.loggedIn
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    logout: logout
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Header);
