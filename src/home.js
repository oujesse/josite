import React from 'react';
import './home.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="bgImg">
                    <div className="intro">
                        <p>Jesse Ou</p>
                        <hr/>
                        <div className="subIntro">
                            <h3>Welcome to my Personal Website</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;