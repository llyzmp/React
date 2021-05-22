import React from 'react'

export default class MyClassCmp extends React.Component {
  // 可以省略constructor
  constructor(props) {
    super(props); // 继承父类, 做了这样一件事 this.props = props
    this.state = {}
  }
  /**
   *该方法必须返回React元素
  */
  render() {
    return <h1>类组件内容: { this.props.number }</h1>
  }
}