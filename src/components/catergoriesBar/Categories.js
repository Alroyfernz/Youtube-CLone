import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
import "./_categories.scss";
const Categories = () => {
  const [active, setActive] = useState("All");
  const data = [
    "ALL",
    "React.js",
    "Frontend",
    "Backend",
    "Football",
    "React native",
    "Redux",
    "Data structures",
  ];

  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActive(value);
    if (value === "ALL") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(value));
    }
  };

  return (
    <div className=" categoriesBar ">
      {data.map((value, i) => (
        <span
          key={i}
          onClick={() => handleClick(value)}
          className={active === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default Categories;
