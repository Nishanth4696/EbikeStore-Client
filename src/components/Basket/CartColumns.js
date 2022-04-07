import React from 'react'
import styled from 'styled-components'

export default function CartColumns() {
    return (
        <CartColumnsTitle className='container-fluid text-center d-none d-lg-block'>
            <div className='row'>
                <div className='col-10 mx-auto col-lg-2'>
                    <p>Product</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p>Name</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p>Price</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p>Quantity</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p>Remove</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p>Total</p>
                </div>
            </div>
            
        </CartColumnsTitle>
    )
}

const CartColumnsTitle = styled.div`
font-weight: bold;
font-size: 1.5rem;
color: var(--navGreen);
`
