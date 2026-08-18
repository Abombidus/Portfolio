import "./navBar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";

const NavBar = () => {
  const [activate, setActivate] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={activate === "#" ? "active" : ""}
        onClick={() => {
          setActivate("#");
        }}
      >
        <AiOutlineHome />
      </a>

      <a
        href="#about"
        className={activate === "#about" ? "active" : ""}
        onClick={() => {
          setActivate("#about");
        }}
      >
        <AiOutlineUser />
      </a>

      <a
        href="#experience"
        className={activate === "#experience" ? "active" : ""}
        onClick={() => {
          setActivate("#experience");
        }}
      >
        <BiBook />
      </a>

      <a
        href="#services"
        className={activate === "#services" ? "active" : ""}
        onClick={() => {
          setActivate("#services");
        }}
      >
        <RiServiceLine />
      </a>

      <a
        href="#contact"
        className={activate === "#contact" ? "active" : ""}
        onClick={() => {
          setActivate("#contact");
        }}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default NavBar;
