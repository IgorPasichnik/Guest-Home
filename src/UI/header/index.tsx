import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import Styles from "./links.module.scss";
import Modal from "../modal";
import { Link } from "react-router";

const Header: React.FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > window.innerHeight - 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={Styles.headerContainer}>
      <header className={`${Styles.header} ${isShrunk ? Styles.shrunk : ""}`}>
        <nav className={Styles.nav}>
          <Link to="/" className={Styles.logo}>
            <button>
              <img
                src={logo}
                alt="logo"
                className={isShrunk ? Styles.shrunk : Styles.expanded}
              />
            </button>
          </Link>

          <ul className={Styles.navLinks}>
            {["О нас", "Номера", "Отзывы", "Цены", "Контакты"].map(
              (item, index) => (
                <React.Fragment key={index}>
                  <Link
                    to={
                      index === 0
                        ? "/"
                        : index === 1
                        ? "/#OurApartamens"
                        : index === 2
                        ? "/#reviews"
                        : index === 3
                        ? "/pricing"
                        : "/contacts"
                    }
                    className={Styles.links}
                  >
                    {item}
                  </Link>
                  {index < 4 && <div className={Styles.separator} />}
                </React.Fragment>
              )
            )}
          </ul>
        </nav>

        <button
          onClick={() => setModalActive(true)}
          className={`${Styles.reserveBtn} ${
            isShrunk ? Styles.shrunk : Styles.expanded
          }`}
          aria-label="Забронировать номер"
        >
          Забронировать
        </button>
      </header>
      {modalActive && <Modal active={modalActive} setActive={setModalActive} />}
    </div>
  );
};

export default Header;
