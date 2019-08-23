import React from "react";
import "./FooterResume.css";
import { Label, Icon } from 'semantic-ui-react'

class FooterResume extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props);
    }
    
    render() {
      return (
        <footer className="footer">
          <div className="footer__inner" contentEditable={true}>
            <Label>
              <Icon name='briefcase' /> {this.props.portfolioUrl}
            </Label>
            <Label>
              <Icon name='phone square' /> {this.props.phoneNumber}
            </Label>
            <Label>
              <Icon name='mail' /> {this.props.email}
            </Label>
          </div>
        </footer>
      );
    }
  }
  
  export default FooterResume