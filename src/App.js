import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={JobSearch} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/resume" component={Resume}/>
      </Switch>
      
    </Router>
  );
}

export default App;
