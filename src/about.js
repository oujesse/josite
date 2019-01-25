import React from 'react';
import './about.css';

const skills = [["Python", "python"], ["Java", "java"], ["Javascript", 'js'],
    ["Microsoft Office", "mo"], ["C", "c"], ["C++", "cplus"], ["React.js", "rea"],
    ["Photoshop", "pshop"]];

const courseHistory = [
        ["CompSci 188: Introduction to Artificial Intelligence", "Spring 2019"],
        ["CompSci 161: Computer Security", "Spring 2019"],
        ["CompSci C100: Principles & Techniques of Data Science", "Spring 2019"],
        ["CompSci 176: Algorithms for Computational Biology", "Fall 2018"],
        ["CompSci 198: Blockchain Fundamentals", "Fall 2018"],
        ["CompSci 168: Internet Architecture and Protocols", "Fall 2018"],
        ["CompSci 184: Foundations of Computer Graphics", "Spring 2018"],
        ["CompSci 61C: Great Ideas of Computer Architecture (Machine Structures)", "Spring 2018"],
        ["Math 53: Multivariable Calculus", "Spring 2018"],
        ["CompSci 170: Efficient Algorithms and Intractable Problems", "Fall 2017"],
        ["Electrical Engineering 16A: Designing Information Devices and Systems I", "Fall 2017"],
        ["CompSci 61B: Data Structures", "Spring 2017"],
        ["CompSci 70: Discrete Mathematics and Probability Theory", "Spring 2017"],
        ["CompSci 61A: The Structure and Interpretation of Computer Programs", "Fall 2016"],
        ["Math 54: Linear Algebra and Differential Equations", "Fall 2016"]];

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.renderSkillCol = this.renderSkillCol.bind(this);
    }

    renderSkillCol(first) {
        var i;
        var i2;
        if (first) {
            i = 0;
            i2 = Math.ceil(skills.length / 2);
        }
        else {
            i = Math.ceil(skills.length / 2);
            i2 = skills.length
        }
        return skills.slice(i, i2).map((skill, index) => (
            <>
                <tr>
                    <div className="skillText">{skill[0]}</div>
                    <th className={skill[1]}><br/></th>
                </tr>
                <div className="skillBreak"><br/></div>
            </>
        ));
    }

    renderCourseCol(first) {
        var i;
        var i2;
        if (first) {
            i = 0;
            i2 = Math.ceil(courseHistory.length / 2);
        }
        else {
            i = Math.ceil(courseHistory.length / 2);
            i2 = courseHistory.length;
        }
        return courseHistory.slice(i, i2).map((c, index) => (
            <div className="course">
                <div className="courseName">{c[0]}</div>
                <div className="courseSub">{c[1]}</div>
            </div>
        ));
    }

    render() {
        return (
            <div className="aboutBG">
                <div className="innerBG">
                    <div className="about">
                        <div className="aboutHeader">
                            <h1>About Me</h1>
                        </div>
                        <div className="aboutBody">
                            <div className="mePic">
                                <img src={require('./pics/jesse.jpg')}/>
                            </div>
                            <div className="aboutParagraph">
                                <h2>Who am I?</h2>
                                <p>Hello, I'm Jesse. I'm a computer science major at the University of California
                                    Berkeley, and I am also a developer for Blockchain at Berkeley. I'm a third year at
                                    this
                                    school, and I am graduating in May, 2020 with a Bachelor's degree.
                                    I have been coding for about 5 years, and I have experience in React based web
                                    development and data
                                    science. </p>
                            </div>
                        </div>
                        <div className="secSplit"><br/></div>
                        <div className="aboutSkills">
                            <div className="aboutHeader2"><p>My Skills</p></div>
                            <div className="skillBreak"><br/></div>
                            <div className="skillCol">
                                <table>
                                    {this.renderSkillCol(true)}
                                </table>
                            </div>
                            <div className="skillCol2">
                                <table>
                                    {this.renderSkillCol(false)}
                                </table>
                            </div>
                        </div>
                        <div className="secSplit"><br/></div>
                        <div className="courses">
                            <div className="aboutHeader2"><p>Course History</p></div>
                            <div className="skillBreak"><br/></div>
                            <div className="courseCol">
                                {this.renderCourseCol(true)}
                            </div>
                            <div className="courseCol2">
                                {this.renderCourseCol(false)}
                            </div>
                        </div>
                        <div className="secSplit"><br/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;
