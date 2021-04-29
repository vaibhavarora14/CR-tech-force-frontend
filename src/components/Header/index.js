import React from 'react';
import { useHistory, withRouter } from 'react-router';
import superheroImg from './../../global/assets/icons/superhero.svg';
import JumboButton from './../JumboButton';
import Logo from './../Logo';
import './Header.scss';
import {TwitterFollowButton} from 'react-twitter-embed';

const Header = () => {
  const history = useHistory();
  const showLogo = history.location.pathname !== '/';
  const showSuperheroButton = history.location.pathname !== '/addResources';

  return (
    <header
      className={`Header align-items-center d-flex justify-content-between ${!!showLogo ? '' : 'justify-content-end'
        } ${!!showLogo ? '' : 'isHeader'}`}
    >
      {!!showLogo && <Logo onClick={() => history.push('/')} />}
      {showSuperheroButton && <JumboButton
        altText="superhero"
        iconSrc={superheroImg}
        primaryText="Be a Superhero!"
        secondaryText="Click here to submit info"
        onClick={() => history.push('/addResources')}
      />}


      {!!showLogo ? null :<div style={{position: 'absolute', right: 0}}>
        <TwitterFollowButton
          options={{height: 400}}
          screenName={'COVResourcesIn'}
        />
      </div>}

    </header>
  );
};

export default withRouter(Header);
