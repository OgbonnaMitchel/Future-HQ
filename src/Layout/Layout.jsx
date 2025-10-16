import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Layout/SideBar";
import Navbar from "../Layout/Navbar";
import AnnouncementCardList from "../Components/AnnouncementCardList";

const Layout = ({ children }) => {
  const [selectedSection, setSelectedSection] = useState(
    ""
  );
  const handleSectionSelect = (sectionName) => {
    setSelectedSection(sectionName);
  };

  return (
    <div className="flex h-screen bg-[#F5F7F9]">
      {/* Sidebar */}
      <aside>
        <Sidebar onSectionSelect={handleSectionSelect} />
      </aside>

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <header>
          <Navbar title={selectedSection} />
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto no-scrollbar p-6 mx-auto ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
