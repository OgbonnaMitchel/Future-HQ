import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Example: Replace this with your authenticated user endpoint
    axios
      .get("https://titusukpono.pythonanywhere.com/users/me/")
      .then((res) => setUser(res.data))
      .catch(() =>
        setUser({ fullname: "Olivia Rhye", username: "FL-23432", avatar: "" })
      );
  }, []);

  return (
    <div className="flex items-center gap-3 bg-white p-3">
      <img
        src={user?.avatar}
        alt="User Avatar"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="text-sm">
        <p className="font-semibold text-[#101828]">{user?.fullname}</p>
        <p className="text-xs text-gray-500">@{user?.username}</p>
      </div>
    </div>
  );
};

export default Profile;
