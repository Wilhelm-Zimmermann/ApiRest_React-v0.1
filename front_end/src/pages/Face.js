import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Posts from '../components/posts/ShowList'
import Form from '../components/form/Form'
import Header from '../components/header/Header'

export default function Face(){
    return(
        <div>
            <BrowserRouter>    
            {/* I put header inside to the Link work corectly*/}
            {/* check the header to understand */}
                <Header/> 
                {/*Only the content inside the switch will change*/ }
                <Switch>
                    <Route path='/app' exact component={Posts}/>       
                    <Route path='/app/add_post' component={Form}/>             
                </Switch>
            </BrowserRouter>
        </div>
    )
}