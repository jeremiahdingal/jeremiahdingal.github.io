import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import plushmockup from './assets/plush-mockup.png';


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
                Plush Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>From UI Design</h4>
          <img src={plushmockup} alt ="Plush mockup" style={{width:'100%'}}/>
          <h4 style={{marginTop:50}}>..to full Mobile Front End.</h4>
          <iframe style={{width:'100%', height:'40vw'}} src="https://www.youtube.com/embed/FlZa95b7UI8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         

        </Modal.Body>
        
 
      </Modal>
      );
    }
  }
  
  export default PlushModal;