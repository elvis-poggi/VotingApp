import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hasHistory} from 'react-router';
import App from './components/App.jsx';
import Voting from './components/Voting.jsx';
import Results from './components/Results.jsx';

const pair = ['Trainspotting', '28 Days Later'];

const routes = <Route component={App}>
    <Route path="/results" component={Results}/>
    <Route path="/" component={Voting} />
    </Route>;
ReactDOM.render(
    <Router history={hasHistory}>{routes}</Router>,
    document.getElementById('app')
);