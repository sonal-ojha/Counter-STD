import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h3> Counter</h3>
        </div>
        <Counter />
      </div>
    );
  }
}

export default App;
