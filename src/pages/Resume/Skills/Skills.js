import React from 'react';
import Skill from './Skill/Skill';
import './Skills.css';

export default class Skills extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="skills-header">
          <h2 className="heading">SKILLS</h2>
        </div>
        <div className="ratings" style={{ paddingBottom: '12px' }}>
          <div className="ratings__skills">
            <Skill
              skill={this.props.skills[0]}
              updateState={this.props.updateState}
              index={0}
            />
            <Skill
              skill={this.props.skills[1]}
              updateState={this.props.updateState}
              index={1}
            />
            <Skill
              skill={this.props.skills[2]}
              updateState={this.props.updateState}
              index={2}
            />
          </div>
          <div className="ratings__skills">
            <Skill
              skill={this.props.skills[3]}
              updateState={this.props.updateState}
              index={3}
            />
            <Skill
              skill={this.props.skills[4]}
              updateState={this.props.updateState}
              index={4}
            />
            <Skill
              skill={this.props.skills[5]}
              updateState={this.props.updateState}
              index={5}
            />
          </div>
          <div className="ratings__tools">
            <Skill
              skill={this.props.skills[6]}
              updateState={this.props.updateState}
              index={6}
            />
            <Skill
              skill={this.props.skills[7]}
              updateState={this.props.updateState}
              index={7}
            />
            <Skill
              skill={this.props.skills[8]}
              updateState={this.props.updateState}
              index={8}
            />
          </div>
        </div>
      </>
    );
  }
}
