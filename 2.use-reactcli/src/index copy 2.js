import React from 'react';
import ReactDOM from 'react-dom';


const url = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload.art.ifeng.com%2F2015%2F0925%2F1443170850427.jpg&refer=http%3A%2F%2Fupload.art.ifeng.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617351420&t=e8385f0b18c64cc22fc1e16211c03528'



const div = (
  <div>
    {/* 书写内敛样式 */}
    <img src={url} className="image" style={{ 
      marginLeft: '50px',
      width: '200px'
    }} alt=""/>
  </div>
)
ReactDOM.render(div,document.getElementById('root'));


