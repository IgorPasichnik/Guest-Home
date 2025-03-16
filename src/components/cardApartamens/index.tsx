import React from "react";
import Styles from "./CardApartamens.module.scss";

interface CardApartamensProps {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
}

const CardApartamens: React.FC<CardApartamensProps> = ({
  image,
  title,
  description,
  onClick,
}) => {
  return (
    <div className={Styles.cardApartamens}>
      <img src={image} alt={title} />
      <div className={Styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={Styles.cardButton}>
        <button onClick={onClick}>Подробнее</button>
      </div>
    </div>
  );
};

export default CardApartamens;
