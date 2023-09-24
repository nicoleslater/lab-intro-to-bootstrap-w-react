import React from "react";
import Post from "./Post";


const PostListing = ({postData}) => {
    console.log(postData);

    return (
        <div className="row d-flex justify-content-center">
          <section className="PostList container row-cols-2 p-1 row col-sm-6">
            {postData ? postData.map((post) => <Post postInfo={post} />) : null}
          </section>
          <section className="locations col-sm-4">
            <h5>
              Posts by <span className="orange">Location</span>
            </h5>
            <table className="table table-hover">
              <tbody>
                <tr>
                  <th>Location</th>
                  <th className="text-center">Posts</th>
                </tr>
                <tr>
                  <th>Seattle</th>
                  <th className="text-center">1</th>
                </tr>
                <tr>
                  <th>Shibuya</th>
                  <th className="text-center">2</th>
                </tr>
                <tr>
                  <th>Chicago</th>
                  <th className="text-center">2</th>
                </tr>
                <tr>
                  <th>San Francisco</th>
                  <th className="text-center">1</th>
                </tr>
                <tr>
                  <th>San Diego</th>
                  <th className="text-center">1</th>
                </tr>
                <tr>
                  <th>Savilla</th>
                  <th className="text-center">1</th>
                </tr>
                <tr>
                  <th>Porto</th>
                  <th className="text-center">1</th>
                </tr>
                <tr>
                  <th>Burano</th>
                  <th className="text-center">1</th>
                </tr>
                <tr>
                  <th>London</th>
                  <th className="text-center">1</th>
                </tr>
                <tr>
                  <th>Dubai</th>
                  <th className="text-center">1</th>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      );
}

export default PostListing;



















// import React from 'react';
// import { useState } from 'react';
// // import PostInfo from './PostInfo';
// // import {postData} from '../data/posts.json';

// const PostListing = ({ postData, togglePostInfo, handleSubmit}) => {
// const [showPostInfo, setShowPostInfo] = useState(false);


// function togglePostInfo(){
//             setShowPostInfo(!showPostInfo);
//         }
// function handleSubmit(event){
//             event.preventDefault();
//         }
//     return (
//         <div>
//         <ul class="list-group">
//         <li class="list-group-item">Post</li>
//         <li class="list-group-item">A second item</li>
//         <li class="list-group-item">A third item</li>
//         <li class="list-group-item">A fourth item</li>
//         <li class="list-group-item">And a fifth one</li>
//       </ul>
//         <div>
//             <button className="toggle-button" onClick={togglePostInfo}>
//                 {showPostInfo ? "Go Back..." : "Go to Post..."}
//             </button>
//             {showPostInfo ? (
//                 <PostInfo details={postData} handleSubmit={handleSubmit} />
//             ) : null}
//         </div>
//     </div>
// );
// }

// export default PostListing;

