import React from 'react';
import NavBar from './components/NavBar/NavBar';
import LoginScreen from './LoginScreen'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          
        </Switch>
      </div>
    </Router>
  );
}
  

export default App;

