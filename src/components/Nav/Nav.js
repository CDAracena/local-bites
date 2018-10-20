import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = ({searchTerm, searchFunction}) => (<div className="nav-main-container container text-center">
  <div className="top-nav-section">
    <div className="app-title h1">
      Local Bites
    </div>
    <p>Find Your Best Local Options By City!</p>
  </div>
  <div className="bottom-nav-section">
    <input type="text" onChange={searchTerm} className="nav-input-bar"/>
    <button onClick={searchFunction} className="nav-search-btn">
      Search
    </button>
  </div>
</div>)

export default Nav;
