import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutUs from "../../components/about-us/index";
import Intro from "../../components/intro/index";
import OurApartamens from "../../components/ourApartamens/index";
import Footer from "../../UI/footer";
import Header from "../../UI/header";
import Reviews from "../../components/reviews/index";

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
      <OurApartamens />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;
