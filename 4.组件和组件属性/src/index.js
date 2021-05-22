import React from 'react';
import ReactDOM from 'react-dom';
import MyFuncCmp from './MyFuncCmp'
import MyClassCmp from './MyClassCmp'


ReactDOM.render(
  <div>
    <MyFuncCmp number={5}/>
    <MyClassCmp number={10}/>
  </div>
  , document.getElementById('root'));


