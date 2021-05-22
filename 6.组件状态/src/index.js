import React from "react";
import ReactDOM from "react-dom";
import StudentList from "./components/StudentList";
var appkey = "demo13_1545210570249";
/**
 * 获取所有学生数据
 */
async function fetchAllStudents() {
  var stus = await fetch(
    "http://api.duyiedu.com/api/student/findAll?appkey=" + appkey
  )
    .then((res) => res.json())
    .then((res) => res.data);
  return stus;
}



async function render() {
  ReactDOM.render('正在加载...',document.getElementById('root'));
  const stus = await fetchAllStudents(); // 获取学生数组
  ReactDOM.render(<StudentList stus = { stus } />, document.getElementById("root"));
}

render();


