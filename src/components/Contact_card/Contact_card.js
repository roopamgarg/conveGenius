import React from 'react';
import './Contact_card.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  root: {
    background: '#43a047',
    fontSize:"12px",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "-webkit-fill-available",
    fontSize:"12px",
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: "100%",
  },
  button:{
 
      color: "#fff",
      backgroundColor: "#43a047"

  }
}));

export default () =>{
  const classes = useStyles();
  const [age, setAge] = React.useState('CSR Trust');
  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <div className="contact-card">
      <div className="contact-card__header">
        <p className="contact-card__heading">Looking for partnering opportunities, donations, or general queries?</p>
        <div className="contact-card__dash"></div>
        <p className="contact-card__sub-heading">Fill the form and we will get back to you as soon as possible.</p>
      </div>
      <div className="contact-card__form">
        <div>
          <div  className="select__input">

          YOU ARE &nbsp;&nbsp; <Select
         value={age}
         onChange={handleChange}
          // input={<OutlinedInput  name="age" id="outlined-age-simple" />}
        >
          
          <MenuItem value={"CSR Trust"}>CSR Trust</MenuItem>
          <MenuItem value={"Corporate"}>Corporate</MenuItem>
          <MenuItem value={"School"}>School</MenuItem>
          <MenuItem value={"Individual"}>Individual</MenuItem>

          <MenuItem value={"NGO"}>NGO</MenuItem>

          <MenuItem value={"Foundation / Trust"}>Foundation / Trust</MenuItem>

        </Select>
          </div>
<div className="input-flex">
      <TextField
        id="standard-search"
        label="FULL NAME"
        type="search"
        className={classes.textField}
        margin="normal"
      />
        <TextField
        id="standard-search"
        label="JOB TITLE"
        type="search"
        className={classes.textField}
        margin="normal"
      />
      </div>
      <div className="input-flex">
      <TextField
        id="standard-search"
        label="ORGANISATION"
        type="search"
        className={classes.textField}
        margin="normal"
      />
        <TextField
        id="standard-search"
        label="CITY"
        type="search"
        className={classes.textField}
        margin="normal"
      />
      </div>
      <div>
      <TextField
        id="standard-search"
        label="MOBILE NUMBER"
        type="search"
        className={classes.textField}
        margin="normal"
      />

      </div>
      <div>
      <TextField
        id="standard-search"
        label="EMAIL ADDRESS"
        type="search"
        className={classes.textField}
        margin="normal"
      />

      </div>
      <div>
      <TextField
        id="standard-search"
        label="MESSAGE (Optional)"
        type="search"
        className={classes.textField}
        margin="normal"
      />

      </div>
      <div className="form__button">
      <Button variant="contained" color="primary" className={classes.button}>
        SUBMIT
      </Button>
      </div>
      </div>
      </div>
    </div>

)
  }