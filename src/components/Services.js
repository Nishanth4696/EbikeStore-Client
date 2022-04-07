import React, { Component } from 'react'
import ProductTitle from './ProductTitle'
import styled from 'styled-components'

import { ProductConsumer } from '../Context'
import {ServiceButton} from './Styles'

export default class Services extends Component {
    render() {
        return (
            <ServicePage>
                <div className='py-5'>

                    <ProductTitle name='Bike' title='Services'/>
                    <div className='container mt-3'>
                        <div className='row'>
                            <h5 className='text-center px-2'>
                                Servicing is important to us – as cyclists we know that keeping a 
                                bike in tip-top condition and working as it should makes every ride 
                                more enjoyable.
                            </h5>
                        </div>
                        <div className='row mt-3'>
                            <p className='text-center px-2'>
                                You can book an appointment to have your bike 
                                serviced in store. From a quick check up to a full strip down or 
                                even a suspension service – whatever your needs, we’ve got it covered.
                            </p>
                        </div>

                        <div className='row mt-md-4 mt-3'>
                            <div className='mx-auto'>
                            <ProductConsumer>
                                {value => {
                                    
                                    return (
                                        <ServiceButton onClick={() => {
                                            value.openServiceForm()
                                        }}>
                                            <p>BOOK A SERVICE</p>
                                        </ServiceButton>
                                    )
                                }}
                            </ProductConsumer>
                            </div>
                        </div>
                    </div>
                </div>
            </ServicePage>
        )
    }
}

const ServicePage = styled.div`
height: 60vh;
`

