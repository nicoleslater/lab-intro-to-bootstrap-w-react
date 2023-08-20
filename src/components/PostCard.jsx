import React from 'react';
import images from '../images';
import PostInfo from './PostInfo';

const PostCard = ({ post, togglePostInfo}) => {
    const title = post.title;
    const location = post.location;

    const [showPostInfo, setShowPostInfo] = useSate(false);

function togglePostInfo(){
        setShowPostInfo(!showPostInfo);
    }

    return (
        <div className="post-card">
            <div className="image">
                <img className="post-img" src={images} alt="" />
            </div>
            <div className="text">
                <p> {title + " " + location}</p>
            </div>
            <div>
                <button className="toggle-button" onClick={togglePostInfo}>
                    {showPostInfo ? "Go Back..." : "Go to Post..."}
                </button>
                {showPostInfo ? (
                    <PostInfo details={post} handleSubmit={handleSubmit} />
                ) : null}
            </div>
        </div>
    );
}

export default PostCard;
