import React from 'react';
import logo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const Logo = (props) => (
  <div className={classes.Logo} style={props.styling}>
    <img src={logo} alt="logo" />
  </div> 
);

export default Logo;