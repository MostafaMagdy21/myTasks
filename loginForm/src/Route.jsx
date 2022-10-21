import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Pages from './pages';

export const Router = () =>(
    <Switch>
        <Route path='/' exact component={Pages.LoginPage} />
    </Switch>
);

export default Router;