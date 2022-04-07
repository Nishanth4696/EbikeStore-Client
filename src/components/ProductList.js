import React, { Component } from 'react'
import ProductTitle from './ProductTitle'
import {Link} from 'react-router-dom'
import './ProductList.css'

export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='py-5'>
                    <div className='container'>
                        <ProductTitle name='Our' title='Products'/>
                        <div className='row py-5'>                           
                                
                                <Link to='/bikes' className=' mb-sm-2 col-md-6'>
                                    <div className='imgContainer'>
                                        <img 
                                        className='img-thumbnail'
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJeTrk8XqJpUA2Q_qgFFjETfPUJLlatH3h6w&usqp=CAU' 
                                        alt='Bike'
                                        />
                                        <div className='imgTextPosition'>
                                            <div className='Text'>Bikes</div>
                                        </div>
                                   </div>
                                </Link>
                                             
                                <Link to='/accessories' className='col-md-6'>
                                    <div className='imgContainer'>
                                            <img 
                                            className='img-thumbnail'
                                            src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThnn99qWskYDC_dD-lfVNpqsizoSwL_4dX7g&usqp=CAU" 
                                            alt='Accessory'
                                            />
                                            <div className='imgTextPosition'>
                                                <div className='Text'>Accessories</div>
                                            </div>
                                    </div>
                                </Link>
                              
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        ) 
    }
}


