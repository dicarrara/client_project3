import React from 'react';

import LoginScreen from './pages/LogIn/LoginScreen';
import SighUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home'
import './App.css';
import './pages/Account/AccountPage'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AccountPage from './pages/Account/AccountPage';

function App() {
  return (
    <Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/signup" component ={SighUp}/>
          <Route exact path="/account" component ={AccountPage}/>
          
        </Switch>
      </div>
    </Router>
  );
}
 

export default App;

