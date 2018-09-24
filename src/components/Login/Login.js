import React from "react";
import {Redirect} from "react-router-dom";

import "./Login.css"

// UI->Props Data->Sate 一般用function 不用class 因为纯界面
// const Login = () => (
export const Login = class extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let temp = {};
        temp.name = this.username.value;
        temp.password = this.password.value;

        fetch('/users/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(temp),
        })
            .then((response) => {
                if (response.status !== 200 && response.text().valueOf() === null) {
                    alert("login failed!");
                }
                return response.text()
            })
            .then(token => {
                this.props.onLogin(token);
                this.props.initList(token);
            })
    }

    render() {
        return (
            <div>
                {!this.props.logged &&
                <div>
                    <table className="tb_login">
                        <tr>
                            <td>
                                <label for="username"> User name:</label>
                            </td>
                            <td>
                                <input ref={(ref) => this.username = ref} id="username"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <label for="password">Password:</label>
                            </td>
                            <td>
                            <input ref={(ref) => this.password = ref} type="password" id="password"/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                            <button className="btnLogin" onClick={this.handleClick}>登陆
                            </button>
                            </td>
                        </tr>
                    </table>
                </div>
                }
                {
                    this.props.logged && <Redirect to="/"/>
                }
            </div>
        )
    }
};







