import React from 'react';
import Logo from '../images/cat_logo.png';
import { Link } from 'react-router-dom';


export default class Layout extends React.Component{
    render(){
        return(
            <div>
                <nav style={{paddingBottom: '5px', marginBottom: '0px'}} className='navbar navbar-default'>
                    <div className='container-fluid'>
                        <div className='navbar-brand'>
                            <Link to='/'><img style={{height: '40px', marginLeft: '-5px', marginTop: '-5px'}} src={Logo} alt='Catty Corner'/></Link>
                        </div>
                        <ul style={{marginTop: '7px', marginRight: '20px'}} className="nav nav-pills navbar-right">
                            <li role="presentation"><Link to='/'>Home</Link></li>
                            <li role="presentation"><Link to='/Cats'>Our Cats</Link></li>
                            <li role="presentation"><Link to='/ContactUs'>Contact Us</Link></li>
                        </ul>
                    </div>
                </nav>
                {this.props.children}
                <footer>
                    <div style={{textAlign: 'center', height: '120px', backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
                        <Link to='/'><img style={{height: '20px', marginTop: '50px'}} src={Logo} alt="Logo"/></Link>
                    </div>
                </footer>
            </div>
        )
    }
}