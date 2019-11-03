import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  const classNames = 
    props.btnTypes 
      ?
        props.btnTypes
          .split(' ')
          .reduce((acc, type) => {
            acc.push(classes[type]);
            return acc;
          }, [classes.Button])
          .join(' ')
      :
        classes.Button;
          
  return (
    <button
      className={classNames} 
      onClick={props.clicked}
    >{props.children}</button>
  );
}

export default Button;