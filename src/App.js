import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


class App extends Component {
  state = {
    data: [],
    query: 'count=30'
  }

  request(query, city) {
    return axios.get(`http://metro.sinchang.me/api/flows?city=${city}&${query}`)
      .then(res => res.data)
  }

  requestAll(query) {
    return Promise.all([
      this.request(query, 'sh'),
      this.request(query, 'bj'),
      this.request(query, 'gz')
    ])
  }

  formatData(dataArr) {
    const city = ['sh', 'bj', 'gz']
    const data = JSON.parse(JSON.stringify(dataArr[0].data))
    dataArr.forEach((arr, index1) => {
      arr.data.forEach((v, index2) => {
        data[index2][city[index1]] = v.num
      })
    })

    this.setState({
      data
    })
  }

  componentDidMount() {
    this.requestAll(this.state.query).then(res => {
      this.formatData(res)
    })
  }

  render() {
    return (
      <div className="app container">
        <h2>Shanghai/Beijing/Guangzhou Metro Passenger Flow Chart<span className="tip-text">(unit: Ten thousand)</span></h2>
        <select className="custom-select range-select">
          <option value="1">The last 30 days</option>
        </select>
        <LineChart width={800} height={400} data={this.state.data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sh" stroke="#8884d8" />
          <Line type="monotone" dataKey="bj" stroke="#82ca9d" />
          <Line type="monotone" dataKey="gz" stroke="#1281ca" />
        </LineChart>
      </div>
    );
  }
}

export default App;