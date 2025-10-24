import React, { useState, useEffect } from "react";
import CommentCard from "../Components/CommentCard";
import CommentInput from "../Components/CommentTextArea";

const CommentSection = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [loading, setLoading] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null);

  // Fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(
          `https://titusukpono.pythonanywhere.com/articles/${articleId}/comments/`
        );
        if (res.ok) {
          const data = await res.json();
          console.log("fetched comments:", data);
          setComments(
            Array.isArray(data) ? data : data.results || data.comments || []
          );
        } else {
          console.error("Failed to fetch comments:", res.status);
          setComments([]);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, [articleId]);

  // Handle comment submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    setLoading(true);
    try {
      const url = editingCommentId
        ? `https://titusukpono.pythonanywhere.com/articles/${articleId}/comments/${editingCommentId}/`
        : `https://titusukpono.pythonanywhere.com/articles/${articleId}/comments/`;

      const method = editingCommentId ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: commentText }),
      });

      if (res.ok) {
        const newComment = await res.json();
        if (editingCommentId) {
          setComments((prev) =>
            prev.map((c) => (c.id === editingCommentId ? newComment : c))
          );
        } else {
          setComments((prev) => [newComment, ...prev]);
        }
        setCommentText("");
        setEditingCommentId(null);
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    const comment = comments.find((c) => c.id === id);
    setEditingCommentId(id);
    setCommentText(comment.content);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `https://titusukpono.pythonanywhere.com/articles/${articleId}/comments/${id}/`,
        { method: "DELETE" }
      );
      if (res.ok) {
        setComments((prev) => prev.filter((c) => c.id !== id));
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <div className="w-full md:w-[400px] bg-white border-l h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="font-semibold text-gray-800 text-lg">
          Comments ({comments.length})
        </h2>
      </div>

      {/* Comment list */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {comments.length === 0 ? (
          <p className="text-gray-400 text-sm text-center">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          comments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              articleId={articleId}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

      {/* Comment Input */}
      <CommentInput
        commentText={commentText}
        setCommentText={setCommentText}
        handleSubmit={handleSubmit}
        loading={loading}
        editingCommentId={editingCommentId}
      />
    </div>
  );
};

export default CommentSection;
