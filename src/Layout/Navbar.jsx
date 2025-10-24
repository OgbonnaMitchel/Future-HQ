import React from "react";
import NotificationIcon from "../assets/images/notifications.png";
import Profile from "../Components/Profile";
// import ProfileAvatar from "../assets/images/Avatar.png";

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
        <Profile/>
      </div>
    </nav>
  );
};

export default Navbar;
