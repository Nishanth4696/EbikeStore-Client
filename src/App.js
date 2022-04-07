import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Title from './components/Title';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductListBikes from './components/ProductListBikes';
import ProductListAccessories from './components/ProductListAccessories';
import Cart from './components/Basket/Cart';
import Details from './components/Details';
import PageNotFound from './components/PageNotFound';
import Model from './components/Model';
import Copyright from './components/Copyright';
import Services from './components/Services';
import ServiceForm from './components/ServiceForm';
import ServiceFormComplete from './components/ServiceFormComplete';
import Contact from './components/Contact';


export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Title/>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={ProductList} />
          
          <Route path='/details' component={Details} />
          <Route path='/bikes' component={ProductListBikes} />
          <Route path='/accessories' component={ProductListAccessories} />
          <Route path='/services' component={Services} />
          <Route path='/contact' component={Contact} />
          <Route path='/cart' component={Cart} />
          <Route component={PageNotFound} />
        </Switch>
          <Copyright/>
          <Model/>
          <ServiceForm/>
          <ServiceFormComplete />
      </React.Fragment>
    )
  }
}
