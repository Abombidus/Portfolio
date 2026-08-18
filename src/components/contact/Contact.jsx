import { MdOutlineEmail } from "react-icons/md";
import "./contact.css";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_75p2ek9", "template_9dgn34s", form.current, {
        publicKey: "BwdRNK2OpnW3T9mFE",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );

    e.target.reset();
  };

  const table = [
    {
      id: 0,
      logo: <MdOutlineEmail className="contact-option-icon" />,
      title: "Email",
      detail: "abombidus@gmail.com",
      link: "mailto:abombidus@gmail.com",
    },
    {
      id: 1,
      logo: <RiMessengerLine className="contact-option-icon" />,
      title: "Messenger",
      detail: "abombidusPortfolio",
      link: "https://m.me/abombidus",
    },
    {
      id: 2,
      logo: <BsWhatsapp className="contact-option-icon" />,
      title: "WhatsApp",
      detail: "+123456789",
      link: "https://api.whatsapp.com/send?phone+237695833316",
    },
  ];
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          {table.map(({ id, logo, title, link }) => {
            return (
              <article key={id} className="contact-option">
                {logo}
                <h4>{title}</h4>
                {/* <h5>{detail}</h5> */}
                <a href={link} target="_blank ">
                  Send a message
                </a>
              </article>
            );
          })}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder=" Enter your name......."
            required="required"
          />
          <input
            type="text"
            name="email"
            placeholder=" Enter your e-mail......."
            required="required"
          />
          <textarea
            rows={7}
            name="message"
            placeholder=" Your Message......."
            required="required"
          ></textarea>
          <button type="submit" className="btn btn-primary caller">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
