import React from 'react';
import ReactDOM from 'react-dom';

const h1 = (
  // 不会表示真实的片段
  <React.Fragment>
    <h1>Hello World <span>span元素</span></h1>
  </React.Fragment>
)

const a = 3333, b = 5555
// 普通对象
// const obj = {
//   a: 1,
//   b: 2
// }

const obj = <span>react元素</span>

// 只会显示2,5,6, 数组中放普通对象会报错
const arr = [2, null, false, undefined, 5, 6];

// react元素数组
const numbers = new Array(30);
numbers.fill(0);
var lis = numbers.map((item,i) => (<li key={i}>{i}</li>));

const div = (
  <div>
    {/* 注释是这样的 */}
    { a } * { b } = { a * b }
    <p>
      {/* 以下不会产生任何输出 */}
      { null }
      { undefined }
      { false }
    </p>
    <p>
      {/* 普通对象无法放置 */}
      {/* {obj} */}
    </p>
    <p>
      {/* React元素对象没问题 */}
      { obj }
    </p>
    <p>
      { arr }
    </p>
    <p>
      { lis }
    </p>
  </div>
)

ReactDOM.render(div,document.getElementById('root'));


