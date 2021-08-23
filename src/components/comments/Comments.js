import React from "react";
import Comment from "./Comment";
import "./_comments.scss";
const Comments = () => {
  const handleComment = () => {};
  return (
    <div class="comments">
      <p>1234 comments</p>
      <div className="comment_form d-flex w-100 my-2">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/102/204/987/black-panther-black-background-minimalism-marvel-comics-wallpaper-preview.jpg"
          alt="tt"
          className="rounded-circle mr-3"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            placeholder="write a comment.."
            className="flex-grow-1"
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>
      <div className="comment_list">
        {[...Array(15)].map(() => (
          <Comment />
        ))}
      </div>
    </div>
  );
};

export default Comments;
