
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <Container fluid>
                    <div className="footer-sub">
                        <div className="footer-left">
                            © 2020 bookie.ch. All rights reserved.
                            <div><a href="contact/index.html">Contact Information</a>- <a href="content/about.html">About Us</a></div>
                        </div>
                        <div className="footer-right">
                            <a class="by-bookie" href="http://www.bookie.ch/" target="_blank" title="BOOKIE.ch"></a>
                        </div>
                    </div>
                </Container>
            </footer>
        );
    }
}

export default Footer;
