import React from 'react';
import NavBar from './components/NavBar/NavBar';
import LoginScreen from './pages/LogIn/LoginScreen';
import SighUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/signup" component ={SighUp}/>
          
        </Switch>
      </div>
    </Router>
  );
}
  

export default App;

