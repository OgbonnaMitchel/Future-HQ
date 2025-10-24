import React, { useState, useEffect } from "react";
import axios from "axios";

const AddPost = ({ onPostAdded }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  // Fetch logged-in user info
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "https://titusukpono.pythonanywhere.com/users/me/"
        );
        setUser(res.data);
      } catch (error) {
        console.warn("Unable to fetch user info, using mock user");
        setUser({ id: 1, fullname: "Olivia Rhye" }); // fallback
      }
    };
    fetchUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !text.trim()) return alert("Please fill all fields");
    if (!user) return alert("User not found. Please log in.");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);
    formData.append("author", user.id);
    if (image) formData.append("image", image);

    setLoading(true);
    try {
      const res = await axios.post(
        "https://titusukpono.pythonanywhere.com/articles/",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      // ✅ Instantly update post list without reload
      if (onPostAdded) onPostAdded(res.data);

      // Reset form
      setTitle("");
      setText("");
      setImage(null);
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-sm border max-w-2xl mx-auto"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#101828]">
          Create a New Post
        </h2>
        {user && (
          <span className="text-sm text-gray-500">
            By <span className="font-medium">{user.fullname}</span>
          </span>
        )}
      </div>

      <input
        type="text"
        placeholder="Enter post title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded-md p-2 mb-3 text-sm focus:ring-2 focus:ring-[#00A58E] outline-none"
      />

      <textarea
        placeholder="Write your content..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        className="w-full border rounded-md p-2 mb-3 text-sm resize-none focus:ring-2 focus:ring-[#00A58E] outline-none"
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="text-sm mb-3"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-[#00A58E] text-white px-6 py-2 rounded-lg hover:bg-[#00957F] transition disabled:opacity-60"
      >
        {loading ? "Posting..." : "Publish Post"}
      </button>
    </form>
  );
};

export default AddPost;
