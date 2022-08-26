import React, { useCallback, useRef } from "react";

import "./styles.scss";

const DatePicker = ({ value, placeholder, onChange }) => {
  const datePickerRef = useRef();

  const handleOnChange = useCallback(
    (event) => {
      const { value } = event.target;

      onChange(value);
    },
    [onChange]
  );

  return (
    <input
      ref={datePickerRef}
      className='date-picker'
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={handleOnChange}
      onFocus={() => (datePickerRef.current.type = "date")}
      onBlur={() => (datePickerRef.current.type = "text")}
    />
  );
};

export default DatePicker;
