import React from "react";
import CommentDropdown from "./CommentDropdown";
import Reaction from "./Reactions";

const CommentCard = ({ comment, articleId, onEdit, onDelete }) => {
  return (
    <div className=" gap-3 border-b pb-3">
      <div>
        <div>
          <img
            src={comment.user.avater}
            alt="user"
            className="w-8 h-8 rounded-full"
          />
          <h4 className="font-medium text-black">{comment.user.fullname}</h4>
        </div>
        <div className="flex justify-between items-center">
          <CommentDropdown
            onEdit={() => onEdit(comment.id)}
            onDelete={() => onDelete(comment.id)}
          />
          <Reaction />
        </div>
      </div>

      <p className="text-gray-700 mt-1">{comment.text}</p>
      <h4 className="text-gray-400">{comment.date}</h4>
    </div>
  );
};

export default CommentCard;
