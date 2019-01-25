import React from "react";
import './projects.css';

const projs = {
    "TechCrunch Auto Notification Server" : {
        "g" : "https://github.com/oujesse/techCrunchAutoNotification",
        "d" : "This solo project allows users to signup and enter in desired keywords. These " +
            "keywords are then searched for in the latest TechCrunch articles, and when a keyword is found in the article," +
            " the server will notify the user of the article along with all the keywords that matched in the article via " +
            "Chrome/Firefox's push notification system. The server also keeps track of the keyword matching history and displays " +
            "all the articles that have matched with the user's keywords in the case where the users are not online to receive the " +
            "push notification. The server is programmed with Django, and the database is Postgresql. The project features third " +
            "party libraries like django-crontab, suffix-trees, and psycopg2.",
        "pic" : require('./pics/techcrunch.png')
    },
    "ChoreChain" : {
        "g" : "https://github.com/oujesse/ChoreChainClone",
        "d" : "This Fall 2018 Blockchain at Berkeley internal project is aimed at incentivizing chore completion in households. The project is a series of Ethereum smart contracts that records users' chore completions through permissioned voting within households and assigns ratings to those users based on their record of chore completion compared to their other housemates. This rating is then seen by other users, and when those users wish to look for new housemates to live with, they use the rating. This ensures that good housemates are matched with other good housemates, and it incentivizes users to do their chores. I created the chore and rating smart contracts, and I also built the Web3 interface.",
        "pic" : require('./pics/chorechain.png')
    },
    "Fintel" : {
        "newPage" : "",
        "g" : "https://github.com/ultraeric/hack-intuit-3.git",
        "d" : "Fintel is a web application developed during the 24 hour Hack-Intuit Hackathon 2017 that won 3rd place" +
            "and is dedicated to giving financial awareness to the poor. A big problem is that, " +
            "due to low income, the poor do not have access to good financial education, leading to ineffective financial " +
            "management that worsens their financial situation even further, making it even harder for the poor to escape " +
            "their economic situation. To address this issue, Fintel keeps track of each user's financial history and gives " +
            "financial advice to the user via a chat bot that varies with the user's different expenses. To keep track of the user's " +
            "expenses, the app allowed the users to input their expenses manually, and it also featured a receipt scanner where " +
            "users could take a picture of their receipt and send it to the chatbot which would then use an ML algorithm " +
            "to input the data automatically. The app also featured a risk factor calculator which output how at risk the user " +
            "was to falling into poverty based on the user's demographic and the data given at the hackathon.",
        "pic" : require('./pics/Fintel.png')
    },
    "ML BRDF Converter/Upsampler" : {
        "url" : "https://97hongjun.github.io/cs184_deep_rendering/",
        "d" : "This machine learning algorithm took images of computer generated objects and converted their material. " +
            "It was capable of taking diffuse, stone like, objects and returning the image with that object with the same" +
            " shape but instead made out of glass. The algorithm was also capable of image upsampling. This upsampling also " +
            "featured immense speedups compared to high quality computer image generation. A possible use case of this is " +
            "abbreviating the high quality image generation process. For example, by " +
            "generating a low quality image within a second, we can use this algorithm to generate a higher quality version that would " +
            "normally take 10-30 minutes to generate with conventional methods.",
        "pic" : require('./pics/mlbrdf.png'),
    },
    "Cloth Simulator" : {
        "d" : "This project was designed to replicate real world cloth physics in 3D graphics. To simulate the cloth physics, I " +
            "represented the cloth as a large grid of point masses that reacted to gravity acceleration and spring forces caused by " +
            "other point masses. This project also featured object collision and self-collision.",
        "pic" : require('./pics/cloth.jpg'),
    }
};

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.gitLink = this.gitLink.bind(this);
        this.renderProject = this.renderProject.bind(this);
        this.projPic = this.projPic.bind(this);
    }

    gitLink(key) {
        if ("g" in projs[key]) {
            return (
                <>
                    <a href={projs[key]["g"]}>Github</a>
                </>
            );
        }
        return "";
    }

    projPic(key) {
        if ("pic" in projs[key]) {
            return (
                <th className="picCell" style = {{"background-image": "url(" + projs[key]["pic"] + ")"}}>
                    <br/>
                </th>
            );
        }
        return (
            <th className="picCell">
                <br/>
            </th>
        );
    }

    renderNewProj(key) {
        if ("url" in projs[key]) {
            return <a href={projs[key]["url"]}>{key}</a>;
        }
        else {
            return <a>{key}</a>;
        }
    }

    renderProject() {
        return (
            <>
                <table className="projTable">
                        {
                            Object.keys(projs).map((key, index) => (
                                <>
                                    <br/>
                                    <tr>
                                        <div className="projDetails">
                                            <div className="projDetailsInner">
                                                <div className="projTitle">{this.renderNewProj(key)}</div>
                                                <div className="projGit">{this.gitLink(key)}</div>
                                                <div className="projDesc">{projs[key]["d"]}</div>
                                            </div>
                                        </div>
                                        {this.projPic(key)}
                                    </tr>
                                </>
                            ))
                        }
                </table>
            </>
        );
    }

    render() {
        return (
            <div>
                <div className="projBG">
                    <div className="innerProjBG">
                        <div className="proj">
                            <div className="projHeader"><h1>Projects</h1></div>
                            <br/>
                            {this.renderProject()}
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;