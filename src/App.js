import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import update from 'immutability-helper';

// Page Head
import NavBar from './NavBar/NavBar';

// Page Body
import JobSearch from './pages/JobSearch/JobSearch';
import Home from './pages/Home/Home';
import Login from './pages/LogIn/Login';
import SignUp from './pages/SignUp/SignUp';
import Account from './pages/Account/Account';
import Resume from './pages/Resume/Resume';
import Logout from './pages/Logout/Logout';

// React Componenet for being logged out

const PrivateRouteOut = ({ component: Component, user, updateState, authed, ...props }) => {
  return (
    <Route
      {...props}
      render={props =>
        authed === true ? (
          <Component user={user} updateState={updateState} {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

// React Componenet for being logged in

const PrivateRouteIn = ({ component: Component, user, updateState, authed, ...props }) => {
  return (
    <Route
      {...props}
      render={props =>
        authed === true ? (
          <Component user={user} updateState={updateState} {...props} />
        ) : (
          <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
        )
      }
    />
  );
};

// Checks if local or production

let serverURL;
if (window.location.hostname === 'localhost') {
  serverURL = 'http://localhost:8080';
} else {
  serverURL = 'https://server-project3.herokuapp.com';
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.updateState = this.updateState.bind(this);

    this.state = {
      authed: false,
      user: {
        id: null,
        fullName: 'John Doe',
        email: 'test@yahoo.com',
        addressStreet: 'Somewhere Lane',
        addressCity: 'Aurora, CO 80014',
        phone: '(123) 456-7890',
        portfolioURL: 'www.IEATWEIRDTHINGS.ninja',
        summary:
          'I am a terrible person who does not like to eat bugs, but I do enjoy chocolate sometimes. If you hire me, I might come to work but I make no promises. Take a look at my SKILLZ and consider hiring me',
        skills: [
          'Node.js',
          'React.js',
          'MongoDB',
          'Firebase',
          'MySQL',
          'Express',
          'Eating',
          'Sleeping',
          'Github'
        ],
        userSchool: [
          {
            schoolName: 'Harvard',
            schoolDegree: 'M.D.',
            schoolYearFrom: 2007,
            schoolYearTo: 2011
          },
          {
            schoolName: 'MIT',
            schoolDegree: 'B.S.',
            schoolYearFrom: 2011,
            schoolYearTo: 2015
          }
        ],
        userProjects: [
          {
            projectName: 'Resume-Ninja',
            projectURL: 'www.resume.ninja',
            projectDesc:
              'This project takes is built for new-grad bootcampers that need to find a job! Make a resume, look for a job, make money!'
          },
          {
            projectName: 'elgooG',
            projectURL: 'moc.elgooG.www',
            projectDesc:
              'A destination for everything! The internet is at your fingertips with my AMAZING project'
          }
        ],
        userWork: [
          {
            jobTitle: 'Full Stack Developer',
            jobCompany: 'Google',
            jobDate: '2017 - 2019',
            jobSummary:
              'Handled full stack web development for Google. Surprisingly, they are a simple startup company that utilizes the MERN stack. Leaving for better opportunities!'
          },
          {
            jobTitle: 'Full Stack Developer',
            jobCompany: 'Google',
            jobDate: '2017 - 2019',
            jobSummary:
              'Handled full stack web development for Google. Surprisingly, they are a simple startup company that utilizes the MERN stack. Leaving for better opportunities!'
          },
          {
            jobTitle: 'Full Stack Developer',
            jobCompany: 'Google',
            jobDate: '2017 - 2019',
            jobSummary:
              'Handled full stack web development for Google. Surprisingly, they are a simple startup company that utilizes the MERN stack. Leaving for better opportunities!'
          }
        ]
      }
    };
  }

  async componentWillMount() {
    await axios
      .get(`${serverURL}/api/checkauthentication`)
      .then(response => {
        console.log(response);
        this.updateState(response.data.user, null, null, null, 'user');
        this.updateState(true, null, null, null, 'authed');
      })
      .catch(error => {
        this.updateState(false, null, null, null, 'authed');
      });
    console.log(this.state.authed);
  }

  // ****************  Functions to pass down to components ***************

  // Function to update the state user from children components
  updateState = (valueOne, change, index, valueTwo, root) => {
    // Checks if it needs to update something other than user

    if (root) {
      let newChange = update(this.state, {
        [root]: { $set: valueOne }
      });
      this.setState(newChange);
    } else if (valueTwo) {
      // Checks for two properties and an array value

      let newChange = update(this.state, {
        user: { [valueOne]: { [index]: { [valueTwo]: { $set: change } } } }
      });
      this.setState(newChange);
    } else if (index) {
      // Checks for one property and an array value

      let newChange = update(this.state, {
        user: { [valueOne]: { [index]: { $set: change } } }
      });
      this.setState(newChange);
    } else {
      // Checks for a property value

      let newChange = update(this.state, {
        user: { [valueOne]: { [index]: { $set: change } } }
      });
      this.setState(newChange);
    }
  };

  // ******************** Render Function ********************
  render() {
    return (
      <Router>
        <NavBar authed={this.state.authed} />
        <Switch>
          {/* Non-logged routes */}
          <PrivateRouteOut exact path="/home" component={Home} authed={!this.state.authed} />
          <PrivateRouteOut
            exact
            path="/login"
            component={Login}
            authed={!this.state.authed}
            user={this.state.user}
            updateState={this.updateState}
          />
          <PrivateRouteOut
            exact
            path="/signup"
            component={SignUp}
            authed={!this.state.authed}
            user={this.state.user}
            updateState={this.updateState}
          />

          {/* Logged-in routes */}
          <PrivateRouteIn
            exact
            path="/"
            component={JobSearch}
            authed={this.state.authed}
            user={this.state.user}
            updateState={this.updateState}
          />
          <PrivateRouteIn
            exact
            path="/resume"
            component={Resume}
            authed={this.state.authed}
            user={this.state.user}
            updateState={this.updateState}
          />
          <PrivateRouteIn
            exact
            path="/account"
            component={Account}
            authed={this.state.authed}
            user={this.state.user}
            updateState={this.updateState}
          />
          <PrivateRouteOut
            exact
            path="/logout"
            component={Logout}
            authed={this.state.authed}
            user={this.state.user}
            updateState={this.updateState}
          />
        </Switch>
      </Router>
    );
  }
}
