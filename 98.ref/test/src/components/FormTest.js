import React, { Component } from 'react'

export default class FormTest extends Component {
  constructor(props) {
    super(props)
    this.txt = React.createRef();
  }

  handleClick = () => { 
    console.log(this)
    // 要淘汰了
    // this.refs.txt.focus()
    // 使用对象的形式
    this.txt.current.focus();

  }
  render() {
    return (
      <div>
        <input ref={this.txt} type="text" />
        <button onClick={this.handleClick}>聚焦</button>
      </div>
    )
  }
}
