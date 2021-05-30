import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class app extends Component {
  render() {
      return (
     <div>
        <Layout>
         <BurgerBuilder />
        </Layout>
     </div>
    );
    
  }
}

export default app;

