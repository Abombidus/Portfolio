import "./about.css";
import Me from "../../assets/Me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  const paragraph = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eos
            modi aliquid esse necessitatibus amet hic maxime aut itaque pariatur
            fugiat adipisci dolores saepe incidunt tempore, voluptas explicabo
            minus ad!`;
  // const achieve = [
  //   {
  //     id: 0,
  //     logo: <FaAward className="card-icon" />,
  //     detail: "Experience",
  //     info: "3+ Years Working",
  //   },
  //   {
  //     id: 1,
  //     logo: <FiUsers className="card-icon" />,
  //     detail: "Clients",
  //     info: "20+ Worldwide",
  //   },
  //   {
  //     id: 2,
  //     logo: <VscFolderLibrary className="card-icon" />,
  //     detail: "Projects",
  //     info: "30+ Completed",
  //   },
  // ];
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about-container">
        <div className="about-me">
          <img src={Me} alt="Image Profile" />
        </div>

        <div className="about-content">
          {/* Card Info */}
          <div className="about-cards">
            <article className="card">
              <FaAward className="card-icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="card">
              <FiUsers className="card-icon" />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className="card">
              <VscFolderLibrary className="card-icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
            {paragraph}
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
