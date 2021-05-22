import React from 'react';
import ReactDOM from 'react-dom';

let num = 1;

const div = (
  <div>
    { num }
  </div>
)
console.log(div);

// 元素的不可变性,会报错
// div.props.children = '222';

ReactDOM.render(div,document.getElementById('root'));


