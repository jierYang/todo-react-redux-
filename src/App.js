import React, {Component} from 'react';
import {Link, Switch, Route, BrowserRouter} from 'react-router-dom'
import './App.css';

import TabIndex from "./components/Tab/TabIndex";


import {Provider} from 'react-redux'
import {combineReducers, createStore} from "redux";
import {loginContainer, withAuthentication} from "./components/Login/LoginConatiner"

const addTodoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO": {
            debugger
            return [...state, action.todo];
        }

        case "DEL_TODO": {
            state = state.filter(t => t.id !== action.id);
            return state;
        }

        case "EDIT_TODO": {
            state = state.map(t => t.id === action.todo.id ? action.todo : t);

            return state;
        }

        case "INIT_TODO":{
            debugger
            state = action.todoList;

            return state;
        }

        default:
            return state;
    }
};

const authenticationReducer = (state = {isSucceed: false, token: ""}, action) => {
    switch (action.type) {
        case "LOGIN": {
            state = {isSucceed: action.isSucceed, token: action.token};

            return state
        }
        default:
            return state;
    }
};


const store = createStore(combineReducers(
    {
        todoList: addTodoReducer,
        authenticatedMsg: authenticationReducer
    }
));


const ConnectedTabIndex = withAuthentication(TabIndex);

class App extends Component {
    render() {
        return (
            <div className="App">
                {
                    <Provider store={store}>
                        <BrowserRouter>
                            <div className="appIndex">
                                <Link to="/" style={{margin: 10}}>首页</Link>
                                <Link to="/login" style={{margin: 10}}>登陆</Link>
                                <Switch>
                                    <Route exact path='/' component={ConnectedTabIndex}/>
                                    <Route path='/login' component={loginContainer}/>
                                </Switch>
                            </div>
                        </BrowserRouter>
                    </Provider>
                }
            </div>
        );
    }
}

export default App;
