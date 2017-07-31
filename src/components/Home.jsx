import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component{
    render(){
        let boxStyle ={
            display: 'inline-block',
            position: 'fixed',
            top: -250,
            bottom: 0,
            left: -750,
            right: 0,
            width: '200px',
            height: '100px',
            margin: 'auto',
            backgroundColor: 'transparent',
            textAlign: 'center'
        }
        return(
            <div className='welcomeBox' style={boxStyle}>
                <h1 style={{fontSize: '200px', fontFamily: 'Raleway', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'}}>Welcome!</h1>

                <p style={{fontFamily: 'Raleway', width: '975px', marginTop: '-25px', color: 'white', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'}}>Hello and welcome to <Link to='/About' style={{color: 'white'}}><strong style={{textDecoration: 'underline'}}>Catty Corner</strong></Link>, the premiere cat adoption site, it's the Cat's Meow</p>

                <button className='btn btn-info' style={{marginLeft: '400px', marginTop: '15px'}}>
                <Link to='/Cats' style={{color: 'white'}}>Click here to view our Cats!</Link></button>
            </div>
        )
    }
}