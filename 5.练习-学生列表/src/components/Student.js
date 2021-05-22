import React from 'react'

export default function Student(props) {

  return (
    <li>
      {/* 显示一个学生所有数据 */}
      【姓名】{ props.name }
      【email】{ props.email }
      【性别】{ props.sex === 1 ? '男' : '女' }
      【出生年份】{ props.btrth }
    </li>
  )
}