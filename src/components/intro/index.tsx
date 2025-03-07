import React, { useState } from "react";
import bg from "../../images/hata.jpg";
import logo from "../../images/logo.png";
import Modal from "../../UI/modal/index";
import Styles from "./Intro.module.scss";

interface IntroProps {
  height: string;
  flexHeight: string;
  sizeTextButton: string;
  sizeLogo: string;
  nameSize: string;
}

const Intro: React.FC<IntroProps> = ({
  height,
  sizeTextButton,
  flexHeight,
  sizeLogo,
  nameSize,
}) => {
  const [modalActive, setModalActive] = useState<boolean>(false);

  return (
    <>
      <div className={Styles.modalContainer}>
        <Modal active={modalActive} setActive={setModalActive} />
      </div>
      <div
        className={Styles.intro}
        style={{
          backgroundImage: `url(${bg})`,
          height: height || "100vh",
          justifyContent: flexHeight,
        }}
      >
        <div className={Styles.content}>
          <img
            src={logo}
            className={Styles.logo}
            alt="logo"
            style={{ width: sizeLogo }}
          />
          <div>
            <h1 className={Styles.playwrite} style={{ fontSize: nameSize }}>
              GreenYard
            </h1>
            <p className={Styles.tagline}>Ваш уютный уголок вдали от дома!</p>
          </div>
        </div>

        <div className={Styles.buttonContainer}>
          <button
            onClick={() => setModalActive(true)}
            className={Styles.reserveBtn}
            style={{ fontSize: sizeTextButton }}
          >
            Забронировать
          </button>
        </div>
      </div>
    </>
  );
};

export default Intro;
