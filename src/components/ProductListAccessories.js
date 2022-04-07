import React, { Component } from 'react'
import ProductTitle from './ProductTitle'
import { ProductConsumer } from '../Context'
import Accessories from './Accessories'

export default class ProductListAccessories extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='py-5'>
                    <ProductTitle name='Our' title='Accessories'/>
                    <div className='container py-5'>
                        <div className='row mb-5 pb-5'>
                    <ProductConsumer>
                        {context => {
                            return context.products.map(item => {
                                if (item.type ==='accessories') {
                                    return <Accessories key={item.id} item={item} />
                                }
                            })
                        }}
                    </ProductConsumer>
                    </div>
                </div>    
                </div>

            </React.Fragment>
        )
    }
}
