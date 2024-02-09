import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Main from "./components/main/main";
import SideMenu from "./components/sidebar/sidebar";
const Dash = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main />
      <SideMenu />
    </div>
  );
};

export default Dash;
