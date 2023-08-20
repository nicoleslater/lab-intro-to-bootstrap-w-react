import React, { useEffect } from 'react';

const PostInfo = ({postData, handleSubmit}) => {

    const title = postData.title;
    const location = postData.location;

    
    function handleSubmit(e){
        e.preventDefault();
    }
        
   
    return (
        <div>
            
        </div>
    );
}

export default PostInfo;
