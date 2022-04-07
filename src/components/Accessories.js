import React, { Component } from 'react'
import { ProductConsumer } from '../Context'
import {ProductWrapper} from './Styles'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

export default class Accessories extends Component {
    render() {
        const {img, price, id, title, inCart} = this.props.item;
        return (
            <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
                <div className='card'>
                    <ProductConsumer>
                        {value => {
                                return (
                                    <div>
                                        <div className='img-container' 
                                        onClick={() => value.handleDetail(id)}>

                                            <Link to='/details'>
                                            <img src={img} style={{height: 200}} alt='accessory'/>
                                            </Link>
                                
                                            <button className='cart-btn' onClick={() => {
                                                value.addToCart(id)
                                                value.openModel(id)
                                            }}>
                                                {inCart ? <p className='mb-0 font-italic background-rgb(228, 209, 37)' disabled>In Basket</p> : 
                                                <p className='mb-0'><i className="fas fa-cart-plus mr-2"></i>Add to Basket</p>}
                                                
                                            </button>
                                        </div>
                                    </div>
                            )
                        
                        }}
                    </ProductConsumer>
                    <div className='card-footer d-flex justify-content-between'>
                        <p className='align-self-center mb-0 mr-4'>{title}</p>
                        <AccessoryPriceWrapper 
                        className='price font-italic'>£ {price}
                        </AccessoryPriceWrapper>
                    </div>
                    
                </div>
            </ProductWrapper>
        )
    }
}

Accessories.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};

const AccessoryPriceWrapper = styled.p`
white-space: nowrap;
`