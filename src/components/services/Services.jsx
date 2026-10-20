import { useContext } from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import { AppContext } from "../../context/AppContext";

const Services = () => {
  const serviceList = useContext(AppContext);

  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container services-container">
        {/* SERVICE ONE UI and UX  */}
        <article className="services">
          <div className="services-title">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="services-list">
            {serviceList.map(({ id, paragraph }) => {
              return (
                <>
                  <BiCheck key={id} className="services-list-icon" />
                  <p>{paragraph}</p>
                </>
              );
            })}
          </ul>
        </article>

        {/* SERVICE TWO WEB DEVELOPMENT*/}
        <article className="services">
          <div className="services-title">
            <h3>Web Development</h3>
          </div>
          <ul className="services-list">
            {serviceList.map(({ id, paragraph }) => {
              return (
                <>
                  <BiCheck key={id} className="services-list-icon" />
                  <p>{paragraph}</p>
                </>
              );
            })}
          </ul>
        </article>

        {/* SERVICE ThREE CONTENT CREATION  */}
        <article className="services">
          <div className="services-title">
            <h3>Content Creation</h3>
          </div>
          <ul className="services-list">
            {serviceList.map(({ id, paragraph }) => {
              return (
                <>
                  <BiCheck key={id} className="services-list-icon" />
                  <p>{paragraph}</p>
                </>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
