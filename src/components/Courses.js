import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';

const Courses = () => (
<BrowserRouter>
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to ='/courses/html'>HTML</NavLink></li>
        <li><NavLink to ='/courses/css'>CSS</NavLink></li>
        <li><NavLink to ='/courses/javascript'>JavaScript</NavLink></li>
      </ul>
    </div>
    
    {<Route path = "/courses/html" component = {Courses}/>}
  </div>
  </BrowserRouter>
);

export default Courses;