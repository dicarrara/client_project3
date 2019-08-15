import React from "react";
import Skill from "../Skill/Skill";
import "./Skills.css"

class Skills extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props);
    }
    
    render() {
      return (
        <div className="ratings">
          <div className="ratings__skills">
            <h3>Skills</h3>
            <Skill item="HTML5" rating={5} />
            <Skill item="CSS3" rating={5} />
            <Skill item="JavaScript" rating={4} />
            <Skill item="Sass" rating={5} />
            <Skill item="React" rating={4} />
          </div>
          <div className="ratings__skills">
            <Skill item="Bootstrap" rating={4} />
            <Skill item="Node.js" rating={5} />
            <Skill item="Meteor" rating={5} />
            <Skill item="Redux" rating={3} />
            <Skill item="MongoDB" rating={4} />
          </div>
          <div className="ratings__tools">
            <h3>Tools</h3>
            <Skill item="Git" rating={4} />
            <Skill item="Sketch" rating={5} />
            <Skill item="Webstorm IDE" rating={5} />
            <Skill item="iTerm2" rating={4} />
            <Skill item="VS Code" rating={3} />
          </div>
        </div>
      )
    }
  }
  
  export default Skills