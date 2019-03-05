import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './component/navbar.js'
import Home from './component/home.js'
import About from './component/about.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      response: '',
      post: '',
      responseToPost: '',
      siteName: 'matthews-tyler.com',
      titleLink: 'http://google.com',
      navBarHeight: 80
    };
  }
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/test/');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };

  //Go to ref functions
  goHome = () => {
   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  goAbout = () => {
   var el = document.getElementById("About");
   window.scroll({top: el.offsetTop - this.state.navBarHeight, left: 0, behavior: 'smooth'});
  }

  goProjects = () => {
    var el = document.getElementById("Projects");
    window.scroll({top: el.offsetTop - this.state.navBarHeight, left: 0, behavior: 'smooth'});
  }

  goLinks = () => {
    var el = document.getElementById("Links");
    window.scroll({top: el.offsetTop - this.state.navBarHeight, left: 0, behavior: 'smooth'});
  }

  goContact = () => {
    var el = document.getElementById("Contact");
    window.scroll({top: el.offsetTop - this.state.navBarHeight, left: 0, behavior: 'smooth'});
  }


render() {
    return (
      <div className="App">
        <NavBar goAbout={this.goAbout} goHome={this.goHome} siteName={this.state.siteName} titleLink={this.state.titleLink} />
        <div ref="Home"><Home /></div>
        <div id="About" ref="About"><About /></div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }

}
export default App;
