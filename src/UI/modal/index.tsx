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
        const response = await fetch(process.env.REACT_APP_SENDEMAIL_URL!, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(feedbackData),
        });

        if (response.ok) {
          setDone(true);
          setName("");
          setPhoneNumber("");
          setEmail("");
          setMessage("");
          setAdults("");
          setChildren("");
          setRoom("");
          setDate("");

          setTimeout(() => {
            setDone(false);
            setActive(false);
          }, 4000);
        } else {
          setError(true);
          throw new Error("Ошибка отправки данных");
        }
      } catch (error) {
        console.log("ошибка");
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
        <h2>Бронирование</h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>
            ФИО<span style={{ color: "red" }}>*</span>
          </label>
          <MyInput
            value={name}
            onChange={handleInputChange(setName)}
            placeholder="Введите ваше ФИО"
            error={inputsHighlighted && !name}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>
            Количество взрослых<span style={{ color: "red" }}>*</span>
          </label>
          <MyInput
            type="number"
            value={adults}
            onChange={handleInputChange(setAdults)}
            placeholder="0"
            error={inputsHighlighted && !adults}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>
            Количество детей<span style={{ color: "red" }}>*</span>
          </label>
          <MyInput
            type="number"
            value={children}
            onChange={handleInputChange(setChildren)}
            placeholder="0"
            error={inputsHighlighted && !children}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>
            Тип номера<span style={{ color: "red" }}>*</span>
          </label>
          <MySelect
            value={room}
            onChange={setRoom}
            inputsHighlighted={inputsHighlighted}
            room={room}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>
            Дата заезда/выезда<span style={{ color: "red" }}>*</span>
          </label>
          <MyCalendar
            value={date}
            onChange={setDate}
            inputsHighlighted={inputsHighlighted}
            date={date}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>
            Телефон<span style={{ color: "red" }}>*</span>
          </label>
          <MyInput
            type="tel"
            value={phoneNumber}
            onChange={handleInputChange(setPhoneNumber)}
            placeholder="+7 (___) ___-__-__"
            error={inputsHighlighted && !phoneNumber}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>
            Email<span style={{ color: "red" }}>*</span>
          </label>
          <MyInput
            type="email"
            value={email}
            onChange={handleInputChange(setEmail)}
            placeholder="example@mail.com"
            error={inputsHighlighted && !email}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Дополнительно</label>
          <MyInput
            value={message}
            onChange={handleInputChange(setMessage)}
            placeholder="Ваши пожелания"
          />
        </div>

        {showMessage ? (
          <div className={Styles.msgErr}>
            <p>Заполните обязательные поля!</p>
          </div>
        ) : done ? (
          <div className={Styles.msgDone}>
            <img src={ready} alt="done" style={{ width: "20px" }} />
            <p>Заявка успешно отправлена!</p>
          </div>
        ) : error ? (
          <div className={Styles.msgErr}>
            <p>Ошибка отправки формы!</p>
          </div>
        ) : (
          <div className={Styles.msgNone}></div>
        )}

        <button
          type="submit"
          // disabled={!isFormValid}
        >
          Отправить
        </button>
      </div>
    </form>
  );
};

export default Modal;
