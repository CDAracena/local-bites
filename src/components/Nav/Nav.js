import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css'

const Nav = ({searchTerm, searchFunction}) => (<div className="nav-main-container container text-center">
  <div className="top-nav-section">
    <div className="app-title h1">
      <span> <i className="fa fa-map-pin"></i>
    </span>
    Local Bites
    <span> <i className="fa fa-utensils"></i>
  </span>
    </div>
    <p className="nav-intro-sentence">Find Your Best Local Options By City!</p>
  </div>
  <div className="bottom-nav-section">
    <input type="text" onChange={searchTerm} className="nav-input-bar form-control-lg" placeholder="...Search"/>
    <button onClick={searchFunction} className="nav-search-btn">
       Search
    </button>
  </div>
</div>)

export default Nav;
