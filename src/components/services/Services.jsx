import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  const serviceList = [
    {
      id: 0,
      paragraph: `Lorem ipsum dolor sit eme consectetur a discipling elite.`,
    },
    {
      id: 1,
      paragraph: `Lorem ipsum dolor sit eme consectetur a discipling elite.`,
    },
    {
      id: 2,
      paragraph: `Lorem ipsum dolor sit eme consectetur a discipling elite.`,
    },
    {
      id: 3,
      paragraph: `Lorem ipsum dolor sit eme consectetur a discipling elite.`,
    },
    {
      id: 4,
      paragraph: `Lorem ipsum dolor sit eme consectetur a discipling elite.`,
    },
    {
      id: 5,
      paragraph: `Lorem ipsum dolor sit eme consectetur a discipling elite.`,
    },
  ];
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
