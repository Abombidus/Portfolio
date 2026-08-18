import "./header.css";
import CTA from "./CTA";
import Rme from "../../assets/Rme.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <>
      <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Mbida Pierre Bertrand B.</h1>
          <h5 className="text-light">Full Stack Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <img src={Rme} alt="Me image without background" />
          </div>
          <a href="#contact" className="scroll-down">
            Scroll_down
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
