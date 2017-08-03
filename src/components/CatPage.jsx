import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Modal} from 'react-bootstrap'

export default class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            catPics: [],
            catNames: [],
            showModal: false
        }; 
    }

    close = () => {
        this.setState({showModal: false});
    }

    open = () => {
        this.setState({showModal: true});
    }

    componentDidMount(){
        const catz = Array(12).fill().map(() => fetch('http://random.cat/meow')
        .then(results => {return results.json();}));

        Promise.all(catz)
        .then(data => {this.setState({catPics: data.map(cat => cat.file)});
        console.log("state", this.state.catPics);})

        fetch('https://randomuser.me/api/?results=12&nat=us')
        .then(results => {return results.json();})
        .then(data => {this.setState({catNames: data.results.map(catName => catName.name.first)});
        console.log("state", this.state.catNames);})
    }

    render(){
        const {catPics, catNames} = this.state;
        return( 
            <div>
                <div style={{textAlign: 'center', marginTop: '30px', marginBottom: '20px'}} className='container'>
                    <h4>Help us find them a good Home</h4>
                </div>
                
                <div className='row' style={{marginTop: '30px', marginBottom: '30px'}}>
                    {catPics.map((catPic, i) => 
                        <div className='col-md-3' style={{marginBottom: '20px', textAlign: 'center'}}>
                            <img className='img-responsive img-circle' style={{height: '200px', width: '200px', margin: 'auto'}} src={catPic} alt="Cat-Pic"/>
                            <p style={{marginTop: '10px'}}>{catNames[i]}</p>
                            <button className='btn btn-info btn-sm' onClick={this.open} style={{margin: '10px 0px 10px 0px'}}>Adopt Me ow</button>
                        </div>
                    )}
                </div>

                <div>
                    <Modal show={this.state.showModal.open} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Text in a modal</h4>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                        <hr />

                        <h4>Overflowing text to show scroll behavior</h4>
                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
                </div>
            </div>
        )
    }
}