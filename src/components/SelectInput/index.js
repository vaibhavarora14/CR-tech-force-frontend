import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 280,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    '&:focus': {
      background: 'none',
    },
  },
}));

const SelectInput = ({ label, placeholder, options, value, onChange }) => {
  const classes = useStyles();

  const optionsData = options.map((option, index) => (
    <MenuItem key={index} value={option}>
      {option}
    </MenuItem>
  ));

  return (
    <div className="SelectInput">
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          {label}
        </InputLabel>
        <Select
          disableUnderline
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          displayEmpty
          className={classes.selectEmpty}
          IconComponent={() => (
            <KeyboardArrowDownIcon style={{ color: '#bbb' }} />
          )}
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            getContentAnchorEl: null,
          }}
        >
          <MenuItem value="">
            <span>{placeholder}</span>
          </MenuItem>
          {optionsData}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectInput;
