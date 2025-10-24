// src/components/Reaction.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Liked from "../assets/images/favorite.png";
import UnLiked from "../assets/images/favorite_border.png";

const Reaction = ({ articleId }) => {
  const [liked, setLiked] = useState(false);
  const [reactions, setReactions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch initial article data (reaction + like status)
  useEffect(() => {
    const fetchReactions = async () => {
      try {
        const res = await axios.get(
          `https://titusukpono.pythonanywhere.com/articles/${articleId}/`
        );
        const data = res.data;

        // Some APIs store reactions as object or total integer
        setReactions(data.reactions?.like || data.reaction || 0);
        setLiked(data.user_reacted || false);
      } catch (err) {
        console.error("Error fetching reactions:", err);
        setError("Could not load reactions");
      } finally {
        setLoading(false);
      }
    };

    if (articleId) fetchReactions();
  }, [articleId]);

  // Handle Like / Unlike Toggle
  const handleReaction = async () => {
    try {
      // Optimistic UI
      setLiked((prev) => !prev);
      setReactions((prev) => (liked ? prev - 1 : prev + 1));

      const res = await axios.post(
        `https://titusukpono.pythonanywhere.com/articles/${articleId}/reaction`
      );

      // Update count with real backend data
      if (res.data?.reactions?.like) {
        setReactions(res.data.reactions.like);
      }
    } catch (err) {
      console.error("Reaction update failed:", err);
      setLiked((prev) => !prev); // revert UI if failed
    }
  };

  if (loading)
    return (
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span className="animate-pulse">Loading...</span>
      </div>
    );

  if (error)
    return (
      <div className="text-red-500 text-sm italic">
        ⚠ {error}
      </div>
    );

  return (
    <div className="flex gap-2 items-center">
      <img
        src={liked ? Liked : UnLiked}
        alt="reaction"
        onClick={handleReaction}
        className={`cursor-pointer hover:scale-110 transition-transform w-6 h-6 ${
          loading ? "opacity-50 pointer-events-none" : ""
        }`}
      />
      <span className="text-sm text-[#00A58E] font-medium">
        {reactions > 0 ? reactions : 0}
      </span>
    </div>
  );
};

export default Reaction;
