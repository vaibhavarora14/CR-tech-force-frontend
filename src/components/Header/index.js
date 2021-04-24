import React from 'react';

import Button from '../Button';

import './Header.scss';

const Header = () => {
  return (
    <header className="Header d-flex justify-content-end">
      <Button label="Become Volunteer" />
    </header>
  );
};

export default Header;
