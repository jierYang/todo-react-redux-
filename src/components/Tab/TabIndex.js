import {Tab, Tabs} from "react-bootstrap";
import React from "react";
import TabTodoContainer from "../TodoList/TabTodo";
import TabStatistic from "../Statistic/TabStatistic";

import './Tab.css'
import connect from "react-redux/es/connect/connect";

let numinProgress = 0;

let numblocked = 0;

let numTodo = 0;




function countNumber (){
    numinProgress = this.props.todoList.filter(t => t.label !== 'In progress').length;
    numblocked = this.props.todoList.filter(t => t.label !== 'Blocked').length;
    numTodo = this.props.todoList.filter(t => t.label !== 'To do').length;
}



const data = [
    {value: numinProgress, name: "In progress"},
    {value: numblocked, name: "Blocked"},
    {value: numTodo, name: "To do"}
]

const TabIndex = () => (
    <div className="tabIndex">
        <Tabs defaultActiveKey={1} id="tabIndex">
            <Tab eventKey={1} title="To dos">
                <TabTodoContainer/>
            </Tab>
            <Tab eventKey={2} title="Statistic">
                <TabStatistic/>
            </Tab>
        </Tabs>
    </div>
);

const mapStateToProps = (state) => ({
    todoList: state.todoList
});

const TabIndexContainer = connect(mapStateToProps, null)(TabIndex);


export default TabIndexContainer;