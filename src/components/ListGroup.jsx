import React from 'react';


const ListGroup = ({ postData }) => {
 
    <aside className="aside-container">
        <h3>Posts by Location:</h3>
        <ol>
            { postData.map((post) => (
                post.present ? <li> {post.name}</li> : null
            ))}
        </ol>
    </aside>
    return (
        <div>
            
        </div>
    );
}

export default ListGroup;
