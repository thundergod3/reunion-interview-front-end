import React from "react";
import { useCallback } from "react";

import "./styles.scss";

const InputField = ({ type, value, placeholder, onChange }) => {
  const handleOnChange = useCallback(
    (event) => {
      const { value } = event.target;

      onChange(value);
    },
    [onChange]
  );

  return type === "variant" ? (
    <input
      className='input-filed-variant'
      value={value}
      placeholder={placeholder}
      onChange={handleOnChange}
    />
  ) : (
    <input
      className='input-filed-none'
      value={value}
      placeholder={placeholder}
      onChange={handleOnChange}
    />
  );
};

export default InputField;
