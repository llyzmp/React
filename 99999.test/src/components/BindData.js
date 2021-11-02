import React, { Component } from 'react'

// Person组件
const Person = props => {
  return <input type="text" value={props.name} onChange={props.changed} />
}

// 实现双向绑定
export default class BindData extends Component {
  constructor() {
    super()
    this.state = {
      name: '张三'
    }
    this.nameChanged = this.nameChanged.bind(this)
  }
  nameChanged(event) {
    this.setState({name: event.target.value})
  }
  render() {
    return (
      <div>
        <div>{this.state.name}</div>
        <Person name={this.state.name} changed={this.nameChanged} />
      </div>
    )
  }
}
