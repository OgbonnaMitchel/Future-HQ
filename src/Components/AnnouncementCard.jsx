import React from "react";
import { useState } from "react";
import VerifiedProfile from "../assets/images/Avatar profile photo.png";
import UnLiked from "../assets/images/favorite_border.png";
import Liked from "../assets/images/favorite.png";
import Reply from "../assets/images/reply.png";
import Share from "../assets/images/share.png";
import Comment from "../assets/images/comment.png";
import ArrowRight from "../assets/images/chevron_right.png";

const AnnouncementCard = ({ data }) => {
  const [liked, setLiked] = useState(data.liked);
  const [reactions, setReactions] = useState(data.reactions || 0);

  const handleReaction = () => {
    if (liked) {
      setLiked(false)
      setReactions((prev) => prev - 1);
    } else {
      setLiked(true)
      setReactions((prev) => prev + 1);
    }
  };

  return (
    <div className="w-4xl px-8 py-6 rounded-lg bg-white mb-4">
      {/* Author and Post Header  */}
      <div className="flex justify-between mb-6 ">
        <div className="flex items-center gap-2">
          <img
            src={data.author.verified ? VerifiedProfile : data.author.avatar}
            alt={data.author.name}
          />
          <div>
            <div>
              <h3 className="text-[#252A31] font-medium text-lg  ">{data.author.name} </h3>
            </div>
            <p className="text-[#697D95] text-sm ">
              {data.date} | {data.time}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-6">
          <div className="flex gap-1">
          <img
            src={liked ? Liked : UnLiked}
            onClick={handleReaction}
            alt={liked ? "Liked" : "Not liked"}
            className="cursor-pointer transition-transform hover:scale-110"
          />
          {reactions > 0 && (
            <span className="text-sm text-[#00A58E] font-medium ">
              {reactions >= 1000 ? `${(reactions / 1000).toFixed(1)}K` : reactions} {reactions === 1 ? "Reaction" : "Reactions"}
            </span>
          )}
          </div>
          <img src={Reply} alt="Reply" />
          <img src={Share} alt="Share" />
        </div>
      </div>

      {/* Post heading and Content */}
      <div className="w-3xl">
        <h2 className="text-[#252A31] font-medium text-2xl mb-1 ">{data.title}</h2>
        <p className="text-[#4F5E71] text-md font-medium mb-6 "> {data.content} </p>
      </div>

      {/* image Option */}
      {data.image && <img src={data.image} alt="Post image" className="w-full mt-6 mb-6 " />}

      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-2 ">
          <img src={Comment} alt="Comment Icon" />
          {data.replies > 1 ? (
            <span className="text-[#0172CB] font-medium text-sm">{data.replies >= 1000 ? `${(data.replies / 1000).toFixed(1)}K` : data.replies} Replies </span>
          ) : data.replies === 1 ? (
            <span className="text-[#0172CB] font-medium text-sm">1 Reply</span>
          ) : (
            <span className="text-[#0172CB] font-medium text-sm">0 Replies</span>
          )}
        </div>
        <div className="flex items-center ">
          <span className="text-[#4F5E71] font-medium text-sm "> View Replies</span>
          <span>
            <img src={ArrowRight} alt="Arrow-right" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCard;
