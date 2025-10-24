import React, { useState } from "react";
// import VerifiedProfile from "../assets/images/Avatar profile photo.png";
// import UnLiked from "../assets/images/favorite_border.png";
// import Liked from "../assets/images/favorite.png";
import Reply from "../assets/images/reply.png";
import Share from "../assets/images/share.png";
import Comment from "../assets/images/comment.png";
import ArrowRight from "../assets/images/chevron_right.png";
import Reaction from "./Reactions";
import CommentLayout from "./CommentLayout";

const AnnouncementCard = ({ data, onViewReplies }) => {
  const [liked, setLiked] = useState(false);
  const [reactions, setReactions] = useState(data.reaction || 0);

  const [showPanel, setShowPanel] = useState(false);

  const handleReaction = () => {
    setLiked((prev) => !prev);
    setReactions((prev) => (liked ? prev - 1 : prev + 1));
  };

  const [showComments, setShowComments] = useState(false);

  // Format date
  const formattedDate = new Date(data.created_at).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedTime = new Date(data.created_at).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="w-full max-w-4xl bg-white rounded-lg p-6 mb-4 shadow-sm">
      {/* Author and Header */}
      <div className="flex justify-between mb-6">
        <div className="flex items-center gap-3">
          <img
            src={data.author.avatar}
            alt={data.author.fullname}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-[#252A31] font-medium text-lg">
              {data.author.fullname}
            </h3>
            <p className="text-[#697D95] text-sm">
              {formattedDate} &nbsp; {formattedTime}
            </p>
          </div>
        </div>

        {/* Reactions + Actions */}
        <div className="flex items-center gap-6">
          <Reaction />
          <img src={Reply} alt="Reply" className="cursor-pointer" />
          <img src={Share} alt="Share" className="cursor-pointer" />
        </div>
      </div>

      {/* Article content */}
      <h2 className="text-[#252A31] font-medium text-xl mb-2">{data.title}</h2>
      <p className="text-[#4F5E71] text-[15px] font-normal leading-relaxed mb-6">
        {data.text}
      </p>

      {data.image && (
        <img
          src={data.image}
          alt="Article"
          className="w-full rounded-lg mb-6 object-cover"
        />
      )}

      {/* Replies and View Replies */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={Comment} alt="Comment" />
          <span className="text-[#0172CB] font-medium text-sm">13 Replies</span>
        </div>
        <div
          onClick={onViewReplies}
          className="flex items-center gap-1 cursor-pointer"
        >
          <span className="text-[#4F5E71] font-medium text-sm hover:underline"
          >
            View Replies
          </span>
          <img src={ArrowRight} alt="ArrowRight" />
        </div>
      </div>

      {/* Comment Section */}
      {showPanel && (
        <div className="fixed top-[4rem] right-0 w-[400px] h-[calc(100vh-4rem)] bg-white border-l shadow-xl z-50 overflow-y-auto">
          <CommentLayout article={data} onClose={() => setShowPanel(false)} />
        </div>
      )}
    </div>
  );
};

export default AnnouncementCard;

// import React from "react";
// import { useState } from "react";
// import VerifiedProfile from "../assets/images/Avatar profile photo.png";
// import UnLiked from "../assets/images/favorite_border.png";
// import Liked from "../assets/images/favorite.png";
// import Reply from "../assets/images/reply.png";
// import Share from "../assets/images/share.png";
// import Comment from "../assets/images/comment.png";
// import ArrowRight from "../assets/images/chevron_right.png";

// const AnnouncementCard = ({ data }) => {
//   const [liked, setLiked] = useState(data.liked);
//   const [reactions, setReactions] = useState(data.reactions || 0);

//   const handleReaction = () => {
//     if (liked) {
//       setLiked(false)
//       setReactions((prev) => prev - 1);
//     } else {
//       setLiked(true)
//       setReactions((prev) => prev + 1);
//     }
//   };

//   return (
//     <div className="w-4xl px-8 py-6 rounded-lg bg-white mb-4">
//       {/* Author and Post Header  */}
//       <div className="flex justify-between mb-6 ">
//         <div className="flex items-center gap-2">
//           <img
//             src={data.author.verified ? VerifiedProfile : data.author.avatar}
//             alt={data.author.name}
//           />
//           <div>
//             <div>
//               <h3 className="text-[#252A31] font-medium text-lg  ">{data.author.name} </h3>
//             </div>
//             <p className="text-[#697D95] text-sm ">
//               {data.date} | {data.time}
//             </p>
//           </div>
//         </div>
//         <div className="flex justify-between items-center gap-6">
//           <div className="flex gap-1">
//           <img
//             src={liked ? Liked : UnLiked}
//             onClick={handleReaction}
//             alt={liked ? "Liked" : "Not liked"}
//             className="cursor-pointer transition-transform hover:scale-110"
//           />
//           {reactions > 0 && (
//             <span className="text-sm text-[#00A58E] font-medium ">
//               {reactions >= 1000 ? `${(reactions / 1000).toFixed(1)}K` : reactions} {reactions === 1 ? "Reaction" : "Reactions"}
//             </span>
//           )}
//           </div>
//           <img src={Reply} alt="Reply" />
//           <img src={Share} alt="Share" />
//         </div>
//       </div>

//       {/* Post heading and Content */}
//       <div className="w-3xl">
//         <h2 className="text-[#252A31] font-medium text-2xl mb-1 ">{data.title}</h2>
//         <p className="text-[#4F5E71] text-md font-medium mb-6 "> {data.content} </p>
//       </div>

//       {/* image Option */}
//       {data.image && <img src={data.image} alt="Post image" className="w-full mt-6 mb-6 " />}

//       <div className="flex justify-between items-center ">
//         <div className="flex items-center gap-2 ">
//           <img src={Comment} alt="Comment Icon" />
//           {data.replies > 1 ? (
//             <span className="text-[#0172CB] font-medium text-sm">{data.replies >= 1000 ? `${(data.replies / 1000).toFixed(1)}K` : data.replies} Replies </span>
//           ) : data.replies === 1 ? (
//             <span className="text-[#0172CB] font-medium text-sm">1 Reply</span>
//           ) : (
//             <span className="text-[#0172CB] font-medium text-sm">0 Replies</span>
//           )}
//         </div>
//         <div className="flex items-center ">
//           <span className="text-[#4F5E71] font-medium text-sm "> View Replies</span>
//           <span>
//             <img src={ArrowRight} alt="Arrow-right" />
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnnouncementCard;
