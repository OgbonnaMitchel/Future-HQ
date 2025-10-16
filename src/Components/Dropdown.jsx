import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ArrowUp from "../assets/images/keyboard_arrow_up.png";
import ArrowDown from "../assets/images/keyboard_arrow_down.png";
import AddIcon from "../assets/images/add.png";
import CloseIcon from "../assets/images/close.png";
import VerifiedMessageAvatar from "../assets/images/Avatar message.png";

const Dropdown = ({
  section,
  icon,
  options = [],
  dropdown = false,
  onSectionSelect,
  dropicon = false,

}) => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(options);
  const [newCommunity, setNewCommunity] = useState("");
  const [showInput, setShowInput] = useState(false);

  const [activeHeader, setActiveHeader] = useState(false);
  const [activeItem, setActiveItem] = useState(
    list.find((item) => item.active)?.title || null
    )

  const handleHeaderClick = () => {
    if (dropdown) {
      setOpen((prev) => !prev);
    } else {
      setActiveHeader(true);
      if (onSectionSelect) onSectionSelect(section);
    }
  };

  const handleDropdownToggle = () => {
    if (dropdown) setOpen((prev) => !prev);
    else if (onSectionSelect) {
      onSectionSelect(section);
    }
  };

 const handleItemClick = (title) => {
    const updatedList = list.map((item) => ({
      ...item,
      active: item.title === title,
    }));
    setList(updatedList);

    setActiveItem(title);
    setActiveHeader(true);
    if (onSectionSelect) onSectionSelect(title);
  };

  // Add new community item
  const handleCreateNewCommunity = () => {
    if (newCommunity.trim() === "") return;
    setList([...list, { title: newCommunity }]);
    setNewCommunity("");
    setShowInput(false);
  };

  return (
    <div className="mb-4">
      {/* Dropdown header */}
      <button
        type="button"
        onClick={handleDropdownToggle}
        className={`flex justify-between items-center w-full px-2 py-1 rounded-md transition-colors ${
          activeHeader || list.some((item) => item.active)
            ? "text-[#BA5D00]"
            : "text-[#697D95] hover:text-[#BA5D00]"
        }`}
      >
        <div className="flex gap-2 items-center">
          {icon && <img src={icon} alt={section} className="w-5 h-5" />}
          <span className="font-medium text-sm ">{section}</span>
        </div>

        {dropdown && dropicon && (
          <img src={open ? ArrowUp : ArrowDown} alt="toggle dropdown" />
        )}
      </button>

      {/* Dropdown Items */}
      {(dropdown && open) || !dropdown ? (
        <ul className="ml-2 mt-2 space-y-2">
          {list.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path || "#"}
              onClick={() => handleItemClick(item.title) }
             className={({ isActive }) =>
                  `flex items-center justify-between w-full text-sm p-1 font-medium ${
                    isActive || activeItem === item.title
                      ? "text-[#BA5D00]"
                      : "text-[#697D95] hover:text-[#BA5D00]"
                  }`
                }
              >

              
              <div className="flex items-center gap-2">
                {/* Optional avatar/icon */}
                {item.avatar ? (
                  <img
                    src={
                      item.status === "online"
                        ? VerifiedMessageAvatar
                        : item.avatar
                    }
                    alt="Profile"
                  />
                ) : item.icon ? (
                  <img
                    src={item.icon}
                    alt="Community"
                    className="w-5 h-5 opacity-80"
                  />
                ) : null}

                <span>{item.title}</span>
              </div>

              {/* Unread badge */}
              {item.badge > 0 && (
                <span className="text-xs bg-[#F1F8FE] text-[#0172CB] rounded-full font-medium px-2">
                  {item.badge > 10 ? "10+" : item.badge}
                </span>
              )}

              {/* Create New Community button */}
              {item.title === "Create a Community" && (
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // prevent dropdown from closing
                    setShowInput((prev) => !prev);
                  }}
                  className="ml-2"
                >
                  <img
                    src={showInput ? CloseIcon : AddIcon}
                    alt="toggle input"
                    className="w-4 h-4"
                  />
                </button>
                )}
                </NavLink>
            </li>
          ))}

          {/* Input field for adding new community */}
          {showInput && (
            <li className="flex items-center gap-2 mt-2">
              <input
                type="text"
                placeholder="New Community Name..."
                value={newCommunity}
                onChange={(e) => setNewCommunity(e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1 text-sm w-full"
              />
              <button onClick={handleCreateNewCommunity}>
                <img src={AddIcon} alt="AddIcon" className="w-5 h-5" />
              </button>
            </li>
          )}
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
