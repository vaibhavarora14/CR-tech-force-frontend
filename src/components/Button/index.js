import React from 'react';

import './Button.scss';

const Button = ({ label, onClick }) => {
  return (
    <button className="Button linear-gradient" type="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
