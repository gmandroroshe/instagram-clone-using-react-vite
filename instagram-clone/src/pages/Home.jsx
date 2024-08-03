import React from 'react';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Feed />
    </div>
  );
};

export default Home;
