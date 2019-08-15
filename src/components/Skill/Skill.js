import React from "react";
import "./Skill.css"

// const {
//     Rating    
//   } = semanticUIReact

function Skill(props) {
    return (
      <div className="skill">
        <p className="skill__name" contentEditable={true}>{props.item}</p>
        {/* <Rating className="skill__rating" icon="star" size="mini" defaultRating={props.rating} maxRating={5} /> */}
      </div>
    )
  }

  export default Skill