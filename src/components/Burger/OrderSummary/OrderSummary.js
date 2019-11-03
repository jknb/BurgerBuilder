import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingredient => {
      return (
        <li key={ingredient}>
          <span style={{ textTransform: 'capitalize' }}>{ingredient}</span>: {props.ingredients[ingredient]}
        </li>
      );
    });

  return (
    <div>
      <h3>Your Order:</h3>
      <ul>
        {ingredientSummary}
      </ul>
      <h4>Price: {props.price}</h4>
      <h3>Continue to check out?</h3>
      <Button 
        btnTypes={'Danger'}
        clicked={props.orderCancel} 
      >CANCEL</Button>
      <Button 
        btnTypes={'Success'}
        clicked={props.orderCheckout} 
      >CONTINUE</Button>
    </div>
  );
};

export default OrderSummary;
