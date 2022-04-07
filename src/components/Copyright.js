import React, { Component } from 'react'
import styled from 'styled-components'

export default class Copyright extends Component {
    render() {
        return (
            <CopyrightWrapper>
                <div className='row text pt-2'>
                    <p className='footer-title mx-auto'>E-BIKE SPECIALISTS</p>
                </div>
                <div className='row text'>
                    <p className='mx-auto mb-0 font-italic'>Copyright <i className="far fa-copyright"></i>  E-Bike Shop 2022</p>
                </div>
            </CopyrightWrapper>
        )
    }
}

const CopyrightWrapper = styled.div`
position: relative;
width: 100vw;
bottom: 0;
height: 15vh;
background: rgba(50, 50, 50, 0.9);
color: rgb(240, 240, 240, 0.9);
letter-spacing: 0.05em;


.text {
    
    bottom: 20% !important;

},

.footer-title {
    border: 0.05em solid;
    padding: 0.5em;
}

`
