import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [on, setOn] = useState<boolean>(false);

  return (
    <div className="header">
      <h1>
        <Link to="/">
          <img src="images/g_logo.png" alt="side project world logo" />
        </Link>
      </h1>
      <button
        className={`ham ${on ? 'on' : ''}`}
        onClick={() => setOn(!on)}
      ></button>
      {on && <div className="overlay" onClick={() => setOn(false)}></div>}

      <div className={`m_side_menu ${on ? 'on' : ''}`}>
        <div className="project_menu menu_content">
          <b>Project</b>
          <Link to="/about" onClick={() => setOn(false)}>
            <img
              src="/images/side1.png"
              alt="About menu - question mark icon"
            />
            <span>What’s Nerdigloo?</span>
          </Link>
          <Link to="/buildtogether" onClick={() => setOn(false)}>
            <img src="/images/side2.png" alt="Build Together menu - box icon" />
            <span>Build Together</span>
          </Link>
        </div>
        <div className="account_menu menu_content">
          <b>Account</b>
          <Link to="/user" onClick={() => setOn(false)}>
            <img src="/images/side4.png" alt="My Page menu - user icon" />
            <span>My Page</span>
          </Link>
          <Link to="/help" onClick={() => setOn(false)}>
            <img src="/images/side3.png" alt="Help menu - book icon" />
            <span>Help</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
