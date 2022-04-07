import React, { Component } from 'react'
import {ModelContainer} from './Styles'
import { ProductConsumer } from '../Context'
import styled from 'styled-components'


export default class ServiceFormComplete extends Component {

    submitForm = () => {
        document.getElementById('model').innerHTML = 
        "Thank you! Your form has been submitted"
    }

    render() {
        return (
            <ProductConsumer>
                {value => {
                    if (value.serviceFormComplete === true) {
                        return (
                            <ModelContainer service>
                                <Form id='model' className='container'>
                                    <div className='service-title row'>
                                        <h2 className='title-text'>Service Form</h2>
                                        <ProductConsumer>
                                        {value => {
                                        return <button className='close-btn ml-auto pr-4'
                                        onClick={() => {
                                            value.closeServiceForm();
                                        }}>
                                            X
                                        </button>
                                        }}
                                        </ProductConsumer>
                                    </div>
                                    <div className='row pt-4'>
                                        <h4 className='mx-auto text-center mb-5'>Thank you! Your appointment has been booked!</h4>
                                    </div>
                                   
                                </Form>
                            </ModelContainer>
                        )
                    }
                }}
            </ProductConsumer>
            
        )
    }
}

const Form = styled.div`

.service-title{
    background: var(--navGreen);
    color: var(--mainWhite);
    white-space: nowrap;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
}


.title-text {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}

.close-btn {
    background: transparent;
    border: none;
    font-size: 1.4em;
    color: white;
}

input {
    border: 0.1em solid rgba(100, 100, 100, 0.3);
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}

select {
    border: 0.1em solid rgba(100, 100, 100, 0.3);
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
`