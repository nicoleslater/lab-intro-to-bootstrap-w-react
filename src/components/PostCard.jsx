import React from 'react';
import images from '../images';
import PostInfo from './PostInfo';
import { useState } from 'react';

const PostCard = ({ postData, togglePostInfo, handleSubmit}) => {
    // const title = post.title;
    // const location = post.location;
    // const [posts, setPosts] = useState({
    //     id:"",
    //     title:"",
    //     content:"",
    //     location:"",
    //     createdAt:"",
    //     updatedAt:"",
    // });
    // const {id} = useParams();
    // const navigate = useNavigate();

    // useEffect(() => {
    //     showPostInfo(id)
    //     .then((postData) => {
    //         setPosts(postData)
    //     })
    //     .catch((err) => console.log(err))
    // }, [id])

const [showPostInfo, setShowPostInfo] = useState(false);

function togglePostInfo(){
        setShowPostInfo(!showPostInfo);
    }
function handleSubmit(event){
        event.preventDefault();
    }

    return (
        <div className="post-card">
            <div className="image">
                <img className="post-img" src={images} alt="" />
            </div>
            <div className="text">
                {/* <p> {postData.title + " " + postData.location}</p> */}
            </div>
            <div>
                <h6> Post Card</h6>
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

export default PostCard;
