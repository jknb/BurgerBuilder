import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import map from 'lodash/map';
import reduce from 'lodash/reduce';
import some from 'lodash/some';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 0.7,
  meat: 1.3
}

const BURGER_BASE_PRICE = 4;

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    purchasable: false,
    purchasing: false,
  }

  updatePurchaseState = (ingredients) => {
    const purchasable = some(
      ingredients,
      (value) => value > 0
    );
    this.setState({
      purchasable: purchasable
    })
  }  
  
  addIngredientHandler = (type) => {
    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: this.state.ingredients[type] + 1
    };

    this.setState({
      ingredients: updatedIngredients
    });

    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] <= 0) {
      return;
    }  
    
    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: this.state.ingredients[type] - 1
    };

    this.setState({
      ingredients: updatedIngredients
    });

    this.updatePurchaseState(updatedIngredients);
  }

  totalPriceCalculate = () => {
    const totalPrice = reduce(
      this.state.ingredients, 
      (acc, value, key) => acc + (value * INGREDIENT_PRICES[key]), 
      BURGER_BASE_PRICE
    );
                          
    return totalPrice.toFixed(2);
  }

  orderCheckoutHandler = () => {
    this.setState({
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      purchasable: false,
      purchasing: false,
    })

    alert('Added to cart KEKW');
  }
  
  orderCancelHandler = () => {
    this.setState({
      purchasing: false
    })
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    })
  }

  render() {
    const disabledInfo = {...this.state.ingredients};
    map(this.state.ingredients, (value, key) => disabledInfo[key] = value <= 0);
    
    const price = this.totalPriceCalculate();

    return (
      <>
        <Modal show={this.state.purchasing} clicked={this.orderCancelHandler}>
          <OrderSummary 
            ingredients={this.state.ingredients}
            price={price}
            orderCheckout={this.orderCheckoutHandler}
            orderCancel={this.orderCancelHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          clickedLess={(type) => this.removeIngredientHandler(type)} 
          clickedMore={(type) => this.addIngredientHandler(type)} 
          disabled={disabledInfo}
          price={price}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </>
    );
  }
}

export default BurgerBuilder;