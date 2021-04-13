import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components//Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <>
    <Router>
    <Banner></Banner>
      <Navbar />
      <Switch>
        <Route path='/' exact />
      </Switch>
      <Footer></Footer>
    </Router>
    </>
  );
}

export default App;
