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
  error?: boolean;
};

const MyInput: React.FC<MyInputProps> = ({
  value,
  onClick,
  onChange,
  type = "text",
  readOnly,
  placeholder,
  maxLength,
  error,
}) => {
  return (
    <input
      className={`${Styles.inputField} ${error ? Styles.error : ""}`.trim()}
      type={type}
      value={value}
      readOnly={readOnly}
      placeholder={placeholder}
      onClick={onClick}
      onChange={onChange}
      maxLength={maxLength}
    />
  );
};

export default MyInput;
