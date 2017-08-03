import React from 'react';
import {Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class CatCarousel extends React.Component{
    constructor(){
        super();
        this.state = {
            catPics: []
        }; 
    }

    componentDidMount(){
    const catz = Array(12).fill().map(() => fetch('http://random.cat/meow')
        .then(results => {return results.json();}));

        Promise.all(catz)
        .then(data => {this.setState({catPics: data.map(cat => cat.file)});
        console.log("state", this.state.catPics);})
    }

    render(){
        const {catPics} = this.state;
        return(
            <div style={{backgroundColor: '#000930', height: '600px', textAlign: 'center'}}>
                <div style={{textAlign: 'center', paddingTop: '20px'}}>
                    <h4 style={{color: 'white', fontFamily: 'Raleway', fontWeight: 'lighter', marginTop: '30px'}}>Let's help them find a new Home!</h4>
                </div>
                <Carousel style={{marginTop: '60px'}}>
                    {catPics.map(catPic =>
                    <Carousel.Item>
                        <img style={{height: '350px', margin: 'auto'}} alt="900x500" src={catPic}/>
                    </Carousel.Item>
                    )}
                </Carousel>
                <p style={{marginTop: '50px'}}><Link to='/Cats'><button className="btn btn-primary btn-md">Click here to view our homies!</button></Link></p>
            </div>
        )
    }
}
