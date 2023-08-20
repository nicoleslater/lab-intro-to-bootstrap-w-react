import React from 'react';
import postData from "../data/posts.json";
// import { Link } from 'react';

const NavBar = () => {
 
            return (
              <div className="nav-container">
                <header>
                  <ul className="navbar">
                    <li className="nav-item">
                      {/* <Link to="/">About</Link> */}
                    </li>
                    <li className="nav-item">
                      {/* <Link to="/">Popular Posts</Link> */}
                    </li>
                  
                  </ul>
                </header>
              </div>
            );
          }
  

export default NavBar;
