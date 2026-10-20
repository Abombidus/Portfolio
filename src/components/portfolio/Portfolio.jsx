import "./portfolio.css";
import A from "../../assets/A.JPG";
import Business from "../../assets/Business.JPG";
import Eleve from "../../assets/Eleve.JPG";
import Avatar00 from "../../assets/Images/Avatar00.AVIF";
import Avatar04 from "../../assets/Images/Avatar04.JPG";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: A,
      title: " React Restaurant Application",
      github: "https://github.com/abombidus/resto-App.git",
      dribbble: "https://dribbble.com/Alien_pixel",
    },
    {
      id: 2,
      image: Business,
      title: "Energie Management System",
      github: "https://github.com/abombidus/Mama_fanta-.git",
      dribbble: "https://dribbble.com/shots/16673715-Crypto",
    },
    {
      id: 3,
      image: Avatar00,
      title: "Durable Impact Portfolio",
      github: "https://github.com/Abombidus/durable-impact-portfolio.git",
      dribbble: "https://dribbble.com/shots/16673715-Crypto",
    },
    {
      id: 4,
      image: Eleve,
      title: "React Note Application",
      github: "https://github.com/Abombidus/noteApp.git",
      dribbble: "https://dribbble.com/shots/16673715-Crypto",
    },
    {
      id: 5,
      image: Avatar04,
      title: "E-commerce Application Logic",
      github: "https://github.com/Abombidus/ecommerce_js_fundamentals.git",
      dribbble: "https://dribbble.com/shots/16673715-Crypto",
    },
    {
      id: 6,
      image: A,
      title: "WhatsApp Clone Application",
      github: "https://github.com/Abombidus/Whatsap.git",
      dribbble: "https://dribbble.com/shots/16673715-Crypto",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {data.map(({ id, image, title, github, dribbble }) => {
          return (
            <>
              <article className="portfolio-item" key={id}>
                <div className="portfolio-item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a
                    href={dribbble}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
