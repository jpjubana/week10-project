import React from 'react';

export default class ContactUs extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='container' style={{textAlign: 'center'}}>
                    <h3 style={{color: '#000930', fontFamily: 'Raleway', fontWeight: 'lighter', marginTop: '35px'}}>Holla at Us!</h3>
                </div>
                
                <div className='col-md-6'>
                    <form className='form-group' action="">
                        <label style={{color: '#000930', fontWeight: 'lighter', marginTop: '20px'}} htmlFor='email'>email:</label>
                        <input className='form-control' type="text" id='email'/>

                        <label style={{color: '#000930', fontWeight: 'lighter', marginTop: '20px'}} htmlFor='name'>name:</label>
                        <input className='form-control' type="text" id='name'/>

                        <label style={{color: '#000930', fontWeight: 'lighter', marginTop: '20px'}} htmlFor="textArea">message:</label>
                        <textarea className="form-control" id="textaArea" rows="6"></textarea>

                        <button style={{marginTop: '20px', marginBottom: '30px'}} className='btn btn-primary'>Submit</button>
                    </form>
                </div>

                <div style={{marginLeft: '-20px'}} className='col-md-6'>
                    <p style={{color: '#000930', fontFamily: 'Raleway', fontWeight: 'lighter', marginTop: '50px', marginLeft: '60px', marginRight: '60px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et venenatis nibh. Integer hendrerit erat nisi, ut gravida est facilisis ut. Integer lacinia varius lacus, quis semper leo sagittis ut. Phasellus molestie, ante id pellentesque iaculis, ligula sapien ultrices neque, sit amet aliquet sem mauris sed felis. Nulla laoreet eleifend volutpat. Curabitur imperdiet libero consectetur, tempus augue a, luctus augue. Fusce in ultricies felis. Nullam finibus rhoncus placerat. Vivamus aliquet ullamcorper pulvinar. Duis metus leo, pharetra sit amet mattis id, tincidunt quis est. Pellentesque sit amet dolor eget lectus finibus gravida. In semper a metus sed porttitor. Donec ante turpis, congue id lacinia at, euismod id orci</p>
                </div>
            </div>
        )
    }
}