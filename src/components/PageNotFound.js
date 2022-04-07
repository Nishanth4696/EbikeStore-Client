import React, { Component } from 'react'
import styled from 'styled-components'

export default class PageNotFound extends Component {
    render() {
        return (
            <Error className='container'>
                <div className='row'>
                    <div className='col-10 text-center mx-auto'>
                        <h3><strong>404: Error - Page Not Found</strong></h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-10 text-center mx-auto'>
                        <h3>
                            The requested URL (<span className='text-danger'>{this.props.location.pathname}</span>) was not found
                        </h3>
                    </div>
                </div>

            </Error>
        )
    }
}


const Error = styled.div`
height: 74.5vh`