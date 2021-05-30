import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css'

const layout = ( props ) => (
    //wrapping a root elements
  <Aux>
      {/* <div>Toolbar,SideDrawer,Backdrop</div> */}
      <main className={classes.Content}> {props.children} </main>
  </Aux>

  //end wrapping a root elements

);

export default layout;