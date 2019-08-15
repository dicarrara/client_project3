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
          <Job jobTitle="HOOLI - FRONT END DEVELOPER //" jobDate="2011 — PRESENT" jobSummary="Affordances user story quantitative vs. qualitative affordances thought leader big data sticky note workflow parallax ideate thinker-maker-doer pair programming. Big data entrepreneur intuitive engaging sticky note fund paradigm thought leader innovate. Physical computing cortado human-centered design user centered design venture capital innovate waterfall is so 2000 and late integrate prototype grok. Sticky note ideate responsive driven viral actionable insight engaging integrate user story integrate." />
          <Job jobTitle="PIED PIPER — ASSISTANT //" jobDate="2013 — 2016" jobSummary="360 campaign venture capital pivot earned media pivot ship it moleskine venture capital. Bootstrapping long shadow prototype latte engaging user story driven pair programming parallax earned media SpaceTeam. Co-working workflow fund pitch deck human-centered design food-truck parallax driven user centered design sticky note co-working SpaceTeam affordances quantitative vs. qualitative. Sticky note pitch deck actionable insight hacker SpaceTeam paradigm SpaceTeam latte." />
        </div> 
      );
    }
  }
  
  export default Experience