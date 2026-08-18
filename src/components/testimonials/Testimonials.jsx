import "./testimonials.css";
import Me from "../../assets/Me.jpg";
import Avatar01 from "../../assets/Images/Avatar01.AVIF";
import Avatar02 from "../../assets/Images/Avatar02.AVIF";
import Avatar03 from "../../assets/Images/Avatar03.JPG";
import Book from "../../assets/Book.WEBP";
import Girl00 from "../../assets/Images/Girl00.JPG";
import Girl01 from "../../assets/Images/Girl01.JPG";

// Insertion of Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// IMPORT SWIPER STYLE
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const info = [
    {
      id: 0,
      profile: Me,
      userName: "Abo Mbidus",
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            excepturi vero quibusdam delectus ab molestiae, sed expedita,
            tempora enim at iure quos eveniet aspernatur consequuntur culpa
            aliquam aperiam qui atque.`,
    },
    {
      id: 1,
      profile: Avatar01,
      userName: "Victor Edward",
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            excepturi vero quibusdam delectus ab molestiae, sed expedita,
            tempora enim at iure quos eveniet aspernatur consequuntur culpa
            aliquam aperiam qui atque.`,
    },
    {
      id: 2,
      profile: Avatar02,
      userName: "Marco alphonse",
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            excepturi vero quibusdam delectus ab molestiae, sed expedita,
            tempora enim at iure quos eveniet aspernatur consequuntur culpa
            aliquam aperiam qui atque.`,
    },
    {
      id: 3,
      profile: Avatar03,
      userName: "Daniel allison",
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            excepturi vero quibusdam delectus ab molestiae, sed expedita,
            tempora enim at iure quos eveniet aspernatur consequuntur culpa
            aliquam aperiam qui atque.`,
    },
    {
      id: 4,
      profile: Girl01,
      userName: "Samantha James",
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            excepturi vero quibusdam delectus ab molestiae, sed expedita,
            tempora enim at iure quos eveniet aspernatur consequuntur culpa
            aliquam aperiam qui atque.`,
    },
    {
      id: 5,
      profile: Book,
      userName: "Donald Duck",
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            excepturi vero quibusdam delectus ab molestiae, sed expedita,
            tempora enim at iure quos eveniet aspernatur consequuntur culpa
            aliquam aperiam qui atque.`,
    },
    {
      id: 6,
      profile: Girl00,
      userName: "Ani antoinette",
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            excepturi vero quibusdam delectus ab molestiae, sed expedita,
            tempora enim at iure quos eveniet aspernatur consequuntur culpa
            aliquam aperiam qui atque.`,
    },
  ];
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
