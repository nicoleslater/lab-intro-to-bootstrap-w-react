import React, { useState } from 'react';

const PostInfo = () => {
    const [postInfo, setPostInfo] = useState([]);

    // const title = postData.title;
    // const location = postData[0].location;


    function handleSubmit(event){
        event.preventDefault();
    }
        
   
    return (
        <div>
            <h6> Post Info </h6>
        </div>
    );
}

export default PostInfo;
