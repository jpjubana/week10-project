import React from 'react';
import { Link } from 'react-router-dom';

import About from './About';
import CatCarousel from './CatCarousel';

export default class Home extends React.Component{
    render(){

        return(
            <div>
                <div style={{height: '500px'}} className="jumbotron">
                    <div style={{marginTop: '50px', textAlign: 'center'}} className='container'>
                        <h1 style={{color: 'white', fontFamily: 'Raleway', fontSize: '150px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Welcome!</h1>
                        <p style={{color: 'white', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)', marginBottom: '35px'}}>Welcome to Catty Corner, the premiere cat adoption website, it's the Cat's Meow! </p>
                        <p><Link to='/Cats'><button className="btn btn-primary btn-md">Click here to view our homies!</button></Link></p>
                    </div>
                </div>
                <About />
                <CatCarousel />
            </div>
        )
    }
}