import logo from "../../images/logo.png";
import Styles from "./links.module.scss";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className={Styles.footer}>
        <nav>
          <div className={Styles.logo}>
            <img src={logo} alt="logo" />
            <h1 className={Styles.playwrite}>GreenYard</h1>
          </div>

          <ul className={Styles.navLinks}>
            <Link to="/">О нас</Link>
            <Link to="/#photo-gallery">Фотогалерея</Link>
            <Link to="/#our-apartamens">Номера</Link>
            <Link to="/#reviews">Отзывы</Link>
            <Link to="/pricing">Цены</Link>
            <Link to="/contacts">Контакты</Link>
          </ul>

          <ul className={Styles.socialLinks}>
            <Link to="https://vk.com/green_yard_crimea">
              <div className={Styles.vk} />
            </Link>
            <Link to="https://t.me/GreenYardCrimea">
              <div className={Styles.telegram} />
            </Link>
            <Link to="viber://chat?number=%2B9787106813">
              <div className={Styles.viber} />
            </Link>
            <Link to="https://wa.me/+79787106813">
              <div className={Styles.whatsapp} />
            </Link>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
