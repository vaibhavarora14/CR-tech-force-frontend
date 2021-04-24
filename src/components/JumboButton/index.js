import React from 'react';

import './JumboButton.scss';

const JumboButton = ({ altText, iconSrc, primaryText, secondaryText }) => {
  return (
    <button
      className="JumboButton linear-gradient d-flex align-items-center"
      type="button"
    >
      <img alt={altText} src={iconSrc} />
      <div className="text-align-left">
        <div className="JumboButton-primaryText">{primaryText}</div>
        <div className="JumboButton-secondaryText">{secondaryText}</div>
      </div>
    </button>
  );
};

export default JumboButton;
