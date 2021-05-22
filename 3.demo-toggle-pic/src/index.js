import React from 'react';
import ReactDOM from 'react-dom';
import src1 from './assets/img/jd1.webp'
import src2 from './assets/img/jd2.webp'
import src3 from './assets/img/jd3.webp'
import './assets/css/index.css'




const srclist = [src1, src2, src3];
let index = 0;
let timer;

const container = document.getElementById('root');

function render() {
  return ReactDOM.render( <img src={srclist[index]} alt="" className="img"/>, container);
}

function start() {
  clearInterval(timer);
  timer = setInterval(() => {
    index = (index + 1) % 3;
    render();
  },2000)
}

function stop() {
  clearInterval(timer);
}

container.onmouseenter = function() {
  stop();
}
container.onmouseleave = function() {
  start();
}
render();
start();






