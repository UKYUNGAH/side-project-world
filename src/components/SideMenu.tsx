import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    return (
        <div className="side_menu">
            <div className="project_menu menu_content">
                <b>Project</b>
                <Link to="/about">
                    <img src="/images/side1.png" alt="About menu - question mark icon" />
                    <span>What’s Nerdigloo?</span>
                </Link>
                <Link to="/buildtogether">
                    <img src="/images/side2.png" alt="Build Together menu - box icon" />
                    <span>Build Together</span>
                </Link>
            </div>
            <div className="account_menu menu_content">
                <b>Account</b>
                <Link to="/user">
                    <img src="/images/side4.png" alt="My Page menu - user icon" />
                    <span>My Page</span>
                </Link>
                <Link to="/help">
                    <img src="/images/side3.png" alt="Help menu - book icon" />
                    <span>Help</span>
                </Link>
            </div>
        </div>
    );
};
export default SideMenu;
