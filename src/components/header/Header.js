import React from "react";
import adr from "../../yt.png";
import "../header/_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
const Header = ({ handleClick }) => {
  return (
    <div className="border border-dark header">
      <FaBars className="header_menu" sizee={26} onClick={handleClick} />
      <img src={adr} alt="yt" className="header_logo" />
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header_icon">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://c4.wallpaperflare.com/wallpaper/102/204/987/black-panther-black-background-minimalism-marvel-comics-wallpaper-preview.jpg"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
