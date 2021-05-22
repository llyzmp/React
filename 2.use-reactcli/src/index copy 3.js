import React from 'react';
import ReactDOM from 'react-dom';


const content = "<h1>2131223</h1>"

// dangerouslySetInnerHTML

const div = (
  <div dangerouslySetInnerHTML={{__html: content}}>
  </div>
)
ReactDOM.render(div,document.getElementById('root'));


