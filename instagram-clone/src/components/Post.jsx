import React, { useState } from 'react';
import postImage from '../assets/images/post-image1.png'; // Import image

const Post = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post">
      <div className="post__header">
        <img src="https://via.placeholder.com/40" alt="User Avatar" />
        <span>User Name</span>
      </div>
      <img src={postImage} alt="Post" className="post__image" /> {/* Use image */}
      <div className="post__footer">
        <span onClick={handleLike}>❤️ {likes}</span>
        <span>💬</span>
        <span>✉️</span>
      </div>
      <div className="post__description">
        <span>User Name</span> This is a description of the post.
      </div>
    </div>
  );
};

export default Post;
