import React, { Component } from 'react'
import styled from 'styled-components'
import PaypalButton from './PaypalButton'

export default class CartTotal extends Component {
    render() {
        const {cartTotal, cartSubTotal, cartTax, clearCart} = this.props.value;
        const {history} = this.props.history;
        return (
            <FirstRow className='container'>

                <div className='row'>
                    <div className='col-12 mt-5 mx-auto text-lg-right'>
                        <ClearCartButton className='col-12 mx-auto ml-lg-auto'
                        onClick={() => {clearCart()}}>
                            <p className='pb-0'>CLEAR BASKET</p>
                        </ClearCartButton>
                        
                        <p className='col-12 mt-5 ml-lg-auto text-lg-right'>
                        <span><strong>SUBTOTAL: </strong>   £ {cartSubTotal}</span>
                        </p>

                        <p className='col-12 mx-auto mt-3 ml-lg-auto text-lg-right'>
                        <strong>TAX: </strong>   £ {cartTax}
                        </p>

                        <p className='col-12 mx-auto mt-3 ml-lg-auto text-lg-right'>
                        <strong>TOTAL: </strong>   £ {cartTotal}
                        </p>

                        <PaypalButton 
                        total={cartTotal} 
                        clearCart={clearCart} 
                        history={history}/>
                    
                    </div>
                </div>

            </FirstRow>
        )
    }
}

const FirstRow = styled.div`
font-family: 'Oswald', sans-serif;
letter-spacing: 0.1rem;
text-align: center;

.subtotal {
    font-size: 2rem;
}
`


const ClearCartButton = styled.div`
background: transparent;
border-radius: 0.2rem;
border: 0.1rem solid rgb(200, 0, 0);
text-align: center;
color: rgb(200, 0, 0);
padding: 1rem;
padding-bottom: 0rem;
width: 15rem !important;
cursor: pointer;
transition: all 0.2s ease-in-out;
&:hover {
    background: rgb(230, 0, 0);
    color: white;
}
` 