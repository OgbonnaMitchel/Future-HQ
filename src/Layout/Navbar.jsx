import React from "react";
import NotificationIcon from "../assets/images/notifications.png";
import ProfileAvatar from "../assets/images/Avatar.png";

const Navbar = ({ title }) => {
  return (
    <nav className="flex justify-between items-center p-5 bg-white border-b border-gray-200">
      <h1 className="text-lg font-semibold">{title}</h1>
      <div>
        <input
          type="text"
          placeholder="Search for anything here......."
          className="border border-gray-300 rounded-md px-3 py-2 w-80 text-sm focus:outline-none focus:ring-1 focus:ring-[#00A58E]"
        />
      </div>

      {/* Notification & user area */}
      <div className="flex items-center gap-4">
        <img
          src={NotificationIcon}
          alt="Notifications"
          className="w-5 h-5 cursor-pointer"
        />

        <div className="flex items-center gap-2">
          <img
            src={ProfileAvatar}
            alt="User"
          />
          <div className="text-sm leading-tight">
            <p className="font-medium text-[#101828] ">Olivia Rhye</p>
            <p className="text-xs text-gray-500">FL-23432</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
