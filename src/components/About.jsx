import React from 'react';

export default class Home extends React.Component{
    render(){
        return(
            <div id='About' style={{marginBottom: '90px', paddingTop: '40px'}}>
                <div style={{textAlign: 'center'}}>
                    <h3 style={{color: '#000930', fontFamily: 'Raleway', fontWeight: 'lighter'}}>About Us</h3>
                </div>
                <div style={{textAlign: 'center'}}>
                    <p style={{color: '#000930', fontFamily: 'Raleway', fontWeight: 'lighter', marginTop: '50px', marginLeft: '120px', marginRight: '120px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et venenatis nibh. Integer hendrerit erat nisi, ut gravida est facilisis ut. Integer lacinia varius lacus, quis semper leo sagittis ut. Phasellus molestie, ante id pellentesque iaculis, ligula sapien ultrices neque, sit amet aliquet sem mauris sed felis. Nulla laoreet eleifend volutpat. Curabitur imperdiet libero consectetur, tempus augue a, luctus augue. Fusce in ultricies felis. Nullam finibus rhoncus placerat. Vivamus aliquet ullamcorper pulvinar. Duis metus leo, pharetra sit amet mattis id, tincidunt quis est. Pellentesque sit amet dolor eget lectus finibus gravida. In semper a metus sed porttitor. Donec ante turpis, congue id lacinia at, euismod id orci</p>

                    <p style={{color: 'black', fontFamily: 'Raleway', fontWeight: 'lighter', marginTop: '20px', marginLeft: '120px', marginRight: '120px'}}>Morbi lacinia sodales nibh. Aenean vulputate arcu non viverra auctor. Pellentesque porttitor quam eget auctor tincidunt. Aliquam luctus libero a bibendum auctor. Proin volutpat sit amet tortor id eleifend. Pellentesque interdum quis velit in luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

                    <p style={{color: 'black', fontFamily: 'Raleway', fontWeight: 'lighter', marginTop: '20px', marginLeft: '120px', marginRight: '120px', marginBottom: '50px'}}>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis ut nisi sed turpis lobortis sagittis. Mauris diam dui, aliquet quis neque vitae, dapibus venenatis arcu. Quisque blandit dignissim leo, sed sodales urna viverra a. Sed eget dignissim risus.</p>
                </div>
            </div>
        )
    }
}