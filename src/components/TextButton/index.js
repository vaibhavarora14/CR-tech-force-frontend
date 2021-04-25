import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './TextButton.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      color: '#989898',
      fontSize: '16px',
      textTransform: 'capitalize',
    },
  },
}));

const TextButton = ({ label, onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button onClick={onClick}>{label}</Button>
    </div>
  );
};

export default TextButton;
