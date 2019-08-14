import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
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
      
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/signup" component ={SighUp}/>
          <Route exact path="/account" component ={AccountPage}/>
          
        </Switch>
      <Footer/>
    </Router>
  );
}
 

export default App;

