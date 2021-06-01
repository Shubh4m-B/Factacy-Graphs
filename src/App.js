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
    const tradeSeries = { stats: data.tradeSeries, title: "Trade", color: 'rgba(75,192,255,0.7)' };
    const importSeries = { stats: data.importSeries, title: "Import", color: 'rgba(200,192,67,0.7)' };
    const exportSeries = { stats: data.exportSeries, title: "Export", color: 'rgba(20,200,98,0.7)' };
    const tradeDeficitSeries = { stats: data.tradeDeficitSeries, title: "Trade Defecit", color: 'rgba(255,100,20,0.7)' };
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
            <Graph data={parameter} key={parameter.title} color={parameter.color} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
