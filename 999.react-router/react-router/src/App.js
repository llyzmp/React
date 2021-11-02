// import React from 'react'

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// function A() {
//   return <h1>组件A</h1>
// }

// function B() {
//   return <h1>组件B</h1>
// }

// function C() {
//   return <h1>组件C</h1>
// }

// export default function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/a" component={A} />
//         <Route path="/a/b" exact component={B} />
//         <Route path="/a/c" exact component={C} />
//       </Switch>
//     </Router>
//   )
// }

import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function CompanyNews() {
  return <div>公司新闻</div>
}
function IndustryNews() {
  return <div>行业新闻</div>
}



function Index() {
  return <div>首页</div>
}
function News(props) {
  return (
    <div>
      <div>
        <Link to={`${props.match.url}/company`}>公司新闻</Link>
        <Link to={`${props.match.url}/industry`}>行业新闻</Link>
      </div>
      <div>
        <Route path={`${props.match.url}/company`} component={CompanyNews}/>
        <Route path={`${props.match.url}/industry`} component={IndustryNews}/>
      </div>
    </div>
  )
}


export default function App() {
  return (
    <Router>
      <div> 
        <Link to="/index">首页</Link>
        <Link to="/news">新闻</Link>
      </div>
      <div>
        <Route path="/index" component={Index}/>
        <Route path="/news" component={News}/>
      </div>
    </Router>
      
    
  )
}
