import React from 'react'

import { HashRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom'
import LoginPage from '../components/loginpage'
import Home from '../components/home'
import NotFound from '../components/notFound'
import Home1 from "../components/home1";
import Clock from "../components/home/TempMain";
import TempMainTwo from '../components/home/TempMainTwo';
import Four from '../components/home/TempMainFour';


const BasicRoute = withRouter(({ history, match, location }) => {
    return (
        <Router>
            <Switch>
                <Route exact path='/login' component={LoginPage} />
                <Home match={match} location={location} history={history}>
                    <Switch>
                        <Route exact path='/'>
                            <Redirect to='/home1' />
                        </Route>
                        <Route exact path='/home1'>
                            <Redirect to='/home1/nav1-opt1' />
                        </Route>
                        <Route path='/home1' key='/home1' component={Home1}></Route>
                        <Route path='/home2' key='/home2' component={Clock}></Route>
                        <Route path='/home3' key='/home3' component={TempMainTwo}></Route>
                        <Route path='/home4' key='/home4' component={Four}></Route>
                    </Switch>
                </Home>
                <Route path='*' component={NotFound} />
            </Switch>
        </Router>
    )
})
export default BasicRoute
