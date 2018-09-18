import React, {Component} from 'react';
import {Link, Switch, Route, BrowserRouter} from 'react-router-dom'
import './App.css';

import TabIndex from "./components/Tab/TabIndex";


import {Provider} from 'react-redux'
import {combineReducers, createStore} from "redux";
import {loginContainer, mapStateToProps} from "./components/Login/LoginConatiner"
import Redirect from "react-router-dom/es/Redirect";

import connect from "react-redux/es/connect/connect";

let todoId = 0;
const addTodoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO": {
            debugger
            todoId += 1;
            action.todo['id'] = todoId;
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

        default:
            return state;
    }
};

const authenticationReducer = (state = false, action) => {
    switch (action.type) {
        case "LOGIN":
            return action.isSucceed;
        default:
            return state;
    }
};


const store = createStore(combineReducers(
    {
        todoList: addTodoReducer,
        isAuthenticated: authenticationReducer
    }
));

const withAuthentication = (WrappedComponent) => {
    const View = (props) => {
        const {logged, ...rest} = props;

        return (
            <div>
                {!logged && <Redirect to="/login"/>}
                {logged && <WrappedComponent {...rest} />}
            </div>
        );
    };

    return connect(mapStateToProps)(View);
};

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
