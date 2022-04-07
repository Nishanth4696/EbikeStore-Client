import React, { Component } from 'react'
import ProductTitle from './ProductTitle'
import styled from 'styled-components'

export default class Contact extends Component {
    render() {
        return (
            <div className='py-5'>
                <ProductTitle name='Contact' title='Us'/>
                <ContactPage className='container mt-5'>
                
                    <div className='row'>
                    <h2 className='col-10 col-md-4'><i className="fas mr-5 fa-phone"></i> 
                        Telephone 
                    </h2>
                    <p className='col-10 col-md-4 tel'>
                        <span className='font-italic'>0208 555 1029</span>      
                    </p>
                    </div>

                    <div className='row'>
                    <h2 className='col-10 col-md-4'>
                        <i className="fas fa-at mr-5"></i>
                        Email 
                    </h2>
                    <p className='col-10 col-md-4 web'>
                            <a className='font-italic' 
                            href='mailto:support@ebikespecialists.co.uk'
                            >
                                support@ebikespecialists.co.uk
                            </a>
                    </p>           
                    </div>

                    <div className='row'>
                    <h2 className='col-10 col-md-4'>
                        <i className="fas fa-map-marked mr-5"></i>
                        Address 
                    </h2> 
                    <p className='col-10 col-md-4 address'>
                        <span className='font-italic'>St Cycles Road, Cycle Kingdom, CY7 LES</span>
                    </p>          
                    </div>
                    </ContactPage>

                    
                </div>
           
        )
    }
}


const ContactPage = styled.div`
position: relative;
left: 15%;
translateX(-50%);
height: 90vh;

i {
    color: var(--navGreen);
}

.address {
    font-size: 1.6em;
}

.web {
    font-size: 1.6em; 
}

.tel {
    font-size: 1.6em; 
}
`



