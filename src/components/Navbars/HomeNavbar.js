
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { Link } from "react-router-dom";

// reactstrap components
import {
    Collapse,
    Input,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Modal,
    Form,
} from "reactstrap";

class HomeNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        collapseOpen: false,
        modalSearch: false,
        color: "navbar-transparent"
        };
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateColor);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateColor);
    }
    // function that adds color white/transparent to the navbar on resize (this is for the collapse)
    updateColor = () => {
        if (window.innerWidth < 993 && this.state.collapseOpen) {
        this.setState({
            color: "bg-white"
        });
        } else {
        this.setState({
            color: "navbar-transparent"
        });
        }
    };
    // this function opens and closes the collapse on small devices
    toggleCollapse = () => {
        if (this.state.collapseOpen) {
        this.setState({
            color: "navbar-transparent"
        });
        } else {
        this.setState({
            color: "bg-white"
        });
        }
        this.setState({
        collapseOpen: !this.state.collapseOpen
        });
    };
    // this function is to open the Search modal
    toggleModalSearch = () => {
        this.setState({
        modalSearch: !this.state.modalSearch
        });
    };
    render() {
        return (
        <>
            <Navbar className={classNames("navbar-absolute", this.state.color)} expand="lg">
                <div className="navbar-wrapper">
                    <div className={classNames("navbar-toggle d-inline", {toggled: this.props.sidebarOpened})}>
                        <button
                        className="navbar-toggler"
                        type="button"
                        onClick={this.props.toggleSidebar}
                        >
                            <span className="navbar-toggler-bar bar1" />
                            <span className="navbar-toggler-bar bar2" />
                            <span className="navbar-toggler-bar bar3" />
                        </button>
                    </div>
                    <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                        <img className="d-none d-lg-block" src={this.props.logoImg1} alt="logo"/>
                        <img className="d-block d-lg-none" src={this.props.logoImg2} alt="logo"/>
                    </NavbarBrand>
                </div>
                <button
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#navigation"
                    data-toggle="collapse"
                    id="navigation"
                    type="button"
                    onClick={this.toggleCollapse}
                >
                    <span className="navbar-toggler-bar navbar-kebab" />
                    <span className="navbar-toggler-bar navbar-kebab" />
                    <span className="navbar-toggler-bar navbar-kebab" />
                </button>
                <Collapse navbar isOpen={this.state.collapseOpen}>
                    <Nav navbar className="mr-auto">
                        <NavItem>
                            <NavLink to="/home/sports" tag={Link}>
                                Sports
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/home/live" tag={Link}>
                                Live
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/index" tag={Link}>
                                Virtual
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/index" tag={Link}>
                                Pools
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/index" tag={Link}>
                                Contacts
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Form className="search-bar d-none d-lg-block">
                        <input type="text" className="input-search" placeholder="Search..." id="searchbox" name="searchbox"/>
                        <button type="button" className="btn-search"></button>
                    </Form>
                </Collapse>
            </Navbar>
        </>
        );
    }
}

export default HomeNavbar;
