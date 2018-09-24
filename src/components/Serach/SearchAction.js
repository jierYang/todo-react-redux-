import React from 'react';
import './SearchAction.css'

export default class SearchAction extends React.Component {
    render() {
        return (
            <div className="search">
                <input type="text" placeholder="请输入检索关键字"/>
                <span>
                    <button className="btnSearch">检索</button>
                </span>
            </div>
        )
    }
}