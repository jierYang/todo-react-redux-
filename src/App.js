import React, {Component} from 'react';
import {Link, Switch, Route, BrowserRouter} from 'react-router-dom'
import './App.css';

import TabIndex from "./components/TabIndex";
import Login from "./components/Login";


class App extends Component {
    render() {
        return (
            <div className="App">
                {
                    <BrowserRouter>
                        <div>
                            <Link to="/" style={{margin: 10}}>首页</Link>
                            <Link to="/login" style={{margin: 10}}>登陆</Link>
                            <Switch>
                                <Route exact path='/' component={TabIndex}/>
                                <Route path='/login' component={Login}/>
                            </Switch>
                        </div>
                    </BrowserRouter>
                }
            </div>
        );
    }
}

export default App;
