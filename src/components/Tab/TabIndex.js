import {Tab, Tabs} from "react-bootstrap";
import React from "react";
import TabTodoContainer from "../TodoList/TabTodo";
import TabStatistic from "../Statistic/TabStatistic";

import './Tab.css'

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


export default TabIndex