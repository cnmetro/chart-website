import React, { Component } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const COLOR_VAR = {
  sh: '#8884d8',
  bj: '#82ca9d',
  gz: '#1281ca'
}

class City extends Component {
  state = {
    name: '',
    query: 'count=30',
    data: []
  }

  request(query, name) {
    return axios.get(`http://metro.sinchang.me/api/flows?city=${name}&${query}`)
      .then(res => res.data)
  }

  componentDidMount() {
    const { name } = this.props.match.params;
    this.fetchData(name);
  }

  componentWillReceiveProps(nextProps) {
    const { name } = nextProps.match.params;
    if (name === this.state.name) return;
    this.fetchData(name);
  }

  fetchData(name) {
    const { query } = this.state
    this.request(query, name).then(data => {
      this.setState({
        data: data.data.reverse(),
        name
      })
    })
  }

  render() {
    return (
      <div>
        <LineChart width={800} height={400} data={this.state.data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="num" stroke={COLOR_VAR[this.state.name]} />
        </LineChart>
      </div>
    )
  }
}

export default City