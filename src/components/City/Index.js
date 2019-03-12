import React, { Component } from 'react'
import axios from 'axios'
import './Index.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
const COLOR_VAR = {
  sh: '#8884d8',
  bj: '#82ca9d',
  gz: '#1281ca'
}

class City extends Component {
  state = {
    name: '',
    query: 'count=30',
    data: [],
    sortedData: []
  }

  handleChange = event => {
    this.fetchData(null, event.target.value)
  }

  request(query, name) {
    return axios.get(`http://metro.sinchang.me/api/flows?city=${name}&${query}`)
      .then(res => res.data)
  }

  componentDidMount() {
    const { name } = this.props.match.params
    this.fetchData(name)
    this.request('sort=desc', name)
      .then(res => {
        this.setState({ sortedData: res.data})
      })
  }

  componentWillReceiveProps(nextProps) {
    const { name } = nextProps.match.params
    if (name === this.state.name) return
    this.fetchData(name)
    this.request('sort=desc', name)
      .then(res => {
        this.setState({ sortedData: res.data})
      })
  }

  fetchData(name, query) {
    name = name || this.state.name
    query = query || this.state.query
    this.request(query, name).then(data => {
      this.setState({
        data: data.data.reverse(),
        name,
        query
      })
    })
  }

  render() {
    const highest = this.state.sortedData[0]
    const lowest = this.state.sortedData[this.state.sortedData.length - 1]
    return (
      <div>
        <select className="form-control type-select" value={this.state.query} onChange={this.handleChange}>
          <option value="count=30">The last 30 Days</option>
          <option value="count=10&sort=desc">Top10</option>
          <option value="year=2019">2019 Year</option>
          <option value="year=2018">2018 Year</option>
          <option value="year=2017">2017 Year</option>
          <option value="year=2016">2016 Year</option>
          <option value="year=2015">2015 Year</option>
        </select>
        <LineChart width={1000} height={500} data={this.state.data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="num" stroke={COLOR_VAR[this.state.name]} />
        </LineChart>
        <div>
        { highest && <span>Highest: {highest.num} in {highest.date}</span> } | { lowest && <span>Lowest: {lowest.num} in {lowest.date}</span> }
        </div>
      </div>
    )
  }
}

export default City
