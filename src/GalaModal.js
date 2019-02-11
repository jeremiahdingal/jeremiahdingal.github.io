import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import galapitch from './assets/Gala Pitch.gif';


class PlushModal extends Component {

  state = {
  }

    render() {
      return (
        <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton  onClick={this.props.onHide}>
          <Modal.Title id="contained-modal-title-vcenter">
                Gala Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Travel Booking App</h4>
          <img src={galapitch} alt ="Plush mockup" style={{width:'100%'}}/>
          <h4 style={{marginTop:50}}>Website: <a href="https://gala-ph.github.io">https://gala-ph.github.io</a></h4>
         

        </Modal.Body>
        
      </Modal>
      );
    }
  }
  
  export default PlushModal;