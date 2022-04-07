import React from 'react'
import styled from 'styled-components'

export default function EmptyCart() {
    return (
        <Empty className='container mt-5'>
            <div className='row'>
                <div className='col-10 mx-auto text-center'>
                    <h1>Your Basket is Currently Empty</h1>
                </div>
            </div>
            
        </Empty>
    )
}

const Empty = styled.div`
height: 73vh;
`