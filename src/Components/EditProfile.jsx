import React, { useState } from "react";
import axios from "axios";

const EditProfile = ({ user, onProfileUpdated }) => {
  const [fullname, setFullname] = useState(user.fullname || "");
  const [username, setUsername] = useState(user.username || "");
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("username", username);
    if (avatar) formData.append("avatar", avatar);

    setLoading(true);
    try {
      const res = await axios.patch(
        `https://titusukpono.pythonanywhere.com/users/${user.id}/`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      onProfileUpdated && onProfileUpdated(res.data);
    } catch (err) {
      console.error("Error updating profile:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-lg p-6 max-w-md mx-auto shadow-sm"
    >
      <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        className="w-full border rounded-md p-2 mb-3 text-sm focus:ring-2 focus:ring-[#00A58E] outline-none"
      />

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full border rounded-md p-2 mb-3 text-sm focus:ring-2 focus:ring-[#00A58E] outline-none"
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setAvatar(e.target.files[0])}
        className="text-sm mb-4"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-[#00A58E] text-white px-6 py-2 rounded-lg hover:bg-[#00957F] transition disabled:opacity-60"
      >
        {loading ? "Saving..." : "Update Profile"}
      </button>
    </form>
  );
};

export default EditProfile;
