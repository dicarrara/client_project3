import React from 'react';
import './Skill.css';
import { Rating } from 'semantic-ui-react';

const Skill = props => (
  <div className="skill">
    <p className="skill__name" contentEditable={true}>
      {props.item}
    </p>
  </div>
);

export default Skill;
