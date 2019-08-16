import React from "react";
import "./Experience.css";
import Job from '../Job/Job'

class Experience extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props);
    }
    
    
    render() {
      return (
        <div className="experience">
          <h2 className="heading">EXPERIENCE</h2>
          <Job jobTitle="HOOLI - FRONT END DEVELOPER //" jobDate="2011 — PRESENT" jobSummary="Affordances user story quantitative vs. qualitative affordances thought leader big data sticky note workflow parallax ideate thinker-maker-doer pair programming." />
          <Job jobTitle="PIED PIPER — ASSISTANT //" jobDate="2013 — 2016" jobSummary="360 campaign venture capital pivot earned media pivot ship it moleskine venture capital. Bootstrapping long shadow prototype latte engaging user story driven pair programming parallax earned media SpaceTeam." />
        </div> 
      );
    }
  }
  
  export default Experience