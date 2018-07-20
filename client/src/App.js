import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    axios.get('/counter').then(({data})=>{
      this.setState(data);
    })
  }

  increment() {
    axios.post('/counter/add').then(({data})=>{
      this.setState(data);
    })
  }

  decrement() {
    axios.post('/counter/subtract').then(({data})=>{
      this.setState(data);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Full Stack Counter</h1>
        </header>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment.bind(this)}>add</button>
        <button onClick={this.decrement.bind(this)}>subtract</button>
      </div>
    );
  }
}

export default App;
