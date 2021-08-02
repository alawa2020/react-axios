import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

import Home from './Home'
import Persona from './Persona';

const RouterComponent = () => {
    return (
        <div>
            <Router>

                <Link to="/">Home</Link>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/persona/:id" component={Persona}></Route>
                </Switch>
            </Router>
            
        </div>
    )
}

export default RouterComponent
