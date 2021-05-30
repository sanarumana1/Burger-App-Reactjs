import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [ 
      {label: 'Salad', type:'Salad'},
      {label: 'Meat', type:'Meat'},
      {label: 'Cheese', type:'Cheese'},
      {label: 'Mutton', type:'Mutton'}, 
   ]; 

const buildcontrols = ( props )  => (
  <div className={classes.BuildControls}>
    <h4><strong>Current price : {props.price.toFixed(2)}</strong></h4>
      {controls.map(ctrl => (
        <BuildControl key ={ctrl.label} 
                      label={ctrl.label}
                      added = { () => props.ingredientAdded(ctrl.type)} 
                      removed = { () => props.ingredientRemoved(ctrl.type)}
                      disabled = {props.disabled[ctrl.type]}
                      />
      ))}
  </div>
);

export default buildcontrols;


