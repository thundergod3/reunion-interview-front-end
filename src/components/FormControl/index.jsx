import React from "react";

import "./styles.scss";

const FormControl = ({ label, children }) => {
  return (
    <div className='form-control-container'>
      <div className='form-control-wrapper'>
        <label className='form-control-label'>{label}</label>
        {children}
      </div>
      <div className='form-control-divider' />
    </div>
  );
};

export default FormControl;
