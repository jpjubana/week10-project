import React from 'react';
import CatCarousel from './CatCarousel';

export default class Home extends React.Component{
    render(){
        let boxStyle ={
            display: 'inline-block',
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: '90vw',
            height: '500px',
            margin: 'auto',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            textAlign: 'center'
        }
        return(
            <div style={boxStyle}>
                <h4 style={{color: 'white', fontFamily: 'Raleway', fontWeight: 'lighter', marginTop: '35px'}}>Let's find them a forever HOME!</h4>
                
                <CatCarousel/>
            </div>
        )
    }
}