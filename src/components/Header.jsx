import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        
        <div class="container overflow-hidden text-center">
        <div class="row gx-5">
        
          <div class="col">
           <div class="p-3">About</div>
          </div>
          <div class="col">
            <div class="p-3">Popular Posts</div>
          </div>
        </div>
      </div>
    );
}

export default Header;
