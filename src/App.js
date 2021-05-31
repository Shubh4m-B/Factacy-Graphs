import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Graph from './Components/Graph';
import './App.css';
import axios from 'axios';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: ["Trade", "Import", "Export", "Trade Deficit"]
    }
    this.handleData = this.handleData.bind(this);
  }
  handleData(data) {
    const tradeSeries = { stats: data.tradeSeries, title: "Trade" };
    const importSeries = { stats: data.importSeries, title: "Import" };
    const exportSeries = { stats: data.exportSeries, title: "Export" };
    const tradeDeficitSeries = { stats: data.tradeDeficitSeries, title: "Trade Defecit" };
    this.setState({
      data: [tradeSeries, importSeries, exportSeries, tradeDeficitSeries]
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
            <Graph data={parameter} key={parameter.title} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
