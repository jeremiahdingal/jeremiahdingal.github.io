import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import duracrete from './assets/duracrete.png'
import duracretemixer from './assets/duracretemixer.png'
import duracreteposter from './assets/duracrete poster.png'
import parcpage from './assets/parcpage2.png'
import banners from './assets/banners.png'


class EtcModal extends Component {

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
                Various Projects
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:'flex',alignItems: 'center', flexDirection:'column'}}>
          <img src={banners} alt ="DW" style={{width:'100%'}}/><br/>
          <img src={parcpage} alt ="DW Shop" style={{width:'90%'}}/><br/>
          <img src={duracrete} alt ="DW" style={{width:'60%'}}/><br/>
          <img src={duracretemixer} alt ="DW Shop" style={{width:'60%'}}/><br/>
          <img src={duracreteposter} alt ="DW Shop" style={{width:'60%'}}/><br/>

        </Modal.Body>
        
      </Modal>
      );
    }
  }
  
  export default EtcModal;