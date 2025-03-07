import React from "react";
import { Link } from "react-router";
import Styles from "./ContactsInformation.module.scss";
import Map from "./yamap";

const ContactsInformation: React.FC = () => {
  return (
    <div className={Styles.contactsContainer}>
      <div className={Styles.content}>
        <h2>Местоположение и контактная информация</h2>
        <div className={Styles.infoContainer}>
          <div className={Styles.mapContainer}>
            <Map />
          </div>

          <div className={Styles.contactDetails}>
            <div className={Styles.infoBlock}>
              <h3>Электронная почта</h3>
              <p>greenyardcrimea@yandex.ru</p>
            </div>
            <div className={Styles.infoBlock}>
              <h3>Телефоны</h3>
              <p>+7 (978) 710-68-13</p>
            </div>
            <div className={Styles.infoBlock}>
              <h3>Адрес:</h3>
              <p>Симферопольский р-н, пгт Николаевка, Советская улица, 33</p>
            </div>
            <div className={Styles.infoBlock}>
              <h3>Время работы</h3>
              <p>Круглосуточно</p>
            </div>
            <div className={Styles.infoBlock}>
              <h3>Наши соц. сети</h3>
              <div className={Styles.socialLinks}>
                <Link to="https://vk.com/green_yard_crimea">→ Вконтакте</Link>
                <Link to="https://t.me/GreenYardCrimea">→ Telegram</Link>
                <Link to="viber://chat?number=%2B9787106813">→ Viber</Link>
                <Link to="https://wa.me/+79787106813">→ Whatsapp</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsInformation;
