import React, { useCallback } from "react";

import "./styles.scss";

const SelectField = ({ value, placeholder, onChange, options = [] }) => {
  const handleOnChange = useCallback(
    (event) => {
      const { value } = event.target;
      onChange(value);
    },
    [onChange]
  );

  return (
    <select value={value} onChange={handleOnChange} className='select-field'>
      <option value='' disabled selected>
        {placeholder}
      </option>
      {options?.map((record) => (
        <option key={record?.value} value={record?.value}>
          {record?.label}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
