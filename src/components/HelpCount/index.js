import React from 'react';

import thumsupIcon from './../../global/assets/icons/thumsup.svg';

import './HelpCount.scss';

const HelpCount = ({ count }) => {
  return (
    <div className="HelpCount d-flex align-items-center">
      <img alt="thumsup" src={thumsupIcon} />
      <span className="HelpCount-count">{count} patients</span>
      <span>found this helpful</span>
    </div>
  );
};

export default HelpCount;
