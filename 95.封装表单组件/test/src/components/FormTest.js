import React, { Component } from 'react'
import CheckBoxGroup from './common/CheckBoxGroup'

export default class FormTest extends Component {
  state = { 
    datas: [
      { value: 'football', text: '足球' },
      { value: 'basketball', text: '篮球' },
      { value: 'movie', text: '电影' },
    ],
    name: 'loves',
    chooseDatas: [
      'football'
    ]
  }
  render() {
    return (
      <div>
        <CheckBoxGroup name="loves" {...this.state} onChange={newArr =>{ this.setState({chooseDatas: newArr})}}/>
      </div>
    )
  }
}
