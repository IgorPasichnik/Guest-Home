import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import Styles from "./links.module.scss";
import Modal from "../modal";
import { Link } from "react-router";
import closeIcon from "../../images/close-64.png";
import menuIcon from "../../images/menu-50.png";

const Header: React.FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

          <button
            className={Styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img
              src={menuOpen ? closeIcon : menuIcon}
              className={`${Styles.menuIcon} ${isShrunk ? Styles.shrunk : ""}`}
            />
          </button>

          <ul className={`${Styles.navLinks} ${menuOpen ? Styles.open : ""}`}>
            {[
              "О нас",
              "Фотогалерея",
              "Номера",
              "Отзывы",
              "Цены",
              "Контакты",
            ].map((item, index) => (
              <React.Fragment key={index}>
                <Link
                  to={
                    index === 0
                      ? "/"
                      : index === 1
                      ? "/#photo-gallery"
                      : index === 2
                      ? "/#our-apartamens"
                      : index === 3
                      ? "/#reviews"
                      : index === 4
                      ? "/pricing"
                      : "/contacts"
                  }
                  className={Styles.links}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
                {index < 5 && <div className={Styles.separator} />}
              </React.Fragment>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => setModalActive(true)}
          className={`${Styles.reserveBtn} ${
            isShrunk ? Styles.shrunk : Styles.expanded
          }`}
        >
          Забронировать
        </button>
      </header>
      <div className={Styles.modalContainer}>
        <Modal active={modalActive} setActive={setModalActive} />
      </div>
    </div>
  );
};

export default Header;
