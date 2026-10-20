import { useContext } from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { AppContext } from "../../context/AppContext";

const Experience = () => {
  const { frontEndTable } = useContext(AppContext);
  const { backEndTable } = useContext(AppContext);

  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My experience</h2>

      <div className="container experience-container">
        {/* FRONTEND TECHNOLOGY  */}

        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            {frontEndTable.map(({ id, language, experience }) => {
              return (
                <article className="experience-detail" key={id}>
                  <BsPatchCheckFill className="experience-detail-icon" />
                  <div>
                    <h4>{language}</h4>
                    <small className="text-light">{experience}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* BACKEND TECHNOLOGY  */}
        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            {backEndTable.map(({ id, language, experience }) => {
              return (
                <article className="experience-detail" key={id}>
                  <BsPatchCheckFill className="experience-detail-icon" />
                  <div>
                    <h4>{language}</h4>
                    <small className="text-light">{experience}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
