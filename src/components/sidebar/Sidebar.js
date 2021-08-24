import React from "react";
import "./_sidebar.scss";
import { useDispatch } from "react-redux";
import {
  MdSubscriptions,
  MdExitToApp,
  MdLibraryBooks,
  MdThumbUp,
  MdHistory,
  MdHome,
} from "react-icons/md";
import { log_out } from "../../redux/actions/auth.action";
import { useHistory } from "react-router-dom";

const Sidebar = ({ sidebar }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    history.push("/main");
  };

  const handleLO = () => {
    dispatch(log_out());
  };
  return (
    <nav className={sidebar ? "sidebar open" : "sidebar"}>
      <li onClick={handleClick}>
        <MdHome />
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions />
        <span>Subscriptions</span>
      </li>
      <li>
        <MdLibraryBooks />
        <span>Library</span>
      </li>
      <li>
        <MdHistory />
        <span>History</span>
      </li>
      <li>
        <MdThumbUp />
        <span>Liked videos</span>
      </li>
      <hr />
      <li onClick={handleLO}>
        <MdExitToApp />
        <span>Log out</span>
      </li>
    </nav>
  );
};

export default Sidebar;
