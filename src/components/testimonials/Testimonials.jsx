import "./testimonials.css";

// Insertion of Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// IMPORT SWIPER STYLE
import "swiper/css";
import "swiper/css/pagination";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Testimonials = () => {
  const { info } = useContext(AppContext);

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        //Install Swiper modules
        style={{ transition: "all 400ms ease" }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: true }}
        Pagination={{ clickable: true }}
        slidesPerView={1}
        loop={true}
        className=" container testimonials-container"
      >
        <div className="container testimonials-container">
          {info.map(({ id, profile, userName, text }) => {
            return (
              <SwiperSlide>
                <article className="testimonials" key={id}>
                  <div className="client-avatar">
                    <img src={profile} alt="Avatar image" />
                  </div>
                  <h5 className="client-name">{userName}</h5>
                  <small className="client-review">{text}</small>
                </article>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonials;
