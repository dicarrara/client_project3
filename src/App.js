import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';


// Page Head
import NavBar from './components/NavBar/NavBar';

// Page Body
import JobSearch from './pages/JobSearch/JobSearch';
import Home from './pages/Home/Home';
import Login from './pages/LogIn/Login';
import SignUp from './pages/SignUp/SignUp';
import Account from './pages/Account/Account';
import Resume from './pages/Resume/Resume';
import axios from 'axios';
axios.defaults.withCredentials = true;

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
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
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.updateAuth = this.updateAuth.bind(this);
    this.state = {};
  }

  componentWillMount() {
    let serverURL;
    if (window.location.hostname === 'localhost') {
      serverURL = 'http://localhost:8080';
    } else {
      serverURL = 'https://server-project3.herokuapp.com';
    }

    axios
      .get(`${serverURL}/api/checkauthentication`)
      .then(res => {
        console.log(res);
        console.log('changing auth to true');
        this.setState({ authed: true });
      })
      .catch(error => {
        console.log(error);
        console.log('changing auth to false');
        this.setState({ authed: false });
      });
  }

  updateAuth = change => {
    this.setState({ authed: change });
  };

  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <PrivateRoute exact path="/" component={JobSearch} location="/" />
          <Route exact path="/home" component={Home} />
          <Route
            exact
            path="/login"
            render={props => (
              <Login {...props} authenticate={this.updateAuth} />
            )}
          />
          <Route
            exact
            path="/signup"
            render={props => (
              <SignUp {...props} authenticate={this.updateAuth} />
            )}
          />
          <PrivateRoute exact path="/resume" component={Resume} />
          <PrivateRoute exact path="/account" component={Account} />
          <Route
            exact
            path="/logout"
            render={props => {
              let serverURL;
              if (window.location.hostname === 'localhost') {
                serverURL = 'http://localhost:8080';
              } else {
                serverURL = 'https://server-project3.herokuapp.com';
              }

              axios
                .get(`${serverURL}/logout`)
                .then(response => {
                  console.log(response);
                  return <Redirect to="/home" />;
                })
                .catch(error => {
                  console.log(error);
                  return <Redirect to="/home" />;
                });
            }}
          />
        </Switch>
      </Router>
    );
  }
}
