import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>{props.price}</strong></p>
      {controls.map(ctrl => (
        <BuildControl 
          key={ctrl.label} 
          label={ctrl.label} 
          clickedLess={() => props.clickedLess(ctrl.type)} 
          clickedMore={() => props.clickedMore(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button 
        disabled={!props.purchasable} 
        className={classes.OrderButton}
        onClick={props.ordered}>ORDER NOW</button>
    </div>
  );

export default BuildControls;
