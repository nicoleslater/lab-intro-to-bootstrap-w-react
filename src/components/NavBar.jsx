import React from 'react';
import postData from "../data/posts.json";
// import { Link } from 'react';

const NavBar = () => {
   console.log(postData)
      const title = postData.title
      console.log(title)
            return (
              <div className="nav-box">
                <header>
                  <ul className="navbar">
                    <li className="list-item">
                      {/* <Link to="/">About</Link> */}
                    </li>
                    <li className="list-item">
                      {/* <Link to="/">Popular Posts</Link> */}
                    </li>
                  
                  </ul>
                </header>
              </div>
            );
          }
  

export default NavBar;
