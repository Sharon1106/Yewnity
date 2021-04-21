import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Banner from './components/Banner/Banner';
import Footer from './components//Footer/Footer';
/// Matthew
import Navbar2 from './components/Navbar2';
//main
//switched file path - react app works now - Jeff -


//Landing Hero
import AppHome from './views/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './views/profile'
import Discussions from './views/discussions'
import Main from './views/main'
// import Login from './components/Login'

function App() {
  return (
    <>
    <Router>
    {/* <Banner></Banner> */}
    <Navbar2></Navbar2>
      <Switch>
        <Route path='/' exact component = {AppHome} /> {/*Landing Page*/}
        <Route path='/main' exact component = { Main }  />
        {/* <Route path='/events' exact component = {}  /> */}
        <Route path='/forum' exact component = { Discussions }  />
        <Route path='/profile' exact component={ Profile } />
      </Switch>
      <Footer></Footer>
    </Router>
    </>
  );
}

export default App;
