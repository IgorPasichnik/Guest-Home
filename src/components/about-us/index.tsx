import React from "react";
import Styles from "./AboutUs.module.scss";
import we1 from "../../images/we1.png";
import we2 from "../../images/we2.png";
import we3 from "../../images/we3.png";

const AboutUs: React.FC = () => {
  return (
    <>
      <div className={Styles.aboutUs}>
        <div className={Styles.container}>
          <h2>О нас</h2>

          <div className={Styles.contentBlock}>
            <img src={we1} alt="number1" />
            <div className={Styles.textContent}>
              <p>
                Большая и ухоженная территория, где приятно проводить время и
                наслаждаться природой.
              </p>
            </div>
          </div>

          <div className={Styles.contentBlock}>
            <div className={Styles.textContent}>
              <p>Вкусная кухня с разнообразными блюдами.</p>
            </div>
            <img src={we2} alt="number2" />
          </div>

          <div className={Styles.contentBlock}>
            <img src={we3} alt="number3" />
            <div className={Styles.textContent}>
              <p>
                Небольшое расстояние до моря — всего в нескольких минутах
                пешком!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
