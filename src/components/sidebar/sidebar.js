import React, { useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/admin.png";
import "../sidebar/sidebar.css";

const SideMenu = () => {
  const [inactive, setInactive] = useState(false);
  return (
    <div className={`side-menu ${inactive ? "inactive" : " "}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="script" />
        </div>
        <div
          onClick={() => {
            setInactive(!inactive);
          }}
          className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="search-controller">
        <button className="search-button">
          <i class="bi bi-search"></i>
        </button>
        <input type="text" placeholder="search" />
      </div>
      <div className="divider"></div>
      <div className="main-menu">
        <li>
          <a className="menu-item">
            <div className="menu-icon">
              <i class="bi bi-speedometer2"></i>
            </div>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a className="menu-item">
            <div className="menu-icon">
              <i class="bi bi-vector-pen"></i>
              <span id="p1">Design</span>
              <div className="prop">
                <li>Prints</li>
                <li>Editings</li>
                <li>HomeBooks</li>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a className="menu-item">
            <div className="menu-icon">
              <i class="bi bi-pen"></i>
              <span id="p1">Properties</span>
              <div className="prop">
                <li>Offers</li>
                <li>Mentors</li>
                <li>Employees</li>
                <li>Develops</li>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a className="menu-item">
            <div className="menu-icon">
              <i class="bi bi-clock"></i>
              <span id="p1">Company</span>
              <div className="prop">
                <li>Careers</li>
                <li>About</li>
              </div>
            </div>
          </a>
        </li>
      </div>
      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>Ayyasamy</h5>
          <p>ayyasamym@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default SideMenu;

// import "./sidebar.css";
// import React, { useState } from "react";
// import logo from "../assets/logo.png";

// const SideMenu = (props) => {
//   const [inactive, setInactive] = useState(false);
//   return (
//     <div className={`side-menu ${inactive ? "inactive" : " "}`}>
//       <div className="top-section">
//         <div className="logo">
//           <img src={logo} alt="script" />
//         </div>
//         <div
//           onClick={() => {
//             setInactive(!inactive);
//           }}
//           className="toggle-menu-btn">
//           {inactive ? (
//             <i class="bi bi-arrow-right-square-fill"></i>
//           ) : (
//             <i class="bi bi-arrow-left-square-fill"></i>
//           )}
//         </div>
//       </div>

//       <div className="search-controller">
//         <button className="search-button">
//           <i class="bi bi-search"></i>
//         </button>
//         <input type="text" placeholder="search" />
//       </div>

// const Sidebar = (props) => {
//   const [inactive, setInactive] = useState(false);
//   return (
//     <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
//       <div className="sidebar_title">
//         <div className="sidebar_img">
//           <img src={logo} alt="logo" />
//           <h1>Codersbite</h1>
//         </div>
//         <div
//           onClick={() => {
//             setInactive(!inactive);
//           }}
//           className="toggle-menu-btn">
//           {inactive ? (
//             <i class="bi bi-arrow-right-square-fill"></i>
//           ) : (
//             <i class="bi bi-arrow-left-square-fill"></i>
//           )}
//         </div>
//       </div>
// <div className="sidebar_menu">
//   <div className="sidebar_link active_menu_link">
//     <i className="fa fa-home"></i>
//     <a href="#">Dashboard</a>
//   </div>
//   <h2>MNG</h2>
//   <div className="sidebar_link">
//     <i className="fa fa-building"></i>
//     <a href="#">Company Management</a>
//   </div>
//   <div className="sidebar_link">
//     <i className="fa fa-wrench"></i>
//     <a href="#">Employee Management</a>
//   </div>
//   <div className="sidebar_link">
//     <i className="fa fa-archive"></i>
//     <a href="#"> Warehouse</a>
//   </div>
//   <div className="sidebar_link">
//     <i className="fa fa-handshake"></i>
//     <a href="#">Contacts</a>
//   </div>
//   <h2>LEAVE</h2>
//   <div className="sidebar_link">
//     <i className="fa fa-question"></i>
//     <a href="#">Requests</a>
//   </div>
//   <div className="sidebar_link">
//     <i className="fa fa-sign-out"></i>
//     <a href="#">Leave Policy</a>
//   </div>
//   <div className="sidebar_link">
//     <i class="fa-solid fa-calendar-days"></i>
//     <a href="#">Special Days</a>
//   </div>
//   <div className="sidebar_link">
//     <i class="fa-regular fa-file"></i>
//     <a href="#">Apply for Leave</a>
//   </div>
//   <h2>PAYROLL</h2>
//   <div className="sidebar_link">
//     <i class="fa-solid fa-money-bill"></i>
//     <a href="#">Payroll</a>
//   </div>
//   <div className="sidebar_link">
//     <i className="fa fa-briefcase"></i>
//     <a href="#">Paygrade</a>
//   </div>
//   <div className="sidebar_logout">
//     <i className="fa fa-power-off"></i>
//     <a href="#">Log Out</a>
//   </div>
// </div>
//     </div>
//   );
// };
// export default Sidebar;
