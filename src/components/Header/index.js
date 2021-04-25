import React from 'react';
import { withRouter } from 'react-router';

import JumboButton from './../JumboButton';
import Logo from './../Logo';

import superheroImg from './../../global/assets/icons/superhero.svg';

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
      <JumboButton
        altText="superhero"
        iconSrc={superheroImg}
        primaryText="Be a Superhero!"
        secondaryText="Click here to submit info"
      />
    </header>
  );
};

export default withRouter(Header);
