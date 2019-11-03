import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import classes from './SideDrawer.module.css';

const SideDrawer = (props) => {
  const sideDrawerClassName = props.show ? 'Open' : 'Close';

  return (
    <>
      <Backdrop 
        show={props.show} 
        clicked={props.closed}
      />
      <div className={[classes.SideDrawer, classes[sideDrawerClassName]].join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;