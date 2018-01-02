import React, { Component } from 'react';
import Project  from './components/Project/Project'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        My App
        <Project />
      </div>
    );
  }
}

export default App;
