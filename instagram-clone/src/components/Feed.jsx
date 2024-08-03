import React from 'react';
import Post from './Post';
import './Feed.css';

const Feed = () => {
  return (
    <div className="feed">
      <Post />
      <Post />
      <Post />
      {/* Add more Post components as needed */}
    </div>
  );
};

export default Feed;
