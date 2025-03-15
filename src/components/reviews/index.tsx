import React, { useState, useEffect } from "react";
import CardReviews from "../cardReviews";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowNext from "../../images/arrow-next-48.png";
import arrowBack from "../../images/arrow-back-48.png";
import Styles from "./Reviews.module.scss";
import { dataReviews } from "./reviews";
import { Link } from "react-router";

interface ArrowProps {
  className?: string;
  onClick?: () => void;
}

const SampleNextArrow: React.FC<ArrowProps> = ({ className, onClick }) => (
  <img
    src={arrowNext}
    onClick={onClick}
    className={`slick-next ${className}`}
  />
);

const SamplePrevArrow: React.FC<ArrowProps> = ({ className, onClick }) => (
  <img
    src={arrowBack}
    onClick={onClick}
    className={`slick-prev ${className}`}
  />
);

const Reviews: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      setSlidesToShow(1);
    } else if (width <= 1024) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: isMobile ? 3000 : 5000,
    focusOnSelect: true,
    nextArrow: isMobile ? undefined : <SampleNextArrow />,
    prevArrow: isMobile ? undefined : <SamplePrevArrow />,
  };

  return (
    <>
      <div className={Styles.reviewsSeparator}>
        <hr />
      </div>
      <div className={Styles.reviewsContainer} id="reviews">
        <h2>Отзывы</h2>
        <div className={Styles.reviewsContent}>
          <Slider {...settings} className={Styles.reviewsSlide}>
            {dataReviews.map((review) => (
              <CardReviews
                key={review.id}
                description={review.description}
                name={review.name}
              />
            ))}
          </Slider>
        </div>
        <div className={Styles.reviewButton}>
          <p>Понравилось у нас?</p>
          <Link to="https://yandex.ru/maps/?ll=33.609383%2C44.964184&mode=poi&poi%5Bpoint%5D=33.609494%2C44.963976&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D215222773190&tab=reviews&z=19">
            <button>Оставить отзыв</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Reviews;
