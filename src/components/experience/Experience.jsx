import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const frontEndTable = [
    // { id: 0, language: "HTML", experience: "Experience" },
    { id: 0, language: "Flutter", experience: "Experience" },
    { id: 1, language: "JavaScript", experience: "Experienced" },
    // { id: 3, language: "CSS", experience: "Experienced" },
    { id: 3, language: "React Native", experience: "Experienced" },
    { id: 4, language: "Tailwind", experience: "Intermediate" },
    // { id: 5, language: "Bootstrap", experience: "Experienced" },
    { id: 5, language: "Material UI", experience: "Experienced" },
    { id: 6, language: "Angular", experience: "Experienced" },
  ];

  const backEndTable = [
    { id: 0, language: "Node Js", experience: "Experience" },
    { id: 1, language: "Express Js", experience: "Experienced" },
    { id: 3, language: "Nest Js", experience: "Experienced" },
    { id: 4, language: "SpringBoot", experience: "Beginner" },
    { id: 5, language: "Django", experience: "Intermediate" },
    { id: 6, language: "PostgreSQL", experience: "Intermediate" },
  ];

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
