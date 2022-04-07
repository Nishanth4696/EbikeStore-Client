import React, { Component } from 'react'
import './Title.css'

export default class Title extends Component {
    render() {
        return (
            <div>
                <h1 className='title'>Electric Bike Specialist</h1>
                <p className='subTitle'>
                    Find the bike you need with the help of one of our professionals
                </p>
                <div className='jumbotron mb-0 background'></div>
            </div>
        )
    }
}
