import React from 'react';
import { Typography } from '@material-ui/core';

import superheroImg from '../../global/assets/icons/superhero.svg';
import FooterButton from '../FooterButton'
import './Footer.scss';


const footerLinks = [
    {
      id: 'leads',
      primaryText: "Have any lead?",
      secondaryText: "Click Here to Submit Info"
    },
    {
      id: 'volunteer',
      primaryText: "Volunteer with us",
      secondaryText: "Click Here to join the mission"
    },
    {
      id: 'partner',
      primaryText: "Become Data Partner",
      secondaryText: "Click Here to join the mission"
    }
  ];
  
  const footerDescriptionData = [
    {
      id: 1,
      text: "We’re a team of strangers. A common mission -- to help India during the Covid crisis, brought us all together to create this platform."
    },
    {
      id: 2,
      text: "We need your support. If you’ve any verified information, we sincerely request you to add it. Don’t worry! We’ll verify it before publishing."
    },
    {
      id: 3,
      text: "If you want to help us in verifying and updating all the information, please become a volunteer. We need you. India needs you! 🇮🇳"
    },
    {
      id: 4,
      text: "If you’ve developed a similar platform, let’s join hands to create a common database, enabling consistent information across the platforms."
    }
  ];

const Footer = () => {
    const footerButtons = footerLinks.map(({ id, primaryText, secondaryText }) => (
        <FooterButton
          key={id}
          primaryText={primaryText}
          secondaryText={secondaryText}
        />
    ));
  
    const footerText = footerDescriptionData.map(({ id, text }) => (
      <Typography color="secondary" gutterBottom className="footer__container-superhero-description-item" key={id}>{text}</Typography>
    ))
    return (
        <footer className="footer d-flex flex-wrap-wrap justify-content-center">
            <div className="footer__container d-flex">
                <div className="footer__container-superhero d-flex">
                    <div className="footer__container-superhero-photoContainer">
                        <img src={superheroImg} alt="Superhero icon" className="footer__container-superhero-photo" />
                    </div>
                    <div className="footer__container-superhero-textContainer">
                      <Typography gutterBottom variant="h5" color="secondary" className="footer__container-superhero-title">Be a Superhero! Join forces</Typography>
                      <div className="footer__container-superhero-description">
                          {footerText}
                      </div>
                    </div>
                </div>
                <div className="footer__container-links d-flex justify-content-center">
                    {footerButtons}
                </div>
            </div>
        </footer>
    )
};

export default Footer;