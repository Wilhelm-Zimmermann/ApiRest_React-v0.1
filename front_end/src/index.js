// import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import ReactDOM from 'react-dom'

// import Posts from './components/posts/ShowList'
// import Form from './components/form/Form'
// import Header from './components/header/Header'

// export default function App(){
//     return(
//         <div>
//             <BrowserRouter>    
//             {/* I put header inside to the Link work corectly*/}
//             {/* check the header to understand */}
//                 <Header/> 
//                 {/*Only the content inside the switch will change*/ }
//                 <Switch>
//                     <Route path='/' exact={true} component={Posts}/>       
//                     <Route path='/add_post' component={Form}/>             
//                 </Switch>
//             </BrowserRouter>
//         </div>
//     )
// }

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(<App/>,document.getElementById('root'))