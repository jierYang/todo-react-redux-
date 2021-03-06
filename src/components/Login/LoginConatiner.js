import {Login} from './Login'
import {connect} from "react-redux";
import Redirect from "react-router-dom/es/Redirect";
import React from "react";

// 【action】 建立 UI 组件的参数到store.dispatch方法的映射,让reducer根据type执行刷新
const mapDispatchToProps = (dispatch) => ({
    onLogin: (token) => dispatch({type: 'LOGIN', isSucceed: true, token: token}),

    initList: (token) => (
        fetch('/todos', {
            method: 'get',
            headers: {
                'Authorization': token
            }
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                dispatch({type: "INIT_TODO", todoList: myJson.content})
            }))

});

// 建立从 state对象到（UI 组件的）props对象的映射关系。
const mapStateToProps = (state) => ({
    logged: state.authenticatedMsg.isSucceed
});

const loginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

const withAuthentication = (WrappedComponent) => {
    const View = (props) => {
        const {logged, ...rest} = props;

        return (
            <div>
                {!logged && <Redirect to="/login"/>}
                {logged && <WrappedComponent  {...rest}/>}
            </div>
        );
    };

    return connect(mapStateToProps)(View);
};

// 将这两种组件连起来
export {loginContainer, withAuthentication} ;