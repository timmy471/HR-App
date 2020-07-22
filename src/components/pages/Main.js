import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Auth from './Auth';

const Main = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={Auth}/>
                </Switch>
            </Router>
        </div>
    )
}

export default Main
