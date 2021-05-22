import React from 'react'


// 首字母必须大写，小写的话会被系统认为是普通的react元素，使用大写的话，生成的就是组件元素
export default function MyFuncCmp(props) {
  return <h1>h1组件元素: { props.number }</h1>
}