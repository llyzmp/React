import React, { Component } from 'react'
import PropTypes from 'prop-types'

const types = {
  a: PropTypes.number,
  b: PropTypes.string.isRequired
}

function ChildA(props, context) {
  return <div>
    <h1>ChildA</h1>
    <h2>a: {context.a} b: {context.b}</h2>
    <ChildB />
  </div>
}
// 类型约束
ChildA.contextTypes = types;



class ChildB extends React.Component {

   /**
   * 
   * 约束上下文中的数据类型
   */
    static childContextTypes = types

    constructor(props, context) {
      super(props,context)
      console.log(this.context)

    }

    render() {
      return (
        <p>
          ChildB, 来自于上下文的数据: a: { this.context.a }, b: { this.context.b }
          <button onClick={()=>{this.context.onChange(this.context.a+2)}}>子组件按钮 a+2</button>
        </p>
      )
    }



}

export default class OldContext extends Component {
  /**
   * 
   * 约束上下文中的数据类型
   */
  static childContextTypes = types
  // 状态
  state = {
    a: 123,
    b: 'sadfasdfasd'
  }
  /**
   * 得到上下文中的数据
   */
  getChildContext() {
    console.log('获取上下文中的数据')
    return { 
      a: this.state.a,
      b: this.state.b,
      // 用于后代调用改变值
      onChange: (newA)=> {
        this.setState({ a: newA})
      }
    }
  }
  render() {
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            a: this.state.a + 1
          })
        }}>按钮</button>
        <ChildA />
      </div>
    )
  }
}
