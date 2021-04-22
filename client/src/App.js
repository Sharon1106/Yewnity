import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar2 from "./components/Navbar2";
import Footer from "./components//Footer/Footer";
import AppHome from "./views/home";
import Profile from "./views/profile";
import Discussions from "./views/discussions";
import Main from "./views/main";
import MsgBoard from "./views/discussions";

function App() {
  return (
    <>
    <Router>
    <Navbar2></Navbar2>
      <Switch>
        <Route path='/' exact component = {AppHome} /> {/*Landing Page*/}
        <Route path='/main' exact component = { Main }  />
        <Route path='/events' exact component = { MsgBoard }  />
        <Route path='/forum' exact component = { Discussions }  />
        <Route path='/profile' exact component={ Profile } />
      </Switch>
      <Footer></Footer>
    </Router>
    </>
  );
}

export default App;