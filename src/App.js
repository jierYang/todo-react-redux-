import React, {Component} from 'react';
import {Link, Switch, Route, BrowserRouter} from 'react-router-dom'
import './App.css';

import TabIndex from "./components/Tab/TabIndex";
import Login from "./components/Login";

import {Provider} from 'react-redux'
import {combineReducers, createStore} from "redux";


const addTodoReducer = (state = [], action, id = 0) => {
    switch (action.type) {
        case "ADD_TODO": {
            id += 1;
            action.todo['id'] = id;
            return [...state, action.todo];
        }

        case "DEL_TODO": {
            debugger
            // return state.map((item, index) => {
            //     if (item.id === action.id) {
            //         state.splice(index, 1)
            //     }
            // })
            state = state.filter(t => t.id!==action.id);
            return state;
            // return state.filter(t => t.id===action.id);
        }

        default:
            return state;
    }
};


const store = createStore(combineReducers(
    {
        todoList: addTodoReducer
    }
));


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
                                    <Route exact path='/' component={TabIndex}/>
                                    <Route path='/login' component={Login}/>
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
