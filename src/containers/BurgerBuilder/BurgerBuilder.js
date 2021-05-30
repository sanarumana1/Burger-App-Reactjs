import React, { Component } from "react"
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const ingredients_prices = {
            Meat: 40,   
            Cheese: 30, 
            Salad: 30,
            Mutton: 40,  
}

class BurgerBuilder extends Component {

    state ={
        ingredients : {
            Meat: 0,   
            Cheese:0, 
            Salad:0,
            Mutton:0,             
        },
        totalPrice : 140
        
    }
    
     addIngredientsHandler = ( type ) => {
       const oldcount = this.state.ingredients[type];
       const updatedcount = oldcount + 1;
       const updatedIngredients = {
           ...this.state.ingredients  //spread operator,to distribute the properties of the old ingredients state into the new object
       };
       updatedIngredients[type] = updatedcount; 
       const priceAddition = ingredients_prices[type];
       const oldprice = this.state.totalPrice;
       const newprice = oldprice + priceAddition;
       this.setState ({totalPrice: newprice, ingredients: updatedIngredients });
     }

     removeIngredientsHandler = ( type ) => {
        const oldcount = this.state.ingredients[type];
        if(oldcount <= 0){
            return;
          }
        const updatedcount = oldcount - 1;
        const updatedIngredients = {
            ...this.state.ingredients  
        };
        updatedIngredients[type] = updatedcount; 
        const priceDeduction = ingredients_prices[type];
        const oldprice = this.state.totalPrice;
        const newprice = oldprice - priceDeduction;
        this.setState ({totalPrice: newprice, ingredients: updatedIngredients });
    }

   render (){
       const disabledInfo ={
           ...this.state.ingredients
       };
       for(let key in disabledInfo) {
          disabledInfo[key] = disabledInfo[key] <= 0
       }
       return (
           <Aux>
               <Burger ingredients = {this.state.ingredients} />
               <BuildControls ingredientAdded = {this.addIngredientsHandler}
                              ingredientRemoved = {this.removeIngredientsHandler} 
                              disabled = {disabledInfo}
                              price = {this.state.totalPrice}/>
              
           </Aux>
       );
   }
}
export default BurgerBuilder;