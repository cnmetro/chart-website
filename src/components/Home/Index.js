import React, { Component } from 'react'
import axios from 'axios'
import startOfYesterday from 'date-fns/start_of_yesterday'
import subDays from 'date-fns/sub_days'
import format from 'date-fns/format'
import './Index.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'


class Home extends Component {
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

  lastThirtyDays() {
    return [...new Array(30)].map((i, idx) => format(subDays(startOfYesterday(), idx), 'YYYY-MM-DD'));
  }

  getDayNum(arr, date) {
    let num = 0
    arr.forEach(v => {
      if (v.date === date) num = v.num
    })

    return num
  }

  formatData(dataArr) {
    const data = []

    this.lastThirtyDays().forEach(date => {
      data.push({
        date,
        'Shanghai': this.getDayNum(dataArr[0].data, date),
        'Beijing': this.getDayNum(dataArr[1].data, date),
        'Guangzhou': this.getDayNum(dataArr[2].data, date)
      })
    })

    this.setState({
      data: data.reverse()
    })
  }

  componentDidMount() {
    this.requestAll(this.state.query).then(res => {
      this.formatData(res)
    })
  }

  render() {
    return (
      <div className="">
        <LineChart width={1000} height={500} data={this.state.data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Shanghai" stroke="#8884d8" />
          <Line type="monotone" dataKey="Beijing" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Guangzhou" stroke="#1281ca" />
        </LineChart>
      </div>
    )
  }
}

export default Home