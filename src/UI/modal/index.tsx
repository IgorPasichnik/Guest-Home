import React, { useState } from "react";
import MyInput from "../input";
import MySelect from "./select";
import MyCalendar from "./calendar";
import Styles from "./Modal.module.scss";
import ready from "../../images/done-48.png";

interface ModalProps {
  active: boolean;
  setActive: (isActive: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ active, setActive }) => {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [adults, setAdults] = useState<string>("");
  const [children, setChildren] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const [inputsHighlighted, setInputsHighlighted] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const isFormValid =
    name !== "" &&
    email !== "" &&
    message !== "" &&
    phoneNumber !== "" &&
    adults !== "" &&
    children !== "" &&
    room !== "" &&
    date !== "";

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      setShowMessage(false);
      setInputsHighlighted(false);
      if (error) setError(false);
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      const feedbackData = {
        name,
        email,
        message,
        phoneNumber,
        adults,
        children,
        room,
        date,
      };
      try {
        const response = await fetch(
          process.env.REACT_APP_SENDEMAIL_URL || "",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(feedbackData),
          }
        );

        if (response.ok) {
          setDone(true);
          setTimeout(() => setActive(false), 3000);
        } else {
          setError(true);
          throw new Error("Ошибка отправки данных");
        }
      } catch (error) {
        console.error("Ошибка:", error);
        setError(true);
      }
    } else {
      setShowMessage(true);
      setInputsHighlighted(true);
    }
  };

  return (
    <form
      onClick={() => setActive(false)}
      className={`${Styles.modalOverlay} ${
        active ? Styles.active : Styles.hidden
      }`}
      onSubmit={handleSubmit}
    >
      <div onClick={(e) => e.stopPropagation()} className={Styles.modalContent}>
        <h1>Бронирование</h1>
        <div>
          <label>ФИО*</label>
          <MyInput
            value={name}
            onChange={handleInputChange(setName)}
            placeholder="Введите ваше ФИО"
          />
        </div>
        <div>
          <label>Количество взрослых*</label>
          <MyInput
            type="number"
            value={adults}
            onChange={handleInputChange(setAdults)}
            placeholder="0"
          />
        </div>
        <div>
          <label>Количество детей*</label>
          <MyInput
            type="number"
            value={children}
            onChange={handleInputChange(setChildren)}
            placeholder="0"
          />
        </div>
        <div>
          <label>Тип номера*</label>
          <MySelect value={room} onChange={setRoom} />
        </div>
        <div>
          <label>Дата заезда/выезда*</label>
          <MyCalendar value={date} onChange={setDate} />
        </div>
        <div>
          <label>Телефон*</label>
          <MyInput
            type="tel"
            value={phoneNumber}
            onChange={handleInputChange(setPhoneNumber)}
            placeholder="+7 (___) ___-__-__"
          />
        </div>
        <div>
          <label>Email*</label>
          <MyInput
            type="email"
            value={email}
            onChange={handleInputChange(setEmail)}
            placeholder="example@mail.com"
          />
        </div>
        <div>
          <label>Дополнительно</label>
          <MyInput
            value={message}
            onChange={handleInputChange(setMessage)}
            placeholder="Ваши пожелания"
          />
        </div>

        {showMessage ? (
          <div className={Styles.msgErr}>
            <p>Заполните обязательные поля и примите условия соглашения.</p>
          </div>
        ) : done ? (
          <div className={Styles.msgDone}>
            <img src={ready} alt="done" style={{ width: "10px" }} />
            <p>Заявка успешно отправлена!</p>
          </div>
        ) : error ? (
          <div className={Styles.msgErr}>
            <p>Ошибка отправки формы!</p>
          </div>
        ) : (
          <div className="h-[28px]"></div>
        )}

        <button type="submit" disabled={!isFormValid}>
          Отправить
        </button>
      </div>
    </form>
  );
};

export default Modal;
