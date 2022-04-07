import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Styles';
import {NavWrapper} from './Styles'
import {ProductConsumer} from '../Context'
import './Navbar.css'


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-md navbar-dark'>

                <Link to='/' className='navbar-brand'>
                    <i className="fas fa-bicycle"></i>
                </Link>    
                
                <button className='navbar-toggler ml-auto' type='button' data-toggle='collapse' data-target='#collapse_target' aria-expanded="false" aria-label="Toggle navigation">
                    <span className='navbar-toggler-icon'></span>
                </button>
           
                <div className='navbar-collapse collapse' id='collapse_target'>

                    <ul className='navbar-nav ml-3'>
                        <li className='nav-item px-5'>
                            <Link to='/' className='nav-link'>Home</Link>
                        </li>
                        <li className='nav-item dropdown px-5'>
                            <Link to='/'className='nav-link dropdown-toggle' data-toggle='dropdown' data-target='dropdown_target'>
                                Products
                            </Link>
                            <div className='dropdown-menu' arial-labelledby='dropdown-target'>
                                <ul className='navbar-nav'>
                                    <Link to='/bikes' className='dropdown-item'>Bikes</Link>
                                    <Link to='/accessories' className='dropdown-item'>Accessories</Link>
                                </ul>
                            </div>
                        </li>
                        <li className='nav-item px-5'>
                            <Link to='/services' className='nav-link'>Services</Link>
                        </li>
                        <li className='nav-item px-5'>
                            <Link to='/contact' className='nav-link'>Contact</Link>
                        </li>
                    </ul>

                </div>
                <ProductConsumer>
                {value => {
                    return (
                        <React.Fragment>

                        <Link to='/cart' className='cart ml-auto'>
                        <ButtonContainer>
                            <i className="mr-2 pt-1 fas fa-shopping-cart"></i>
                            Basket
                        </ButtonContainer>
                        </Link>
                        
                        <p className='cart-count'>{value.totalCount}</p>
                        </React.Fragment>
                    )
                }}   
                </ProductConsumer>
                
            </NavWrapper>

        )
    }
}