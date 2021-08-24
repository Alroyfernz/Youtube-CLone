import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCommentsofVideoById,
} from "../../redux/actions/comments.action";
import Comment from "./Comment";
import "./_comments.scss";
const Comments = ({ videoId, totalComments }) => {
  const [text, setText] = useState("");

  const comments = useSelector((state) => state.commentList?.comments);

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentsofVideoById(videoId));
  }, [videoId, dispatch]);

  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return;
    dispatch(addComment(videoId, text));

    setText("");
  };
  return (
    <div class="comments">
      <p>{totalComments} comments</p>
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
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>
      <div className="comment_list">
        {_comments?.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
