import React from "react";
import Education from "../Education/Education";
import Project from "../Project/Project";
import "./History.css"

class History extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props)
    }
    
    render() {
      return (
        <div className="history">
          <h2 className="heading">EDUCATION</h2>
          <Education schoolName="Udacity" schoolLocation="Online Coursework" schoolDegree="Nanodegree" schoolCourse="Full Stack Web Developer // 2017" />
          <Education schoolName="MIT" schoolLocation="Cambridge, MA" schoolDegree="Bachelors of Arts & Science" schoolCourse="Computer Science // 2006 - 2008" />
          <h2 className="heading">SELECTED WORK</h2>
          <Project projectTitle="NUCLEUS - FULL END DEVELOPER // 2017" projectUrl="https://github.com/dicarrara/News" projectDesc="Workflow responsive moleskine convergence personas long shadow user centered design fund food-truck. Agile pivot agile 360 campaign quantitative vs. qualitative actionable insight waterfall is so 2000 and late parallax." />
          <Project projectTitle="DISRUPT APP - FRONT END DEVELOPER // 2016" projectUrl="https://github.com/dicarrara/new-portfolio" projectDesc="Parallax experiential minimum viable product earned media user centered design quantitative vs. qualitative human-centered design latte user centered design convergence sticky note thinker-maker-doer driven." />
        </div>
      );
    }
  }

  export default History