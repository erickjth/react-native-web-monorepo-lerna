import React, { Component } from 'react';
import Heading from 'components/src/Heading';
import Text from 'components/src/Text';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Heading as='h1' textAlign='center' m={10} fontSize={20}>Welcome to React Web!</Heading>
          <Text>
            Edit <code>src/App.js</code> and save to reload.
          </Text>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
