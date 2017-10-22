import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import Home from '../../ui/components/Home';
import NotFound from '../../ui/components/NotFound';
import AppLayout from '../../ui/components/AppLayout';
import '../../../client/main.html';

Meteor.startup(() => {
    render(
        <Router history={browserHistory}>
            <Route path="/" component={AppLayout}>
                <IndexRoute component={Home} />
            </Route>
            <Route path="*" component={NotFound} />
        </Router>,
        document.querySelector('.root')
    );
});
