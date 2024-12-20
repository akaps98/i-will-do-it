import React from "react";
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const handleClick = () => {
    // navigate to scheduling page
  };

  return (
    <div className="home-container">
        <div className="home-content">
            <h1 className="home-desc1">SCHEDULING is essential!</h1>
            <h1 className="home-desc2">Don't forget your future plan :))</h1>
            <h1 className="home-desc3">Shall we schedule?</h1>
            <Link to = ''><button className="home-button" onClick={handleClick}>
              Why not?
            </button></Link>
        </div>
    </div>
  );
}

export default Home;