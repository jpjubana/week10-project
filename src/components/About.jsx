import React from 'react';
import { Link } from 'react-router-dom';

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
                <h3 style={{color: 'white', fontFamily: 'Raleway', fontWeight: 'lighter', marginTop: '35px'}}>About Us</h3>

                <p style={{color: 'white', fontFamily: 'Raleway', fontWeight: 'lighter', margin: ('0px', '50px', '0px', '50px')}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et venenatis nibh. Integer hendrerit erat nisi, ut gravida est facilisis ut. Integer lacinia varius lacus, quis semper leo sagittis ut. Phasellus molestie, ante id pellentesque iaculis, ligula sapien ultrices neque, sit amet aliquet sem mauris sed felis. Nulla laoreet eleifend volutpat. Curabitur imperdiet libero consectetur, tempus augue a, luctus augue. Fusce in ultricies felis. Nullam finibus rhoncus placerat. Vivamus aliquet ullamcorper pulvinar. Duis metus leo, pharetra sit amet mattis id, tincidunt quis est. Pellentesque sit amet dolor eget lectus finibus gravida. In semper a metus sed porttitor. Donec ante turpis, congue id lacinia at, euismod id orci</p>

                <p style={{color: 'white', fontFamily: 'Raleway', fontWeight: 'lighter', margin: ('0px', '30px', '0px', '30px')}}>Morbi lacinia sodales nibh. Aenean vulputate arcu non viverra auctor. Pellentesque porttitor quam eget auctor tincidunt. Aliquam luctus libero a bibendum auctor. Proin volutpat sit amet tortor id eleifend. Pellentesque interdum quis velit in luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

                <p style={{color: 'white', fontFamily: 'Raleway', fontWeight: 'lighter', margin: ('0px', '30px', '0px', '30px')}}>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis ut nisi sed turpis lobortis sagittis. Mauris diam dui, aliquet quis neque vitae, dapibus venenatis arcu. Quisque blandit dignissim leo, sed sodales urna viverra a. Sed eget dignissim risus.</p>

                <button className='btn btn-info'>
                <Link to='/Cats' style={{color: 'white'}}>Click here to view our Cats!</Link></button>
            </div>
        )
    }
}