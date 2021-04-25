import React from 'react';
import MaterialUIButton from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import './Button.scss';

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: '8px',
    textTransform: 'capitalize',
    padding: '10px 22px 10px 18px',
    justifyContent: 'flex-start',
  },
}));

const Button = ({ icon, disabled = false, label, onClick = () => {} }) => {
  const classes = useStyles();

  return (
    <MaterialUIButton
      variant="contained"
      color="primary"
      disabled={disabled}
      size="large"
      className={clsx(classes.button, 'Button linear-gradient')}
      startIcon={icon}
      onClick={onClick}
    >
      {label}
    </MaterialUIButton>
  );
};

export default Button;
