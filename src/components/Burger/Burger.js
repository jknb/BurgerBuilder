import React from 'react';
import uuid from 'uuid';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={uuid()} type={igKey} />;
      });
    })
    .reduce( (acc, cur) => {
      return acc.concat(cur);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Add ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;