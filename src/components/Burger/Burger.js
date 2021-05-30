import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';

const burger = ( props ) => {
    //Getting Ingredients dynamicially (as we have created the object of ingredients in BurgerBuilder.js)
    let transformedIngredients = Object.keys( props.ingredients )
    .map( ingKey => {
        return [...Array(props.ingredients[ingKey])].map((_,i) => {
            return <BurgerIngredients key={ingKey + i} type={ingKey} />
        });
    } )
        // reduce is a built-in array function which allows us to transform an array into something else.It takes a function as an input and this function 
    // receives two arguments passed in automatically by javascript
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>

     }
    //console.log(transformedIngredients); 
  return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformedIngredients}
            {/* <BurgerIngredients type="Cheese" />
            <BurgerIngredients type="Meat" /> */}
            <BurgerIngredients type="bread-bottom" />
        </div>
    );

};
export default burger;