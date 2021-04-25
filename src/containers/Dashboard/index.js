import React from 'react';

import HelpCount from './../../components/HelpCount';
import JumboButton from './../../components/JumboButton';
import Logo from './../../components/Logo';

import hospitalImg from './../../global/assets/icons/hospital.svg';
import medicineImg from './../../global/assets/icons/medicine.svg';
import oxygenImg from './../../global/assets/icons/oxygen.svg';
import superheroImg from './../../global/assets/icons/superhero.svg';
import tiffinImg from './../../global/assets/icons/tiffin.svg';

import './Dashboard.scss';

const categoryData = [
  {
    id: 'hospital',
    imgSrc: hospitalImg,
    primaryText: 'Hospital Beds',
    secondaryText: 'ICU Beds, Oxygen Beds etc',
  },
  {
    id: 'oxygen',
    imgSrc: oxygenImg,
    primaryText: 'Oxygen Supplies',
    secondaryText: 'Cylinders, Refillers etc',
  },
  {
    id: 'medicine',
    imgSrc: medicineImg,
    primaryText: 'Medicines / Remdesivir',
    secondaryText: 'ICU Beds, Oxygen Beds etc',
  },
  {
    id: 'tiffin',
    imgSrc: tiffinImg,
    primaryText: 'Tiffin Services',
    secondaryText: 'Cylinders, Refillers etc',
  },
];

const Dashboard = () => {
  const categories = categoryData.map(
    ({ id, imgSrc, primaryText, secondaryText }) => (
      <JumboButton
        key={id}
        altText={id}
        iconSrc={imgSrc}
        primaryText={primaryText}
        secondaryText={secondaryText}
      />
    )
  );
  return (
    <div className="Dashboard d-flex flex-direction-col align-items-center">
      <section className="Dashboard-top d-flex flex-direction-col align-items-center">
        <Logo isInline={false} />
        <div className="Dashboard-top__teamLabel">
          We’re a team of volunteers, working 24x7 to find you verified leads
          related to all Covid needs.
        </div>
        <HelpCount count={823} />
      </section>
      <section className="Dashboard-bottom"></section>
      <div className="Dashboard-bottom">
        <div className="Dashboard-bottom__categoryHeading text-align-center">
          What are you looking for
        </div>
        <div className="Dashboard-bottom__categories d-flex flex-wrap-wrap justify-content-between">
          {categories}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
