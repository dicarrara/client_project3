import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import axios from 'axios';

// Page Head
import NavBar from './components/NavBar/NavBar';

// Page Body
import JobSearch from './pages/JobSearch/JobSearch';
import Home from './pages/Home/Home';
import Login from './pages/LogIn/Login';
import SignUp from './pages/SignUp/SignUp';
import Account from './pages/Account/Account';
import Resume from './pages/Resume/Resume';
import Logout from './pages/Logout/Logout';

const PrivateRouteOut = ({ component: Component, auth, authed, ...props }) => {
  return (
    <Route
      {...props}
      render={props =>
        authed === true ? (
          <Component auth={auth} {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

const PrivateRouteIn = ({ component: Component, auth, authed, ...props }) => {
  return (
    <Route
      {...props}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/home', state: { from: props.location } }}
          />
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

    this.authFunc = this.authFunc.bind(this);

    this.state = {
      authed: false
    };
  }

  async componentDidMount() {
    await axios
      .get(`${serverURL}/api/checkauthentication`)
      .then(response => {
        console.log(response);
        this.setState({
          authed: true,
          user: {
            fullName: response.data.res.fullName,
            id: response.data.res._id,
            email: response.data.res.email
          }
        });
      })
      .catch(error => {
        this.setState({ authed: false });
      });
    console.log(this.state.authed);
    console.log(this.state.user.id);
  }

  authFunc = change => {
    this.setState({ authed: change });
  };

  render() {
    return (
      <Router>
        <NavBar authed={this.state.authed} />
        <Switch>
          {/* Non-logged routes */}
          <PrivateRouteOut
            exact
            path="/home"
            component={Home}
            authed={!this.state.authed}
          />
          <PrivateRouteOut
            exact
            path="/login"
            component={Login}
            authed={!this.state.authed}
            auth={this.authFunc}
          />
          <PrivateRouteOut
            exact
            path="/signup"
            component={SignUp}
            authed={!this.state.authed}
            auth={this.authFunc}
          />

          {/* Logged-in routes */}
          <PrivateRouteIn
            authed={this.state.authed}
            exact
            path="/"
            component={JobSearch}
          />
          <PrivateRouteIn
            authed={this.state.authed}
            exact
            path="/resume"
            component={Resume}
          />
          <PrivateRouteIn
            authed={this.state.authed}
            exact
            path="/account"
            component={Account}
          />
          <PrivateRouteOut
            authed={this.state.authed}
            exact
            path="/logout"
            component={Logout}
            auth={this.authFunc}
          />
        </Switch>
      </Router>
    );
  }
}
