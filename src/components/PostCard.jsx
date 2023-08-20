import React from 'react';
import images from '../images';

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
                <h3> {title + " " + location}</h3>
            </div>
        </div>
    );
}

export default PostCard;
