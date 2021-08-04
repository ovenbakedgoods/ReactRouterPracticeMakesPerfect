import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Courses from './Courses'; 
import Teachers from './Teachers';
import Header from './Header';
const App = () => (
  <BrowserRouter>
  <div className="container">
  <Header />
  <Route exact path = "/" component = {Home} />
  <Route path = "/about" component = {About} />
  <Route path = "/teachers" component = {Teachers} />
  <Route path = "/courses" component = {Courses} />
  </div>
  </BrowserRouter>
);

export default App;