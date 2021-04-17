import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Banner from './components/Banner/Banner';
import Footer from './components//Footer/Footer';

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
import MsgBoard from './components/MsgBoard/MsgBoard'
import Profile from './views/profile'
import Forum from './views/forum';
import ForumApp from './components/Forum/forumApp'
import forumApp from './components/Forum/forumApp';

function App() {
  return (
    <>
    <Router>
    <Banner></Banner>
      <Switch>
        <Route path='/' exact component = {AppHome} /> {/*Landing Page*/}
        <Route path='/forum' exact component = { forumApp } />
        <Route path='/profile' exact component={ Profile } />
      </Switch>
      <Footer></Footer>
    </Router>
    </>
  );
}

export default App;
