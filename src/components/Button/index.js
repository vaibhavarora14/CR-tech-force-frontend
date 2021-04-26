import React from 'react';
import clsx from 'clsx';
import MaterialUIButton from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import './Button.scss';

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: '8px',
    textTransform: 'capitalize',
    padding: '10px 22px 10px 18px',
    justifyContent: 'flex-start',
  },
}));

const Button = ({ style, variant, icon, disabled = false, label, onClick = () => {} }) => {
  const classes = useStyles();

  return (
    <MaterialUIButton
      variant={variant || "contained"}
      color="primary"
      disabled={disabled}
      size="large"
      style={style}
      className={clsx(classes.button, variant ? 'Button' :'Button linear-gradient')}
      startIcon={icon}
      onClick={onClick}
    >
      <span style={{textDecoration: variant ? 'underline': 'none'}}>
        {label}
      </span>
    </MaterialUIButton>
  );
};

export default Button;
