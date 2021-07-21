import React, {useState} from 'react';
import Dashboard from "./component/dashboard/dashboard";
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CardDetail from "./component/card-detail";

export const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/card-detail" component={CardDetail} />
            </div>
        </Router>
    );
}

export default App;
