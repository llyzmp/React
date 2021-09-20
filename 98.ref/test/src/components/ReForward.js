import React, { Component } from 'react'


function A(props, ref) {
  console.log('ref', props,ref); 
  return (
    <h1>
      组件A
      <span>{props.words}</span>
    </h1>
  )
}

//  传递函数组件A, 得到一个新的组件NewA
const NewA = React.forwardRef(A)

export default class ReForward extends Component {

  ARef = React.createRef()

  render() {
    return (
      <div>
        <NewA ref={this.ARef} words="sfdsfa" />
      </div>
    )
  }
}
