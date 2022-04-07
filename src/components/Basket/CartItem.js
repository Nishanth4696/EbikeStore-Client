import React, { Component } from 'react'

import styled from 'styled-components'

export default class CartItem extends Component {
    render() {
        const {id, title, img, price, total, count} = this.props.item;
        const {increment, decrement, removeItem} = this.props.value;
        return (
            <CartFont className='container-fluid text-center mt-5'>
                <div className='row'>
                    <CartImg className='col-6 mx-auto col-lg-2'>
                        <img className='img-fluid' style={{width: '10rem'}} src={img}/>
                    </CartImg>

                    <div className='col-10 mx-auto col-lg-2 mt-3'>
                        <p><strong>{title}</strong></p>
                    </div>
             
                    <div className='col-10 mx-auto col-lg-2 mt-3'>
                        <p><span className='d-lg-none'>Price: </span>£ {price}</p>
                    </div>
                    
                    <div className='col-10 mx-auto col-lg-2 mt-3'>
                        <div className='d-flex justify-content-center'>
                            <div className='quantity'>
                                <span className="btn mx-1" onClick={() => {decrement(id)}}>-</span>
                                <span className="btn mx-1 count" >{count}</span>
                                <span className="btn mx-1" onClick={() => {increment(id)}}>+</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-10 mx-auto col-lg-2 mt-3'>
                        <TrashIcon className=''>
                            <i className="fas fa-trash ml-2" onClick={() => {removeItem(id)}}></i>
                        </TrashIcon>
                    </div>
                    
                    <div className='col-10 d-lg mx-auto col-lg-2 mt-3'>
                        <strong className=''><span className='d-lg-none'>Item Total:</span> £ {total}</strong>
                    </div>
                </div>
            </CartFont>
        )
    }
}

const TrashIcon = styled.div`
color: orange;
font-size: 1.5rem;
.fas {
cursor: pointer;
}
`

const CartFont = styled.div`
font-family: 'Oswald', sans-serif !important;
letter-spacing: 0.075rem;

.btn {
    font-size: 1em !important;
}
`

const CartImg = styled.div`
background: white;
border-radius: 2rem;
box-shadow: 2px 3px 5px 0px;
padding: 10px 10px 10px 10px;
&:hover {
    transform: scale(1.03);
}
`