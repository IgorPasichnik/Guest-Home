import React, { useState } from "react";
import Styles from "./OurApartamens.module.scss";
import CardApartamens from "../cardApartamens/index";
import ModalApartaments from "../../UI/modalApartaments";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const generateImageUrls = (folder: string, count: number) => {
  return Array.from(
    { length: count },
    (_, i) => `${API_BASE_URL}/${folder}/${i + 1}.jpg`
  );
};

const rooms = [
  {
    id: 1,
    folder: "apartamens2",
    imageCount: 16,
    title: "2-х местный",
    description:
      "Стандартный номер: санузел, душ, холодильник, смарт-ТВ, столик, бельевой шкаф, кондиционер и текстиль, включая полотенца для каждого гостя.",
  },
  {
    id: 2,
    folder: "apartamens3",
    imageCount: 8,
    title: "3-х местный",
    description:
      "Уютный номер для троих: санузел, душ, холодильник, смарт-ТВ, столик, бельевой шкаф, кондиционер и текстиль, включая полотенца для каждого гостя.",
  },
  {
    id: 3,
    folder: "apartamens4",
    imageCount: 3,
    title: "4-х местный",
    description:
      "Просторный номер с четырьмя спальными местами, включающий все удобства: санузел, душ, холодильник, смарт-ТВ, столик, бельевой шкаф, кондиционер и текстиль, включая полотенца для каждого гостя.",
  },
];

const OurApartamens: React.FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState({
    ...rooms[0],
    images: generateImageUrls(rooms[0].folder, rooms[0].imageCount),
  });

  const openModal = (room: (typeof rooms)[number]) => {
    setSelectedRoom({
      ...room,
      images: generateImageUrls(room.folder, room.imageCount),
    });
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
              image={`${API_BASE_URL}/${room.folder}/1.jpg`}
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
