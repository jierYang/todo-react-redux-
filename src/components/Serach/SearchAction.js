import React from 'react';
import './SearchAction.css'
import connect from "react-redux/es/connect/connect";

class SearchAction extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchByAction = this.handleSearchByAction.bind(this);
    }

    handleSearchByAction() {
        debugger
        this.props.initList(document.getElementById("searchContent").value, this.props.token);
    }

    render() {
        return (
            <div className="search">
                <input type="text" id="searchContent" placeholder="请输入检索关键字"/>
                <span>
                    <button className="btnSearch" onClick={this.handleSearchByAction}>检索</button>
                </span>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    initList: (action, token) => (
        fetch(`/todos/search/${action}`, {
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

const mapStateToProps = (state) => ({
    token: state.authenticatedMsg.token
});

const SearchActionContainer = connect(mapStateToProps, mapDispatchToProps)(SearchAction);

export default SearchActionContainer;