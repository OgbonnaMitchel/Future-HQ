import React, { useState } from "react";
import AnnouncementCard from "./AnnouncementCard";
import CommentSection from "./CommentSection";

const AnnouncementLayout = ({ article }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="relative flex justify-center items-start w-full h-screen bg-gray-50 overflow-hidden p-6 transition-all duration-500 ease-in-out">
      {/* Main Announcement Section */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          showComments ? "w-[60%] mr-auto" : "w-full flex justify-center"
        }`}
      >
        <AnnouncementCard
          data={article}
          onViewReplies={() => setShowComments(true)}
        />
      </div>

      {/* Comment Panel */}
      <div
        className={`fixed top-0 right-0 h-full bg-white border-l shadow-lg transition-all duration-500 ease-in-out ${
          showComments
            ? "translate-x-0 w-[40%] opacity-100"
            : "translate-x-full w-0 opacity-0"
        }`}
      >
        <CommentSection
          articleId={article.id}
          onClose={() => setShowComments(false)}
        />
      </div>
    </div>
  );
};

export default AnnouncementLayout;
