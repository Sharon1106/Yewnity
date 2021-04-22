import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppHome from "./views/home";
import Profile from "./views/profile";
import Discussions from "./views/discussions";
import Main from "./views/main";
import MsgBoard from "./views/discussions";


const PrivateRoute = ({ component: Compoonent, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("user") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={AppHome} /> {/*Landing Page*/}
          <PrivateRoute path='/main' exact component={Main} />
          <Route path='/events' exact component={MsgBoard} />
          <Route path='/forum' exact component={Discussions} />
          <PrivateRoute path='/profile' exact component={Profile} />
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;