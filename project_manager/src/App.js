import React, { Component } from 'react';
import Projects from './Component/Projects';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        {
          title: "title A",
          type: "type A"
        },
        {
          title: "title B",
          type: "type B"
        },
        {
          title: "title C",
          type: "type C"
        },
      ]
    }
  }
  render() {
    return (
      <div className="App">
        My Work
        <Projects projects={this.state}/>
      </div>
    );
  }
}

export default App;
