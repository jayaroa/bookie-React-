
import React, { useState } from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

import Sidebar from "components/Sidebar/Sidebar.js";

// reactstrap components
import {
    Nav, 
    TabContent, 
    TabPane, 
    NavItem, 
    NavLink,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";


function SportsPage(props){
    const [backgroundColor, setBackgroundColor] = useState("transparent");
    const [sidebarOpened, setSidebarOpened] = useState(false);
    const toggleSidebar = () => {
        document.documentElement.classList.toggle("nav-open");
        setSidebarOpened({sidebarOpened: !sidebarOpened})
    };
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
    <>
        <div className="content-page">
            <Sidebar bgColor = { backgroundColor }
                toggleSidebar = { toggleSidebar }
            />
            <div className="content">
                <Row>
                <Col xl="6" lg="6" md="6" className="highlights">
                    <h1 className="">Highlights</h1>
                    <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            4hrs
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            8hrs
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('3'); }}
                        >
                            12hrs
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        234
                    </TabPane>
                    <TabPane tabId="2">
                        1234
                    </TabPane>
                    <TabPane tabId="3">
                        1234
                    </TabPane>
                </TabContent>
                </Col>
                <Col xl="6" lg="6" md="6"></Col>
                </Row>
            </div>
        </div>
    </>
    );

}

export default SportsPage;
