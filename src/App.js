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

const PrivateRouteOut = ({ component: Component, user, func, authed, ...props }) => {
  return (
    <Route
      {...props}
      render={props =>
        authed === true ? (
          <Component user={user} func={func} {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

const PrivateRouteIn = ({ component: Component, user, func, authed, ...props }) => {
  return (
    <Route
      {...props}
      render={props =>
        authed === true ? (
          <Component user={user} func={func} {...props} />
        ) : (
          <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
        )
      }
    />
  );
};

let serverURL;
if (window.location.hostname === 'localhost') {
  serverURL = 'http://localhost:8080';
} else {
  serverURL = 'https://server-project3.herokuapp.com';
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.func.authFunc = this.func.authFunc.bind(this);
    this.func.updateStateResumeObj = this.func.updateStateResumeObj.bind(this);
    this.func.updateStateResumeArr = this.func.updateStateResumeArr.bind(this);

    this.state = {
      authed: false,
      user: {
        id: 123,
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

  async componentDidMount() {
    await axios
      .get(`${serverURL}/api/checkauthentication`)
      .then(response => {
        console.log(response);
        this.setState({
          authed: true
        });
      })
      .catch(error => {
        this.setState({ authed: false });
      });
    console.log(this.state.authed);
  }

  func = {
    updateStateResumeObj: (valueOne, change, valueTwo) => {
      if (valueTwo) {
        let newChange = update(this.state, {
          user: { [valueTwo]: { valueOne: { $set: change } } }
        });
        this.setState(newChange);
      } else {
        let newChange = update(this.state, {
          user: { [valueOne]: { $set: change } }
        });
        this.setState(newChange);
      }
    },

    updateStateResumeArr: (valueOne, change, index, valueTwo) => {
      if (valueTwo) {
        let newChange = update(this.state, {
          user: { [valueOne]: { [index]: { [valueTwo]: { $set: change } } } }
        });
        this.setState(newChange);
      } else {
        let newChange = update(this.state, {
          user: { [valueOne]: { [index]: { $set: change } } }
        });
        this.setState(newChange);
      }
    },

    authFunc: change => {
      this.setState({ authed: change });
    }
  };

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
            func={this.func}
          />
          <PrivateRouteOut
            exact
            path="/signup"
            component={SignUp}
            authed={!this.state.authed}
            user={this.state.user}
            func={this.func}
          />

          {/* Logged-in routes */}
          <PrivateRouteIn
            exact
            path="/"
            component={JobSearch}
            authed={this.state.authed}
            user={this.state.user}
            func={this.func}
          />
          <PrivateRouteIn
            exact
            path="/resume"
            component={Resume}
            authed={this.state.authed}
            user={this.state.user}
            func={this.func}
          />
          <PrivateRouteIn
            exact
            path="/account"
            component={Account}
            authed={this.state.authed}
            user={this.state.user}
            func={this.func}
          />
          <PrivateRouteOut
            exact
            path="/logout"
            component={Logout}
            authed={this.state.authed}
            user={this.state.user}
            func={this.func}
          />
        </Switch>
      </Router>
    );
  }
}
