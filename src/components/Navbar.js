import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./style.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <div className="nav">
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
         
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h2>Xentice</h2>
          <div className="add">
        <span>  <i class='bx bxs-megaphone'></i>Post add </span>
<span>         <i class='bx bxs-edit-location'></i>Near Me </span>
    <span>      <i class='bx bxs-log-in'></i>Login/Sign Up </span>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <h1 id="nav-header">Xentice</h1>
            {SidebarData.map((item, index) => {
              return (
                
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      </div>
    </>
  );
}

export default Navbar;
