import React, { Component } from 'react';
import { MDBBtn, MDBListGroup, MDBListGroupItem } from 'mdbreact';
import axios from 'axios';

let serverURL;
if (window.location.hostname === 'localhost') {
  serverURL = 'http://localhost:8080';
} else {
  serverURL = 'https://server-project3.herokuapp.com';
}

export default class CardForJob extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  destroyItem = async e => {
    e.preventDefault();
    console.log(this.props.info._id);
    let res = await axios.delete(`${serverURL}/api/account/delete`, {
      data: {
        _id: this.props.id,
        data: this.props.identify,
        itemID: this.props.info._id
      }
    });
    console.log(res);

    this.props.stateGrab();
  };

  render() {
    return (
      <MDBListGroup style={{ width: '22rem' }}>
        <MDBListGroupItem>
          <ul
            style={{
              listStyle: 'none',
              textAlign: 'left',
              marginBottom: '16px',
              paddingLeft: '0px'
            }}
          >
            {Object.keys(this.props.info).map((key, i) =>
              key !== '_id' ? (
                <li key={i}>
                  <strong>{key}</strong>: {this.props.info[key]}
                </li>
              ) : (
                ''
              )
            )}
          </ul>
          {this.props.info._id ? (
            <MDBBtn color="red" outline type="delete" onClick={this.destroyItem}>
              Delete
            </MDBBtn>
          ) : (
            ''
          )}
        </MDBListGroupItem>
      </MDBListGroup>
    );
  }
}
