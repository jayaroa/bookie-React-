
import React, { useState } from "react";
// import { NavLink, Link } from "react-router-dom";

// reactstrap components
import { Nav, TabContent, TabPane, NavItem, NavLink } from "reactstrap";
import classnames from 'classnames';


function Sidebar(props){
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
    const menuAry = [
        {
            name: "Soccer",
            iconClass: "icon-soccer"
        },
        {
            name: "Tennis",
            iconClass: "icon-tennis"
        },
        {
            name: "American Football",
            iconClass: "icon-af"
        },
        {
            name: "Ice Hockey",
            iconClass: "icon-ih"
        },
        {
            name: "Waterpolo",
            iconClass: "icon-waterpolo"
        },
        {
            name: "Darts",
            iconClass: "icon-darts"
        },
        {
            name: "Golf",
            iconClass: "icon-golf"
        },
        {
            name: "Boxing/UFC",
            iconClass: "icon-boxing"
        },
        {
            name: "Chess",
            iconClass: "icon-chess"
        },
        {
            name: "Cycling",
            iconClass: "icon-cycling"
        },
        {
            name: "Biathlon",
            iconClass: "icon-biathlon"
        },
        {
            name: "Entertainment",
            iconClass: "icon-entertainment"
        },
        {
            name: "Politics",
            iconClass: "icon-politics"
        },
        {
            name: "Netball",
            iconClass: "icon-netball"
        },
        {
            name: "Swimming",
            iconClass: "icon-swimming"
        },
        {
            name: "Athletics",
            iconClass: "icon-athletics"
        },
        {
            name: "Sailing",
            iconClass: "icon-"
        },
        {
            name: "Surfing",
            iconClass: "icon-sailing"
        }
    ];

    let menuList= [];
    for(let i = 0; i < menuAry.length; i++) {
        menuList.push(
        <li className="menu-item" key={menuAry[i].name}>
            <a href="" className="menu-link">
                <i className={menuAry[i].iconClass}></i>
                <span>{menuAry[i].name}</span>
            </a>
        </li>
        )
    }
    return (
        <>
        <div className="sidebar" data={props.bgColor}>
            <div className="sidebar-wrapper">
                <div className="top-leagues bg-orange">
                    <span className="leagues-title text-black">Rio 2016</span>
                </div>
                <div className="top-leagues bg-black">
                    <span className="leagues-title text-white">Top Leagues</span>
                </div>
                <div className="top-leagues bg-black m-0">
                    <span className="leagues-title text-orange">Sports</span>
                </div>
                <div className="tab-lists">
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
                            <ul className="menu-items">
                                {menuList}
                            </ul>
                        </TabPane>
                        <TabPane tabId="2">
                            <ul className="menu-items">
                                {menuList}
                            </ul>
                        </TabPane>
                        <TabPane tabId="3">
                            <ul className="menu-items">
                                {menuList}
                            </ul>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
        </>
        );
    }

export default Sidebar;
