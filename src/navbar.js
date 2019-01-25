import React from "react";
import './navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
        this.isClassActive = this.isClassActive.bind(this);
        this.underLineActive = this.underLineActive.bind(this);
        this.dropDownMenu = this.dropDownMenu.bind(this);
        this.navBoxHover = this.navBoxHover.bind(this);
        this.noNavBoxHover = this.noNavBoxHover.bind(this);
        this.linkColor = this.linkColor.bind(this);
        this.resize = this.resize.bind(this);
        this.hideNavBox = this.hideNavBox.bind(this);
        this.showNavIcon = this.showNavIcon.bind(this);
        this.navIconHover = this.navIconHover.bind(this);
        this.noNavIconHover = this.noNavIconHover.bind(this);
        this.navIconColor = this.navIconColor.bind(this);
        this.displayIconDrops = this.displayIconDrops.bind(this);
        this.dropLinkRedirect = this.dropLinkRedirect.bind(this);
        if (window.innerWidth <= 1100) {
            this.state = {hideNav : true, iconDrops : false}
        }
        else {
            this.state = {hideNav : false, iconDrops : false}
        }
    }

    /*hoverDropDown(i) {

    }*/

    isClassActive(link) {
        return (link === this.props.activeLink) ? "active" : "";
    }

    underLineActive(link, h) {
        return (link === this.props.activeLink) ? h : 10;
    }

    dropLinkRedirect(link) {
        if (link in this.props.projectUrl) {
            return <a className="outerDropLink" href={this.props.projectUrl[link]}><div className="dropLink"  style={{"color" : this.dropLinkColor(link)}}>{link}</div></a>;
        }
        else {
            return <div className="dropLink"  style={{"color" : this.dropLinkColor(link)}}>{link}</div>;
        }
    }

    dropDownMenu(link, height) {
        if (link in this.props.dropLinks && this.state[link]) {
            return (
                <div className="dropMenu"
                     style={{"top": height + "px",}}
                >
                    {this.props.dropLinks[link].map((dropLink, index) =>
                        (<div style={{"height": height + "px", "background" : this.linkBGColor(dropLink)}}
                              onMouseEnter={() => this.navBoxHover(dropLink)}
                              onMouseLeave={() => this.noNavBoxHover(dropLink)}>
                            {this.dropLinkRedirect(dropLink)}
                        </div>))}
                </div>
            );
        }
        return null;
    }

    navBoxHover(link) {
        this.setState({[link] : true});
    }

    noNavBoxHover(link) {
        this.setState({[link] : false});
    }

    linkColor(link) {
        return (this.state[link]) ? "orange" : "black";
    }

    dropLinkColor(link) {
        return (this.state[link]) ? "#e69500" : "black";
    }

    linkBGColor(link) {
        return (this.state[link]) ? "#d2e7f9" : "";
    }

    resize() {
        var currentWidth = (window.innerWidth <= 1100);
        if (currentWidth !== this.state.hideNav) {
            this.setState({hideNav : currentWidth});
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    hideNavBox() {
        return (this.state.hideNav) ? "none" : "table";
    }

    showNavIcon() {
        return (this.state.hideNav) ? "table" : "none";
    }

    navIconHover() {
        this.setState({"navIcon" : true});
    }

    noNavIconHover() {
        if(!this.state.iconDrops) {
            this.setState({"navIcon" : false});
        }
    }

    navIconColor() {
        return (this.state["navIcon"]) ? "orange" : "";
    }

    displayIconDrops() {
        var id = !this.state.iconDrops;
        this.setState({iconDrops : id, "navIcon" : true});
    }

    doesIconDrop() {
        return (this.state.iconDrops && this.state.hideNav) ? "" : "none";
    }


    render() {
        var navbarHeight = 50;
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <div style={{padding: "0 0 " + navbarHeight + "px",}}/>
                <div className="navbar" style={{height: navbarHeight + "px",}}>
                    <div className="navBoxSpace" style = {{"display" : this.hideNavBox()}}><br/></div>
                    {
                        this.props.links.map((link, index) =>
                            (
                                <div className="navBox"
                                     key={index}
                                     onClick={() => this.props.onClickFunc(link)}
                                     onMouseEnter = {() => this.navBoxHover(link)}
                                     onMouseLeave = {() => this.noNavBoxHover(link)}
                                     style = {{"display" : this.hideNavBox()}}
                                >
                                    <div className="link" style={{"color" : this.linkColor(link)}}>{link}</div>
                                    <div className={this.isClassActive(link)}
                                         style={{"background-position-y": this.underLineActive(link, navbarHeight - 10) + "px",}}/>
                                    {this.dropDownMenu(link, navbarHeight - 7)}
                                </div>
                            )
                        )
                    }
                    <div className="navIconSpace" style = {{"display" : this.showNavIcon()}}><br/></div>
                    <div className="navIcon" style={{"display" : this.showNavIcon()}}
                         onMouseEnter={() => this.navIconHover()}
                         onMouseLeave={() => this.noNavIconHover()}
                         onClick={() => this.displayIconDrops()}
                    >
                        <i class="fa fa-bars" style={{"font-size" : navbarHeight - 20, "transform" : "translate(0, " +
                                (navbarHeight/2 - (navbarHeight - 20)/2) + "px)",
                            "color" : this.navIconColor()
                        }}></i>
                    </div>
                    <div className="iconDropMenu" style={{"top": navbarHeight + "px", display : this.doesIconDrop()}}>
                        {this.props.links.map((iconLink, index) =>
                            (
                            <div className="iconDropLinkBox"
                                 onMouseEnter={() => this.navBoxHover(iconLink)}
                                 onMouseLeave={() => this.noNavBoxHover(iconLink)}
                                 style={{"height" : navbarHeight, "background" : this.linkBGColor(iconLink)}}
                                 onClick = {() => this.props.onClickFunc(iconLink)}
                            >
                                <div className="dropLink" style={{"color" : this.dropLinkColor(iconLink)}}>{iconLink}</div>
                            </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;