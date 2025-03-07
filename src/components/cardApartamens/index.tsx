import React from "react";
import Styles from "./CardApartamens.module.scss";

interface CardApartamensProps {
  image: string;
  title: string;
  description: string;
}

const CardApartamens: React.FC<CardApartamensProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className={Styles.card}>
      <img src={image} alt={title} />
      <div className={Styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={Styles.cardButton}>
        <button>Подробнее</button>
      </div>
    </div>
  );
};

export default CardApartamens;
