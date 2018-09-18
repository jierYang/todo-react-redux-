import {Tab, Tabs} from "react-bootstrap";
import React from "react";
import TabTodoContainer from "../TodoList/TabTodo";
import TabStatistic from "../Statistic/TabStatistic";

import './Tab.css'
import connect from "react-redux/es/connect/connect";

const TabIndex = (props) => (
    <div className="tabIndex">
        <Tabs defaultActiveKey={1} id="tabIndex">
            <Tab eventKey={1} title="To dos">
                <TabTodoContainer/>
            </Tab>
            <Tab eventKey={2} title="Statistic">
                <TabStatistic numinProgress={props.todoList.filter(t => t.status === 'In progress').length}
                              numblocked={props.todoList.filter(t => t.status === 'Blocked').length}
                              numTodo={props.todoList.filter(t => t.status === 'To do').length}/>
            </Tab>
        </Tabs>
    </div>
)

const mapStateToProps = (state) => ({
    todoList: state.todoList
});

const TabIndexContainer = connect(mapStateToProps, null)(TabIndex);


export default TabIndexContainer;