import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Graph from './Components/Graph';
import './App.css';
import axios from 'axios';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.handleData = this.handleData.bind(this);
  }
  handleData(data) {
    this.setState({
      data: [data.tradeSeries, data.importSeries, data.exportSeries, data.tradeDeficitSeries]
    });
  }

  componentDidMount() {
    axios.get("https://run.mocky.io/v3/3be6c19d-7ae5-4f84-950c-5b4ab4b22537")
      .then(res => {
        const data = res.data;
        // console.log(data.exportSeries, data.tradeSeries, data.importSeries, data.tradeDeficitSeries);
        this.handleData(data);
      })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          {this.state.data.map((parameter) => (
            <Graph data={parameter} key={parameter} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
