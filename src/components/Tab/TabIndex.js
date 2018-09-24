import {Tab, Tabs} from "react-bootstrap";
import React from "react";
import {TabTodoContainer} from "../TodoList/TabTodo";
import TabStatistic from "../Statistic/TabStatistic";

import './Tab.css'
import connect from "react-redux/es/connect/connect";
import SearchActionContainer from "../Serach/SearchAction";

const TabIndex = (props) => (
    <div className="tabIndex">
        <Tabs defaultActiveKey={1} id="tabIndex">
            <Tab eventKey={1} title="To dos">
                <SearchActionContainer/>
                <TabTodoContainer/>
            </Tab>
            <Tab eventKey={2} title="Statistic">
                <TabStatistic
                    numinProgress={props.todoList.filter(t => t.status !== null && t.status.name === 'In progress').length}
                    numblocked={props.todoList.filter(t => t.status !== null && t.status.name === 'Blocked').length}
                    numTodo={props.todoList.filter(t => t.status !== null && t.status.name === 'To do').length}/>
            </Tab>
        </Tabs>
    </div>
)

const mapStateToProps = (state) => ({
    todoList: state.todoList
});

const TabIndexContainer = connect(mapStateToProps, null)(TabIndex);


export default TabIndexContainer;