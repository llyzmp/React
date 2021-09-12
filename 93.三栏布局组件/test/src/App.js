import React from 'react'

import ThreeLayout from './components/common/ThreeLayout'

export default function App() {
  return (
    <div>
      <ThreeLayout left={<h1>左侧内容</h1>} right={<h1>右侧内容</h1>} >
        <h1>中间内容</h1>
      </ThreeLayout>
    </div>
  )
}
