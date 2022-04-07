import React, { Component } from 'react'

import {ProductConsumer} from '../Context'
import {ButtonContainer, GoToCartButton, PriceWrapper, ModelContainer} from './Styles'
import {Link} from 'react-router-dom'

export default class Model extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modelOpen, closeModel} = value;
                    const {img, title, price, type} = value.modelProduct;
                    if (!modelOpen) {
                        return null;
                    } else {
                        return (
                        
                        <ModelContainer>
                            <div className='container'>
                                <div className='row'>
                                    <div id='model' className='col-8 col-md-6 p-5 mx-auto col-lg-4 text-center'>
                                        <h3>Item added to the basket</h3>
                                        <img src={img} className='img-fluid pt-3' alt='product'/>   
                                        <h3><strong>{title}</strong></h3>
                                        <h3><strong><PriceWrapper>Price: £ {price}</PriceWrapper></strong></h3>

                                        <div className='mx-auto'>
                                            <Link to={`/${type}`}>
                                                <ButtonContainer backToProducts onClick={() => {closeModel()}}>
                                                Continue Shopping
                                                </ButtonContainer>
                                            </Link>
                                                
                                            <Link to='/cart'>
                                            <GoToCartButton onClick={() => {closeModel()}}>
                                             Go to Basket
                                            </GoToCartButton>
                                            
                                            </Link>
                                        </div>
                                    </div>

                                    

                                </div>
                            </div>
                        </ModelContainer>
                        )}
                }}
            </ProductConsumer>
        )
    }
}