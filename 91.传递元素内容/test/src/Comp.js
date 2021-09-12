import React from 'react'

export default function Comp(props) {
  return (
    <div className="comp">
      {/* {props.html} */}
      {/* 不传的话,设置默认值 */}
      { props.children || '默认值'}
    </div>
  )
}
