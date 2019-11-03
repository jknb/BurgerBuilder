import React, { memo } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

const areEqual = (prevProps, nextProps) => {
  return prevProps.show === nextProps.show;
}

const Modal = (props) => ( 
    <>
      <Backdrop show={props.show} clicked={props.clicked} />
      <div 
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
        {props.children}
      </div>
    </>
  );

export default memo(Modal, areEqual);