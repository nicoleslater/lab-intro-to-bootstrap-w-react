import React from 'react';
import { useState } from 'react';
import PostInfo from './PostInfo';

const PostListing = ({ postData, togglePostInfo, handleSubmit}) => {
const [showPostInfo, setShowPostInfo] = useState(false);

function togglePostInfo(){
            setShowPostInfo(!showPostInfo);
        }
function handleSubmit(event){
            event.preventDefault();
        }
    return (
        <div className="post-listing">
        <div className="image">
            {/* <img className="post-img" src={images[0]} alt="" /> */}
        </div>
        <div className="text">
            {/* <p> {postData.title + " " + postData.location}</p> */}
        </div>
        <div>
            <button className="toggle-button" onClick={togglePostInfo}>
                {showPostInfo ? "Go Back..." : "Go to Post..."}
            </button>
            {showPostInfo ? (
                <PostInfo details={postData} handleSubmit={handleSubmit} />
            ) : null}
        </div>
    </div>
);
}

export default PostListing;

