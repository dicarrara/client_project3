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
              skill={this.props.skills.skill1}
              value={'skill1'}
              updateState={this.props.updateState}
            />
            <Skill
              skill={this.props.skills.skill2}
              value={'skill2'}
              updateState={this.props.updateState}
            />
            <Skill
              skill={this.props.skills.skill3}
              value={'skill3'}
              updateState={this.props.updateState}
            />
          </div>
          <div className="ratings__skills">
            <Skill
              skill={this.props.skills.skill4}
              value={'skill4'}
              updateState={this.props.updateState}
            />
            <Skill
              skill={this.props.skills.skill5}
              value={'skill5'}
              updateState={this.props.updateState}
            />
            <Skill
              skill={this.props.skills.skill6}
              value={'skill6'}
              updateState={this.props.updateState}
            />
          </div>
          <div className="ratings__tools">
            <Skill
              skill={this.props.skills.skill7}
              value={'skill7'}
              updateState={this.props.updateState}
            />
            <Skill
              skill={this.props.skills.skill8}
              value={'skill8'}
              updateState={this.props.updateState}
            />
            <Skill
              skill={this.props.skills.skill9}
              value={'skill9'}
              updateState={this.props.updateState}
            />
          </div>
        </div>
      </>
    );
  }
}
