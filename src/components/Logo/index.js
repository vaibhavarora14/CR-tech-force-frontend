import React from 'react';

import logoSrc from './../../global/assets/icons/logo.svg';

import './Logo.scss';

const Logo = () => {
  return (
    <div className="Logo d-flex justify-content-center align-items-center">
      <img alt="Covid Resources" src={logoSrc} />
    </div>
  );
};

export default Logo;
