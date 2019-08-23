import React from "react";
import Skill from "../Skill/Skill";
import "./Skills.css";

class Skills extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    
    this.state ={

    }
  }

  render() {
    return (
      <>
        <div className="skills-header">
          <h2 className="heading">SKILLS</h2>
        </div>
        <div className="ratings">
          <div className="ratings__skills">
            <Skill item="HTML5" rating={5} />
            <Skill item="CSS3" rating={5} />
            <Skill item="JavaScript" rating={4} />
          </div>
          <div className="ratings__skills">
            <Skill item="Sass" rating={5} />
            <Skill item="React" rating={4} />
            <Skill item="Bootstrap" rating={4} />
          </div>
          <div className="ratings__tools">
            <Skill item="Git" rating={4} />
            <Skill item="Sketch" rating={5} />
            <Skill item="Webstorm IDE" rating={5} />
          </div>
        </div>
      </>
    );
  }
}

export default Skills;
