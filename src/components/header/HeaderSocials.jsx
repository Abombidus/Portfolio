import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a href="https://linkdIn.com" target="__blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/abombidus/porfolio.git" target="__blank">
        <FaGithub />
      </a>
      <a href="https://dribbble.com" target="__blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
