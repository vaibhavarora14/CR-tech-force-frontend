import React from 'react';

import logoSrc from './../../global/assets/icons/logo.svg';

import './Logo.scss';

const Logo = (props) => {
  const { isInline = true, onClick } = props
  return (
    <div
      onClick={onClick}
      className={`Logo ${!!isInline ? 'inline' : 'vertical flex-direction-col'
        } d-flex justify-content-center align-items-center`}
    >
      <div className="Logo-icon d-flex justify-content-center align-items-center">
        <img alt="Covid Resources" src={logoSrc} />
      </div>
      <div className="Logo-text d-flex justify-content-center">
        <span className="first">Covid</span>
        <span className="second">Resources.in</span>
      </div>
    </div>
  );
};

export default Logo;
