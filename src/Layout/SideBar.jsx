import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "../Components/Dropdown";
import { sidebarData, announcementData } from "../Data/SidebarData";
import LogoutButton from "../Components/Logout";

const Sidebar = ({ onSectionSelect }) => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    onSectionSelect(section);
  };

  return (
    <aside className="w-70 h-screen bg-white">
      {/* Title */}
      <h2 className="text-2xl font-medium text-[#00A58E] py-5.5 pr-30 pl-4 border-2 border-[#E8EDF1] border-r border-b">
        Future HQ
      </h2>

      <div className="px-3 pt-4 border-r border-[#E8EDF1]">
        <div className="mb-6">
          {announcementData.map((section, index) => (
          <Dropdown
            key={index}
            section={section.section}
            options={section.options}
            dropdown={section.dropdown}
            dropicon={section.dropicon}
            onSectionSelect={onSectionSelect}
          />
       ))}
        </div>

        {/* Sidebar sections (dropdowns) */}
        {sidebarData.map((section, index) => (
          <Dropdown
            key={index}
            section={section.section}
            icon={section.icon}
            options={section.options}
            dropdown={section.dropdown}
            dropicon={section.dropicon}
            onSectionSelect={onSectionSelect}
          />
        ))}
      <div>
        <LogoutButton/>
      </div>
      </div>

    </aside>
  );
};

export default Sidebar;