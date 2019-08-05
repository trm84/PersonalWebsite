import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
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


render() {
    return (
      <div className="App">
        <NavBar goAbout={this.goAbout} goHome={this.goHome} siteName={this.state.siteName} titleLink={this.state.titleLink} />

        <Element name="home">
          <Home />
        </Element>
        <Element name="about"></Element>
          <About />
        {/*
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
        <p>{this.state.responseToPost}</p>*/}
      </div>
    );
  }

}
export default App;
