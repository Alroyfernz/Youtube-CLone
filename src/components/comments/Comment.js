import moment from "moment";
import React from "react";
import "./_comment.scss";

const comment = () => {
  return (
    <div className="comment p-2 d-flex">
      <img
        src="https://c4.wallpaperflare.com/wallpaper/102/204/987/black-panther-black-background-minimalism-marvel-comics-wallpaper-preview.jpg"
        alt="tt"
        className=" mr-3 pr-3 rounded-circle"
      />
      <div className="comment_body">
        <p className="comment_header mb-1">
          Alroy Fernandes•{moment("2020-06-6").fromNow()}
        </p>
        <p className="mb-0">Nice video</p>
      </div>
    </div>
  );
};

export default comment;
