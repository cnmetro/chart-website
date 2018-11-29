import React, { Component } from 'react'
import './App.css'
import logo from './assets/logo.svg'
import Home from './components/Home/Index'
import City from './components/City/Index'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'

class App extends Component {
  activeEvent(match, location) {
    if (!match) return false

    if (match.url === location.pathname) return true
  }

  render() {
    return (
      <Router>
      <div className="app">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-item nav-link" to="/" activeClassName="active" isActive={this.activeEvent}>Home</NavLink>
              <NavLink className="nav-item nav-link" to="/city/sh" activeClassName="active">Shanghai</NavLink>
              <NavLink className="nav-item nav-link" to="/city/bj" activeClassName="active">Beijing</NavLink>
              <NavLink className="nav-item nav-link" to="/city/gz" activeClassName="active">Guangzhou</NavLink>
            </div>
          </div>
        </nav>
        <p className="tip-text">(unit: Ten thousand)</p>
        <Route exact path="/" component={Home} />
        <Route exact path="/city/:name" component={City} />
      </div>
      </Router>
    )
  }
}

export default App