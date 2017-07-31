import React from 'react';
import Logo from '../images/cat_logo.png';
import { Link } from 'react-router-dom';

export default class Layout extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-light">
                    <div className='container-fluid'>
                        <div className='navbar-header'>
                            <div className='navbar-brand'>
                                <Link to='/'>
                                <span>
                                    <img src={Logo} height="30" className="d-inline-block align-top" alt="Catlogo"/>
                                </span>
                                Catty Corner
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
                {this.props.children}
                <footer className='footer'>
                    <div className='container'>
                        <p className='text-muted'>A sister company of Cats-R-Us &reg;</p>
                    </div>
                </footer>
            </div>
        )
    }
}