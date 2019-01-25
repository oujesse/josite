import React from "react";
import './footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <div className="foot">
                <div className="footRow">
                    <div className="footerLinkCol">
                        <h2>Links</h2>
                        {
                            this.props.links.map((link, index) => (
                                <div className="footerLink"
                                     onClick={() => this.props.onClickFunc(link)}
                                >
                                    <a>{link}</a>
                                </div>
                            ))
                        }
                    </div>
                    <div className="footerIcons">
                        <h2>Contact Me</h2>
                        <div className="contactInfo">
                            <div className="contact">
                                <img src={require("./buttons/phone.png")}/>
                                <p>+1 224-241-6573</p>
                            </div>
                            <div className="contact">
                                <img src={require("./buttons/makefg.png")}/>
                                <p>jesse.ou@berkeley.edu</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="footRow2">
                    <div className="socialButtons">
                        <div className="leftButtonSpace"><br/></div>
                        <a href="https://github.com/oujesse">
                            <img src={require("./buttons/github.png")}/>
                        </a>
                        <a href="https://www.linkedin.com/in/jesse-ou-42a30a133/">
                            <img src={require("./buttons/linkedin.png")}/>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100011634283903&ref=bookmarks">
                            <img src={require("./buttons/facebook.png")}/>
                        </a>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}

export default Footer;