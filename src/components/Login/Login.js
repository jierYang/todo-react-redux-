import React from "react";
import {Redirect} from "react-router-dom";


// UI->Props Data->Sate 一般用function 不用class 因为纯界面
// const Login = () => (
export const Login = class extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.username.value === '1' && this.password.value === '1') {
            this.props.onLogin();
        }
    }

    render() {
        return (
            <div>
                {!this.props.logged &&
                <div>
                    <label for="username"> User name:</label>
                    <input ref={(ref) => this.username = ref} id="username"/>
                    <label for="password">Password:</label>
                    <input ref={(ref) => this.password = ref} type="password" id="password"/>
                    <button onClick={this.handleClick}>登陆
                    </button>
                </div>
                }
                {
                    this.props.logged && <Redirect to="/"/>
                }
            </div>
        )
    }
};







