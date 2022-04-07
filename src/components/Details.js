import React, { Component } from 'react'
import {ProductConsumer} from '../Context'
import {ButtonContainer, CartButton, PriceWrapper, ImgBorder, DetailCard} from './Styles'

import {Link} from 'react-router-dom'

export default class Details extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {(value) => {
                        const {id, company, img, info, price, inCart, title, type} = value.detailProduct;
                        return (
                            <div className='container py-3'>
                               
                                <div className='row pt-2'>
                                    <div className='col-10 mx-auto text-center my-3 pb-5'>
                                        <h1>{title}</h1>
                                </div>
       
                                <div className='row'>

                                <ImgBorder className='col-8 mx-auto col-md-6 pb-md-0 text-center my-3 mr-0'>
                                        <img className='img' src={img} alt='' width='310' height='200'/>
                                </ImgBorder>
                                    
                                    <div className='col-9 mx-auto col-md-6'>
                                        <DetailCard className='card pb-3'>
                                            <div className='card-header'>
                                                <strong>Model:</strong> {company}
                                            </div>
                                                <div className='card-body'>
                                                <div className='card-text'>
                                                <PriceWrapper><strong>Price: </strong>£{price}</PriceWrapper>
                                                <p className='detail-info'>{info}</p>
                                                </div>

                                                <div className='mt-3'>
                                                    <Link to={`/${type}`}>
                                                        <ButtonContainer backToProducts>Back to {type}</ButtonContainer>
                                                    </Link>     

                                                    <CartButton 
                                                    basket
                                                    disabled={inCart ? true : false}
                                                    onClick={() => {
                                                        value.addToCart(id)
                                                    }}
                                                    >
                                                        {inCart ? 'In Basket' : <p className='mb-0'><i className="fas fa-cart-plus mr-2"></i>Add to Basket</p>} 
                                                    </CartButton>
                                                </div>
                                            </div>
                                        </DetailCard>
                                    </div>
                                </div>
                                
                                </div>
                            </div>
                        )
                    }}
                </ProductConsumer>
                
            </div>
        )
    }
}

