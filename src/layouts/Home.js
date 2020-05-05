import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// core components
import Header from "components/Header/Header.js"
import HomeNavbar from "components/Navbars/HomeNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";

import logoImg1 from "assets/img/black-bookie.png";
import logoImg2 from "assets/img/white-bookie.png";

var ps;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "blue",
            logoImg1: logoImg1,
            logoImg2: logoImg2,
            sidebarOpened: document.documentElement.className.indexOf("nav-open") !== -1
        };
    }
    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            document.documentElement.className += " perfect-scrollbar-on";
            document.documentElement.classList.remove("perfect-scrollbar-off");
            ps = new PerfectScrollbar(this.refs.mainPanel, { suppressScrollX: true });
            let tables = document.querySelectorAll(".table-responsive");
            for (let i = 0; i < tables.length; i++) {
                ps = new PerfectScrollbar(tables[i]);
            }
        }
    }
    componentWillUnmount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps.destroy();
            document.documentElement.className += " perfect-scrollbar-off";
            document.documentElement.classList.remove("perfect-scrollbar-on");
        }
    }
    componentDidUpdate(e) {
            if (e.history.action === "PUSH") {
                if (navigator.platform.indexOf("Win") > -1) {
                    let tables = document.querySelectorAll(".table-responsive");
                    for (let i = 0; i < tables.length; i++) {
                        ps = new PerfectScrollbar(tables[i]);
                    }
                }
                document.documentElement.scrollTop = 0;
                document.scrollingElement.scrollTop = 0;
                this.refs.mainPanel.scrollTop = 0;
            }
        }
        // this function opens and closes the sidebar on small devices
    toggleSidebar = () => {
        document.documentElement.classList.toggle("nav-open");
        this.setState({ sidebarOpened: !this.state.sidebarOpened });
    };
    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/home") {
                return (
                    <Route path = { prop.layout + prop.path }
                        component = { prop.component }
                        key = { key }
                    />
                );
            } else {
                return null;
            }
        });
    };
    handleBgClick = color => {
        this.setState({ backgroundColor: color });
    };
    getBrandText = path => {
        for (let i = 0; i < routes.length; i++) {
            if (
                this.props.location.pathname.indexOf(
                    routes[i].layout + routes[i].path
                ) !== -1
            ) {
                return routes[i].name;
            }
        }
        return "Brand";
    };
    render() {
        return (
            <>
                <div className = "wrapper" >
                    <div className = "main-panel" ref = "mainPanel" data = { this.state.backgroundColor }>
                        <Header></Header>
                        <HomeNavbar {...this.props }
                            logoImg1 = { this.state.logoImg1 }
                            logoImg2 = { this.state.logoImg2 }
                            brandText = { this.getBrandText(this.props.location.pathname) }
                            toggleSidebar = { this.toggleSidebar }
                            sidebarOpened = { this.state.sidebarOpened }/>
                        {/* <Sidebar {...this.props } routes = { routes } bgColor = { this.state.backgroundColor }
                            logo = {
                                {
                                    outterLink: "https://www.creative-tim.com/",
                                    text: "Creative Tim",
                                    imgSrc: logo
                                }
                            }
                            toggleSidebar = { this.toggleSidebar }
                        /> */}
                        {console.log("hyoooo", this.getRoutes(routes).map(i => i.props.path))}
                        <Switch>
                            { this.getRoutes(routes) }
                            <Redirect from = "*" to = "/home/live" />
                            
                        </Switch>
                        { // we don't want the Footer to be rendered on map page
                        this.props.location.pathname.indexOf("maps") !== -1 ? null : (<Footer fluid />)}
                    </div>
                </div>
            </>
        );
    }
}

export default Home;