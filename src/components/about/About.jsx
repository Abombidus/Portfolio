import "./about.css";
import Me from "../../assets/Me.jpg";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const About = () => {
  const { paragraph, items } = useContext(AppContext);

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
            {items.map(({ id, icon, h5, small }) => {
              return (
                <div>
                  <article className="card" key={id}>
                    {icon}
                    <h5>{h5}</h5>
                    <small>{small}</small>
                  </article>
                </div>
              );
            })}
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
