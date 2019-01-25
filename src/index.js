import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar.js';
import Home from './home.js';
import AboutMe from './about.js';
import Projects from './projects.js';
import Footer from './footer.js'

const links = ["Home", "About Me", "Projects"];
const options = {
    "Home" :    { showNav: true, showFooter: true },
    "About Me": { showNav: true, showFooter: true },
    "Projects": { showNav: true, showFooter: true },
};
const dropLinks = {
    "Projects" : ["ML BRDF and Upsampler"]
};
const projectUrl = {
    "ML BRDF and Upsampler" : ["https://97hongjun.github.io/cs184_deep_rendering/"]
}


class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Home",
            currentSubPage: "",
        };
        this.render = this.render.bind(this);
        this.rerender = this.rerender.bind(this);
        this.getActivePage = this.getActivePage.bind(this);
    }

    rerender(pageName) { //doesn't work when passing into navbar
        this.setState({currentPage: pageName});
    }

    getActivePage() {
        switch(this.state.currentPage) {
            case "Home": return <Home/>;
            case "About Me": return <AboutMe/>;
            case "Projects": return <Projects/>;
            default: return null;
        }
    }

    render() {
        return (
          <div>
              {
                  options[this.state.currentPage].showNav
                  ?
                  <Navbar activeLink={this.state.currentPage} onClickFunc={this.rerender} links={links} dropLinks = {dropLinks} projectUrl = {projectUrl}/>
                  :
                  null
              }
              {this.getActivePage()}
              {
                  options[this.state.currentPage].showFooter
                      ?
                      <Footer onClickFunc={this.rerender} links={links}/>
                      :
                      null
              }
          </div>
        );
    }
}

ReactDOM.render(
    <Page/>,
    document.getElementById('root')
);

