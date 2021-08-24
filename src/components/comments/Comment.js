import moment from "moment";
import React from "react";
import "./_comment.scss";

const comment = ({ comment }) => {
  const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } =
    comment;

  return (
    <div className="comment p-2 d-flex">
      <img
        src={authorProfileImageUrl}
        alt="tt"
        className=" mr-3 pr-3 rounded-circle"
      />
      <div className="comment_body">
        <p className="comment_header mb-1">
          {authorDisplayName}•{moment({ publishedAt }).fromNow()}
        </p>
        <p className="mb-0">{textDisplay}</p>
      </div>
    </div>
  );
};

export default comment;
