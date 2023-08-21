import React from 'react';

const Post = ({post}) => {
    console.log(post)
    return (
        <div>
            <img src="" alt="" />
            <h3>{post.title}</h3>
            <p>{post.location}</p>
            <p>{post.content}</p>
            <button>Go to post </button>
        </div>
    );
}

export default Post;
