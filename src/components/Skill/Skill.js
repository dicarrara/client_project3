import React from "react";
import "./Skill.css";
import { Rating } from "semantic-ui-react";

const Skill = props => (
  <div className="skill">
    <p className="skill__name" contentEditable={true}>
      {props.item}
    </p>
    <Rating
      className="skill__rating"
      icon="star"
      size="mini"
      defaultRating={props.rating}
      maxRating={5}
    />
  </div>
);

export default Skill;
