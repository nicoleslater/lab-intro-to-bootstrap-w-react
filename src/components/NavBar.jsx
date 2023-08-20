import React from 'react';
// import postData from "../data/posts.json";
// import { Link } from 'react';

const NavBar = () => {
 
  <nav className="nav-bar">
  <div className="nav-bar">
    <a className="">Rosier</a>
    <button
      className="btn"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="nav-bar"></span>
    </button>
    <div className="" id="navbarSupportedContent">
      <ul className="">
        <li className="">
          <a className="" aria-current="page">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="">Featured</a>
        </li>
        <li className="nav-item">
          <a
            className=""
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Learn More
          </a>
          <ul className="nav-bar-dropdown" aria-labelledby="navbarDropdown">
            <li>
              <a className="about">About</a>
            </li>
            <li>
              <a className="contact">Contact</a>
            </li>
            <li>
              <hr className="" />
            </li>
            <li>
              <a className="">Surprise me!</a>
            </li>
          </ul>
        </li>
      </ul>
      <form className="">
        <input
          className=""
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

}


export default NavBar;