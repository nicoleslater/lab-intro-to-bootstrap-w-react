import React from 'react';
import images from '../images';

const PostCard = ({ post, togglePostInfo, handleSubmit}) => {
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
            
        </div>
    );
}

export default PostCard;
