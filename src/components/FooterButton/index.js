import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Button from '@material-ui/core/Button';
import './FooterButton.scss';

const useStyles = makeStyles((theme) => ({
    button: {
      borderRadius: '8px',
      textTransform: 'capitalize',
      padding: '10px 22px 10px 18px',
      justifyContent: 'flex-start',
      margin: "12px 0"
    },
  }));

const FooterButton = ({ primaryText, secondaryText, onClick = () => {}, }) => {
    const classes = useStyles();
    return (
        <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={onClick}
            className={clsx(classes.button, "FooterButton")}
        >
            <div className="text-align-left">
                <div className="FooterButton-primaryText">{primaryText}</div>
                <div className="FooterButton-secondaryText">{secondaryText}</div>
            </div>
        </Button>
    )
};

export default FooterButton;