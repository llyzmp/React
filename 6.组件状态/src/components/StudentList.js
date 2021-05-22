import React, { Component } from 'react'
import Student from './Student'
export default class StudentList extends Component {
  render() {
    // props.stus传递的是学生数组
    // 获取组件数组
    const students = this.props.stus.map(item => <Student {...item}/>)
    return (
      <ul>
        { students }
      </ul>
    )
  }
}
