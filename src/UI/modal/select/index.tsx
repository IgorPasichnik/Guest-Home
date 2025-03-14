import React, { useState, useRef } from "react";
import styles from "./MySelect.module.scss";
import MyInput from "../../input";

type Option = {
  value: string;
  label: string;
};

interface MySelectProps {
  value: string;
  onChange: (value: string) => void;
  inputsHighlighted: boolean;
  room: string;
}

const MySelect: React.FC<MySelectProps> = ({
  value,
  onChange,
  inputsHighlighted,
  room,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const options: Option[] = [
    { value: "2", label: "2-х местный" },
    { value: "3", label: "3-х местный" },
    { value: "4", label: "4-х местный" },
  ];

  const handleOptionClick = (option: Option) => {
    onChange(option.label); // Передаем значение в `Modal`
    setIsOpen(false);
  };

  return (
    <div className={styles.selectWrapper} ref={selectRef}>
      <MyInput
        value={value}
        readOnly
        onClick={() => setIsOpen(!isOpen)}
        placeholder="Выбрать..."
        error={inputsHighlighted && !room}
      />
      {isOpen && (
        <div className={styles.optionsList}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.optionItem}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MySelect;
