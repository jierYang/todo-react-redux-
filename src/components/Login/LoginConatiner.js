import {Login} from './Login'
import {connect} from "react-redux";
// 【action】 建立 UI 组件的参数到store.dispatch方法的映射,让reducer根据type执行刷新
const mapDispatchToProps = (dispatch) => ({
    onLogin: () => dispatch({type: 'LOGIN', isSucceed: true})
});

// 建立从 state对象到（UI 组件的）props对象的映射关系。
const mapStateToProps = (state) => ({
    logged: state.isAuthenticated
});

const loginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);


// 将这两种组件连起来
export {loginContainer,mapStateToProps} ;