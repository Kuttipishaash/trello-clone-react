import React from 'react'
import App from './components/App';
import { Route, IndexRoute } from 'react-router';
import Board from './components/Board';
import Home from './components/Home';
import AddForm from './components/AddForm';
import Card from './components/Card';

export default (
    <React.Fragment>
        <Route exact path="/" component={App}/>
        <Route path="boards/new_board" component={AddForm}/>
        <Route path="boards/:id" component={Board}/>
        <Route path="boards/:id/cards/:id" component={Card}/>
        <Route path="boards/:id/new_card" component={AddForm}/>
    </React.Fragment>
);