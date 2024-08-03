import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__suggestions">
        <h2>Suggestions</h2>
        <ul>
          <li>Suggestion 1</li>
          <li>Suggestion 2</li>
          <li>Suggestion 3</li>
          {/* Add more suggestions as needed */}
        </ul>
      </div>
      <div className="sidebar__profile">
        <h2>Profile</h2>
        <img src="https://via.placeholder.com/100" alt="Profile" />
        <span>User Name</span>
      </div>
    </div>
  );
};

export default Sidebar;
