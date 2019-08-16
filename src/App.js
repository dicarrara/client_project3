import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
// import axios from 'axios';

// Page Head
import NavBar from './components/NavBar/NavBar';

// Page Body
import JobSearch from './pages/JobSearch/JobSearch';
import Home from './pages/Home/Home';
import Login from './pages/LogIn/Login';
import SignUp from './pages/SignUp/SignUp';
import Account from './pages/Account/Account';
import Resume from './pages/Resume/Resume';


function PrivateRoute({ component: Component, authed, ...rest }) {
  return (

    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);

    // this.authChange = this.authChange.bind(this);
    this.state = {
      authed: false
    };
  }

  // authChange = () => {
  //   console.log('changed!');
  //   this.setState({ authed: true });
  // };

  // authCheck = () => {
  //   let serverURL;
  //   if (window.location.hostname === 'localhost') {
  //     serverURL = 'http://localhost:8080';
  //   } else {
  //     serverURL = 'https://server-project3.herokuapp.com';
  //   }

  //   axios
  //     .get(`${serverURL}/api/checkauthentication`)
  //     .then(response => {
  //       this.setState({ authed: true });
  //     })
  //     .catch(error => {
  //       this.setState({ authed: false });
  //     });
  // };

  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={JobSearch} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
              <Route exact path="/resume" component={Resume}/>
          <PrivateRoute
            authed={this.state.authed}
            exact
            path="/account"
            component={Account}
          />
        </Switch>
       
      </Router>
    );
  }
}
