import React, { Component } from 'react'

import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';
import PropTypes from 'prop-types';
import {ProductWrapper} from './Styles'



export default class Bikes extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.item;
        return (
            <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
                <div className='card'>
                    <ProductConsumer>
                        {value => (
                        <div>
                           <div 
                            className='img-container p-5'
                            onClick = {() => value.handleDetail(id)}
                            >
                                <Link to='/details'>
                                    <img src={img} alt={title} className='card-img-top'/>
                                </Link>

                                <button 
                                className='cart-btn'  
                                onChange={this.CartButtonColor}
                                disabled={inCart ? true : false}
                                onClick={() => { 
                                    value.addToCart(id)
                                    value.openModel(id)
                                }}>
                                {inCart ? <p className='mb-0 font-italic background-rgb(228, 209, 37)' disabled>In Basket</p> : 
                                <p className='mb-0'><i className="fas fa-cart-plus mr-2"></i>Add to Basket</p>}
                                </button>
                            </div>
                       </div>
                       )}
                       </ProductConsumer>
                           
                       <div className='card-footer d-flex justify-content-between'>
                           <p className='align-self-center mb-0 mr-4'>{title}</p>
                           <p className='price font-italic'>£{price}</p>
                       </div> 
                        
                </div>
            </ProductWrapper>
        )
    }
}
Bikes.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};
