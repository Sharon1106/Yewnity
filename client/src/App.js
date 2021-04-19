import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Banner from './components/Banner/Banner';
import Footer from './components//Footer/Footer';
import Navbar2 from './components/Navbar2';
//switched file path - react app works now - Jeff -
//----------------Jeff additions--------------------//
import EventMain from './components/Event-Main';
import EventMed from './components/Event-Med';
import EventMini from './components/Event-Mini';
import IssueMini from './components/Issue-Mini';
//----------------END Jeff additions--------------------//

//Landing Hero
import AppHome from './views/home';
import 'bootstrap/dist/css/bootstrap.min.css';

import Profile from './views/profile'


function App() {
  return (
    <>
    <Router>
    {/* <Banner></Banner> */}
    <Navbar2></Navbar2>
      <Switch>
        <Route path='/' exact component = {AppHome} /> {/*Landing Page*/}
      
        <Route path='/profile' exact component={ Profile } />
      </Switch>
      <IssueMini />
      <Footer></Footer>
    </Router>
    </>
  );
}

export default App;
