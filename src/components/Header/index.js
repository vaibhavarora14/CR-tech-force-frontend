import React from 'react';
import { withRouter } from 'react-router';

import Button from './../Button';
import Logo from './../Logo';

import './Header.scss';

const Header = (props) => {
  const {
    history: {
      location: { pathname },
    },
  } = props;
  const showLogo = pathname !== '/';

  return (
    <header
      className={`Header d-flex justify-content-between ${
        !!showLogo ? '' : 'justify-content-end'
      }`}
    >
      {!!showLogo && <Logo />}
      <Button label="Become Volunteer" />
    </header>
  );
};

export default withRouter(Header);
