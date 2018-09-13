import {Tab, Tabs} from "react-bootstrap";
import React from "react";

const TabIndex = ()=>(
    <Tabs defaultActiveKey={1} id="tabIndex">
        <Tab eventKey={1} title="To dos">
            Tab 1 content
        </Tab>
        <Tab eventKey={2} title="Statistic">
            Tab 2 content
        </Tab>
    </Tabs>
);


export default TabIndex