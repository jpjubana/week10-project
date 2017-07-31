import React from 'react';
import Carousel from 'nuka-carousel';

export default class CatCarousel extends React.Component{
    mixins: [Carousel.ControllerMixin]
    render(){
        return(
            <Carousel style={{height: '250px', marginTop: '70px'}}>
                <img style={{height: '250px', width: '250px', margin: 'auto'}} src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
                <img style={{height: '250px', width: '250px', margin: 'auto'}} src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
                <img style={{height: '250px', width: '250px', margin: 'auto'}} src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
                <img style={{height: '250px', width: '250px', margin: 'auto'}} src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
                <img style={{height: '250px', width: '250px', margin: 'auto'}} src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
                <img style={{height: '250px', width: '250px', margin: 'auto'}} src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
            </Carousel>
        )
    }
}
