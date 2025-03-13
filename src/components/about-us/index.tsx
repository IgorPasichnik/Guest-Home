import React from "react";
import Styles from "./AboutUs.module.scss";
import we1 from "../../images/we1.png";
import we2 from "../../images/we2.png";
import we3 from "../../images/we3.png";

const contentBlocks = [
  {
    img: we1,
    alt: "number1",
    text: "Большая и ухоженная территория, где приятно проводить время и наслаждаться природой.",
    reverse: false,
  },
  {
    img: we2,
    alt: "number2",
    text: "Вкусная кухня с разнообразными блюдами.",
    reverse: true,
  },
  {
    img: we3,
    alt: "number3",
    text: "Небольшое расстояние до моря — всего в нескольких минутах пешком!",
    reverse: false,
  },
];

const AboutUs: React.FC = () => {
  return (
    <div className={Styles.aboutUs}>
      <div className={Styles.container}>
        <h2>О нас</h2>

        {contentBlocks.map(({ img, alt, text, reverse }, index) => (
          <div
            key={index}
            className={Styles.contentBlock}
            style={{ flexDirection: reverse ? "row-reverse" : "row" }}
          >
            <img src={img} alt={alt} />
            <div className={Styles.textContent}>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={Styles.reviewsSeparator}>
        <hr />
      </div>
    </div>
  );
};

export default AboutUs;
