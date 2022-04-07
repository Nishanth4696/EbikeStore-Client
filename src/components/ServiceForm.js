import React, { Component } from 'react'
import {ModelContainer} from './Styles'
import { ProductConsumer } from '../Context'
import styled from 'styled-components'
import {ServiceButton} from './Styles'

export default class ServiceForm extends Component {

    render() {
        return (
            <ProductConsumer>
                {value => {
                    if (value.serviceForm === false) {
                        return null;
                    } else {
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
                                        <h4 className='mx-auto'>Name: </h4>
                                    </div>
                                    <div className='row'>
                                        <input type='mx-auto'></input>
                                    </div>
                                    <div className='row'>
                                        <h4 className='mx-auto'>Phone: </h4>
                                    </div>
                                    <div className='row'>
                                        <input type='mx-auto'></input>
                                    </div>
                                    <div className='row'>
                                        <h4 className='mx-auto'>Email: </h4>
                                    </div>
                                    <div className='row'>
                                        <input type='mx-auto'></input>
                                    </div>
                                    <div className='row'>
                                        <h4 className='mx-auto'>Type of Service: </h4>
                                    </div>
                                    <div className='row'>
                                        <select>
                                            <option>Bronze</option>
                                            <option>Silver</option>
                                            <option>Gold</option>
                                        </select>
                                    </div>
                                    <div className='row'>
                                        <h4 className='mx-auto'>Available Slots: </h4>
                                    </div>
                                    <div className='row'>
                                        <select>
                                            <option>9:15 AM</option>
                                            <option>11:00 AM</option>
                                            <option>2:00 PM</option>
                                            <option>3:45 PM</option>
                                            <option>4:30 PM</option>
                                        </select>
                                    </div>
                                    <div className='row py-5'>
                                        <ProductConsumer>
                                        {value => {
                                            return (
                                                <ServiceButton 
                                                    className='mx-auto' 
                                                    type='submit'
                                                    onClick={() => {
                                                        value.submitServiceForm()
                                                    }}>
                                                        <h4 className='px-3'>SUBMIT</h4>
                                                </ServiceButton>
                                            )
                                        }}
                                        </ProductConsumer>
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