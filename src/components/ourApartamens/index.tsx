import React, { useState } from "react";
import Styles from "./OurApartamens.module.scss";
import CardApartamens from "../cardApartamens/index";
import ModalApartaments from "../../UI/modalApartaments";

const generateImageArray = (folder: string, count: number) => {
  return Array.from({ length: count }, (_, i) =>
    require(`../../images/${folder}/${i + 1}.jpg`)
  );
};

const rooms = [
  {
    id: 1,
    images: generateImageArray("apartamens2", 16),
    title: "2-х местный",
    description:
      "Стандартный номер: санузел, душ, холодильник, смарт-ТВ, столик, бельевой шкаф, кондиционер и текстиль, включая полотенца для каждого гостя.",
  },
  {
    id: 2,
    images: generateImageArray("apartamens3", 8),
    title: "3-х местный",
    description:
      "Уютный номер для троих: санузел, душ, холодильник, смарт-ТВ, столик, бельевой шкаф, кондиционер и текстиль, включая полотенца для каждого гостя.",
  },
  {
    id: 3,
    images: generateImageArray("apartamens4", 3),
    title: "4-х местный",
    description:
      "Просторный номер с четырьмя спальными местами, включающий все удобства: санузел, душ, холодильник, смарт-ТВ, столик, бельевой шкаф, кондиционер и текстиль, включая полотенца для каждого гостя.",
  },
];

const OurApartamens: React.FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const openModal = (room: any) => {
    setSelectedRoom(room);
    setModalActive(true);
  };

  return (
    <div id="our-apartamens" className={Styles.ourApartamens}>
      <div className={Styles.container}>
        <h2>Наши номера</h2>
        <div className={Styles.cards}>
          {rooms.map((room) => (
            <CardApartamens
              key={room.id}
              image={room.images[0]}
              title={room.title}
              description={room.description}
              onClick={() => openModal(room)}
            />
          ))}
        </div>
      </div>

      <ModalApartaments
        active={modalActive}
        setActive={setModalActive}
        room={selectedRoom}
      />
    </div>
  );
};

export default OurApartamens;
