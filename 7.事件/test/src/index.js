import React from 'react';
import ReactDOM from 'react-dom';

function handleClick() {
  console.log('点击了。。。。')
}


const btn = <button onClick={handleClick} onMouseEnter={()=>{console.log('鼠标移入了')}}>点击</button>

ReactDOM.render(
  btn,
  document.getElementById('root')
);

