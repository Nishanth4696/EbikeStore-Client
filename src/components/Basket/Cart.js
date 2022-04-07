import React, { Component } from 'react'
import {ProductConsumer} from '../../Context'
import CartColumns from './CartColumns'
import ProductTitle from '../ProductTitle'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotal from './CartTotal'

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        
                        if  (cart.length === 0) {
                            return (
                                <EmptyCart/>
                            )
                        } else {
                            return (
                                <React.Fragment>
                                    <div className='py-5'>

                                        <ProductTitle name='Your' title='Basket'/>
                                        <br/>
                                        <CartColumns />
                                        <CartList value={value}/>
                                        <CartTotal value={value} history={this.props.history}/>
                                        <br/>
                                        <br/>
                                    </div>
                                </React.Fragment>
                            )
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
