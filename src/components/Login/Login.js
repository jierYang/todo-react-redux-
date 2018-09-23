import React from "react";
import {Redirect} from "react-router-dom";
import connect from "react-redux/es/connect/connect";

// fetch('/todos')
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(myJson){
//         console.log(myJson)
//     });


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
                        if (response.status !== 200 && response.text().valueOf()===null) {
                            alert("login failed!");
                        }
                        return response.text()
                    })
            .then(token => {
                alert(token)
                this.props.onLogin(token);
            })
            .catch(function () {
                alert("login failed!");
            })
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







