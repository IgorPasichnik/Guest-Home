import React from "react";
import Styles from "./Input.module.scss";

type MyInputProps = {
  value?: string;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  readOnly?: boolean;
  placeholder?: string;
  maxLength?: number;
};

const MyInput: React.FC<MyInputProps> = ({
  value,
  onClick,
  onChange,
  type = "text",
  readOnly,
  placeholder,
  maxLength,
}) => {
  return (
    <div className={Styles.inputContainer}>
      <input
        className={Styles.inputField}
        type={type}
        value={value}
        readOnly={readOnly}
        placeholder={placeholder}
        onClick={onClick}
        onChange={onChange}
        maxLength={maxLength}
      />
    </div>
  );
};

export default MyInput;
