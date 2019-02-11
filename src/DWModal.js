import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import dw from './assets/DW.jpg'
import dwshop from './assets/dwshop.jpg'


class DWModal extends Component {

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
                Daniel Wellington Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:'flex',alignItems: 'center', flexDirection:'column'}}>
          <img src={dw} alt ="DW" style={{width:'60%'}}/>
          <img src={dwshop} alt ="DW Shop" style={{width:'60%'}}/>


        </Modal.Body>
        
      </Modal>
      );
    }
  }
  
  export default DWModal;