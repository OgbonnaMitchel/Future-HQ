import React from "react";

const CommentTextArea = (
  commentText,
  setCommentText,
  handleSubmit,
  loading,
  editingCommentId
) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="border-t p-3 flex items-center gap-2"
    >
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder={
          editingCommentId ? "Edit your comment..." : "Write a comment..."
        }
        className="flex-1 resize-none border rounded-lg p-2 text-sm focus:ring-2 focus:ring-[#00A58E] outline-none"
        rows={2}
      ></textarea>

      <button
        type="submit"
        disabled={loading}
        className="bg-[#00A58E] text-white px-4 py-2 rounded-lg hover:bg-[#00957F] transition"
      >
        {loading ? "..." : editingCommentId ? "Update" : "Send"}
      </button>
    </form>
  );
};

export default CommentTextArea;
