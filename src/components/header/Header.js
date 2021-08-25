import React, { useState } from "react";
import adr from "../../yt.png";
import "../header/_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = ({ handleClick }) => {
  const history = useHistory();
  const value = useSelector((state) => state.auth?.user);
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`screen/${input}`);
  };

  return (
    <div className="border border-dark header">
      <FaBars className="header_menu" size={26} onClick={handleClick} />
      <img src={adr} alt="yt" className="header_logo" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header_icon">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src={value.photoURL} alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
