import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from './services/auth'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Face from './pages/Face'
import Error from './pages/Error'

// in This file we will configure authorized routes and the private routes

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => 
        isAuthenticated()?(
            <Component {...props}/>
        ):(
            <Redirect to={{ pathname: '/', state: {from : props.location }}} />
        )
    }
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <PrivateRoute path='/app' component={Face}/>
            <Route path='*' component={Error}/>
        </Switch>
    </BrowserRouter>
)
export default Routes