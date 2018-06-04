import React from 'react';
import { render } from 'react-dom';
import history from './history';
import { Route, Router, Switch } from 'react-router-dom';

import Auth from './Auth';
import { App, Ramen, Sushi } from './components';

const auth = new Auth();

render(
    <Router history={history}>
        <Switch>
            <Route exact path='/' render={() => <App auth={auth}/>} />
            <Route path='/ramen' component={Ramen}/>
            <Route path='/sushi' component={Sushi}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);