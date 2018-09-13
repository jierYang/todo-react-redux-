import {Tab, Tabs} from "react-bootstrap";
import React from "react";
import TabTodo from "./TabTodo";
import TabStatistic from "./TabStatistic";

const TabIndex = ()=>(
    <Tabs defaultActiveKey={1} id="tabIndex">
        <Tab eventKey={1} title="To dos">
            <TabTodo/>
        </Tab>
        <Tab eventKey={2} title="Statistic">
            <TabStatistic/>
        </Tab>
    </Tabs>
);


export default TabIndex