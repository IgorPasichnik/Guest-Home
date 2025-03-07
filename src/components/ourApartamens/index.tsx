import React from "react";
import Styles from "./OurApartamens.module.scss";
import CardApartamens from "../cardApartamens/index";
import room1 from "../../images/room1.png";
import room2 from "../../images/room2.png";
import room3 from "../../images/room3.png";

const OurApartamens: React.FC = () => {
  return (
    <div id="OurApartamens" className={Styles.ourApartamens}>
      <div className={Styles.container}>
        <h1>Наши номера</h1>
        <div className={Styles.cards}>
          <CardApartamens
            image={room1}
            title="2-х местный"
            description="Стандартный номер: санузел, душ, холодильник, смарт-телевизор, столик, бельевой шкаф, кондиционер и текстиль, включая полотенца для каждого гостя."
          />
          <CardApartamens
            image={room2}
            title="3-х местный"
            description="Стандартный номер: санузел, душ, холодильник, смарт-телевизор, столик, бельевой шкаф, кондиционер и текстиль, включая полотенца для каждого гостя."
          />
          <CardApartamens
            image={room3}
            title="4-х местный"
            description="Стандартный номер: санузел, душ, холодильник, смарт-телевизор, столик, бельевой шкаф, кондиционер и текстиль, включая полотенца для каждого гостя."
          />
        </div>
      </div>
    </div>
  );
};

export default OurApartamens;
