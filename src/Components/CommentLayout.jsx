import React from "react";
import Close from "../assets/images/close.png";
import CommentSection from "./CommentSection";
import CommentTextArea from "./CommentTextArea";
// import { title } from "../Layout/Navbar";

const CommentLayout = ({ article, onClose }) => {
  if (!article) return null;
  return (
    <div className="top-0 w-full h-full bg-white flex flex-col no-scrollbar">
      <div className="sticky flex justify-between px-3 py-2 " >
        <h2>General Announcement </h2>
        <button onClick={onClose}>
          <img src={Close} alt="Close Icon" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div>
          <img src={article.author.avatar} alt={article.author.fullname} />
          <div>
            <h3>{article.author.fullname}</h3>
            <p>
              {new Date(article.createdAt).toDateString()}
              {new Date(article.created_at).toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
              </div>
              
              <h3>{article.title}</h3>
              <p>{article.text}</p>
              {article.image && <img src={article.image} alt={article.title} />}

              <div className="flex-1 overflow-y-auto p-4">
                <CommentSection articleId={article.id} />
        </div>
      </div>
    </div>
  );
};

export default CommentLayout;
