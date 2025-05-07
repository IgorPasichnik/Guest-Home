import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutUs from "../../components/about-us/index";
import Intro from "../../components/intro/index";
import OurApartamens from "../../components/ourApartamens/index";
import Footer from "../../UI/footer";
import Header from "../../UI/header";
import Reviews from "../../components/reviews/index";
import PhotoGallery from "../../components/photoGallery";

const photos = Array.from({ length: 44 }, (_, index) => {
  const photoUrl = `${process.env.REACT_APP_API_URL}/photo-gallery/${
    index + 1
  }.jpg`;
  return {
    id: index + 1,
    src: photoUrl,
    preview: photoUrl,
    description: "Фотокарточки GreenYard",
  };
});

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // const headerHeight = 88;
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        const offset = element.offsetTop;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Header />
      <Intro
        height="90vh"
        sizeTextButton="1.875rem"
        flexHeight="space-evenly"
        sizeLogo="160px"
        nameSize="60px"
      />
      <AboutUs />
      <PhotoGallery photos={photos} />
      <OurApartamens />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;
