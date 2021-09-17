import React from 'react'

import { HashRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom'
import LoginPage from '../components/login/login-page'
import PermissionSelection from '../components/login/permission-selection'
import DreamStudio from '../components/dream-studio'
import Home from '../components/home'
import NotFound from '../components/notFound'


const BasicRoute = withRouter(() => {
    return (
        <Router>
            <Switch>
                <Route exact path='/login' render={(props) => <LoginPage {...props} />} />
                <Route path='/permission-selection' render={(props) => <PermissionSelection {...props} />} />
                <Route path='/dream-studio' render={(props) => <DreamStudio {...props} />} />
                <Route path='/home' render={(props) => <Home {...props} />} />
                <Route path='*' component={NotFound} />
            </Switch>
        </Router>
    )
})
export default BasicRoute
