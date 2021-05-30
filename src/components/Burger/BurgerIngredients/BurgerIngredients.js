import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css'

class BurgerIngredient extends Component {
    render () {
        let ingredients = null;

        switch  (this.props.type){
            case ('bread-bottom'):
                  ingredients = <div className={classes.BreadBottom}></div>;
            break;
            case ('bread-top'):
                  ingredients = (<div className={classes.BreadTop}>
                            <div className={classes.Seeds1}></div>
                            <div className={classes.Seeds2}></div>
                           </div>);
            break;
            case ('Meat'):
                  ingredients = <div className={classes.Meat}></div>;
            break;
            case ('Cheese'):
                  ingredients = <div className={classes.Cheese}></div>;
            break;
            case ('Salad'):
                  ingredients = <div className={classes.Salad}></div>;
            break;
            case ('Mutton'):
                  ingredients = <div className={classes.Mutton}></div>;
            break;
            default:
                  ingredients = null;
        }
       
        return ingredients; 
    }
}
//added prop type Validation
   BurgerIngredient.propTypes ={
     type: PropTypes.string.isRequired
    };
    //end of added prop type Validation
export default BurgerIngredient;