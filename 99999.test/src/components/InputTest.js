import React, { Component } from 'react'
import Input from './Input'

export default class InputTest extends Component {
  constructor() {
    super()
    this.inputComponentRef = React.createRef()
  }
  render() {
    return (
      <div>
        <Input ref={this.inputComponentRef} />
        <button onClick={()=> this.inputComponentRef.current.focusInput()}>button</button>
      </div>
    )
  }
}