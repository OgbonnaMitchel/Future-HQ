
import React, { useEffect, useState } from "react";
import axios from "axios";
import AnnouncementCard from "./AnnouncementCard";
// import CommentSection from "./CommentSection";
import CommentLayout from "./CommentLayout";

const AnnouncementCardList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeArticle, setActiveArticle] = useState(null);

  // ✅ Fetch all articles
  useEffect(() => {
    axios
      .get("https://titusukpono.pythonanywhere.com/articles/")
      .then((res) => {
        // adjust if API returns array directly
        setArticles(res.data.results || res.data);
      })
      .catch((err) => console.error("Error fetching articles:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <div className="animate-spin h-12 w-12 border-t-2 border-[#00A58E] rounded-full"></div>
      </div>
    );
  }

  return (
    <div className=" flex justify-center items-start w-full h-[calc(100vh-4rem)] transition-all duration-500 ease-in-out p-6">
      {/* 📢 Announcements List */}
      <div
        className={`
                h-full overflow-y-auto 
                transition-all duration-500 ease-in-out no-scrollbar
                ${
                  activeArticle ? "w-[65%] mr-4" : "w-full flex justify-center"
                } 
            `}
      >
        <div className="space-y-6 w-full max-w-4xl mx-auto">
          {articles.map((item) => (
            <AnnouncementCard
              key={item.id}
              data={item}
              onViewReplies={() => setActiveArticle(item)}
              isSelected={activeArticle && activeArticle.id === item.id}
            />
          ))}
        </div>
      </div>

      {/* 💬 Comment Panel */}
      <div
       className={`
                h-full 
                flex-shrink-0
                bg-white shadow-xl 
                transition-all duration-500 ease-in-out no-scrollbar
                overflow-y-auto
                ${activeArticle ? "w-[35%] min-w-[400px] "  : "w-0 overflow-hidden"} 
            `}
      >
        {activeArticle && (
          <CommentLayout
            articleId={activeArticle.id}
            article={activeArticle}
            onClose={() => setActiveArticle(null)}
          />
        )}
      </div>
    </div>
  );
};

export default AnnouncementCardList;
