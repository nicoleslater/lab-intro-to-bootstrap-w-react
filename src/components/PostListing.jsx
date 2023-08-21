
import Post from "./Post";


export default function PostListing({postListing}){
    console.log(postListing)

    return (
        <>
        {postListings.map((post, index) => (
            <Post key={index} post={post} />
           
    ))}
    </>
    )
}



















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

