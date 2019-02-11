import React, { Component } from 'react';
import './Folio.css';

import plush from './assets/Plush.png';
import gala from './assets/galamockup.jpeg';
import dw from './assets/DW.jpg'
import duracrete from './assets/duracrete.png'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PlushModal from './PlushModal'
import GalaModal from './GalaModal'
import DWModal from './DWModal'
import EtcModal from './EtcModal'



class Folio extends Component {
  constructor(...args) {
    super(...args);
  this.state = { 
    plushModalShow: false,
    galaModalShow: false,
    dwModalShow: false,
    etcModalShow: false,

   };

}
plushToggleModal = () => {
  this.setState({
    plushModalShow: !this.state.plushModalShow
  });
}
galaToggleModal = () => {
  this.setState({
    galaModalShow: !this.state.galaModalShow
  });
}
dwToggleModal = () => {
  this.setState({
    dwModalShow: !this.state.dwModalShow
  });
}
etcToggleModal = () => {
  this.setState({
    etcModalShow: !this.state.etcModalShow
  });
}

    render() {

      return (
        <div className="container">
          <div id="title">
            Works (tap for more details)
          </div>
          <div id ="cards">
            <Container>
              <Row>{/*
                <Col xs={6} lg={3}>  
                    <Card id="cardfolio" onClick={this.plushToggleModal}>
                      <Card.Img variant="top" src={plush} className="media"/>
                      <Card.Body>
                        <Card.Text id="labels">Plush</Card.Text>
                        <Card.Text>
                        <PlushModal
                            show={this.state.plushModalShow}
                            onHide={this.plushToggleModal}
                          />
            
                          </Card.Text>
                        </Card.Body>
                    </Card>
              </Col>*/}
                <Col xs={6} lg={3}> 
                  <Card id="cardfolio" onClick={this.galaToggleModal}>
                      <Card.Img variant="top" src={gala} className="media" />
                      <Card.Body>
                        <Card.Text id="labels">Gala</Card.Text>
                        <Card.Text>
                        <GalaModal
                            show={this.state.galaModalShow}
                            onHide={this.galaToggleModal}
                          />
          
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} lg={3}>
                  <Card id="cardfolio" onClick={this.dwToggleModal}>
                    <Card.Img variant="top" src={dw} className="media"/>
                    <Card.Body>
                      <Card.Text id="labels">DW</Card.Text>
                      <DWModal
                            show={this.state.dwModalShow}
                            onHide={this.dwToggleModal}
                          />
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} lg={3}>
                  <Card id="cardfolio" onClick={this.etcToggleModal}>
                    <Card.Img variant="top" src={duracrete} className="media"/>
                    <Card.Body>
                      <Card.Text id="labels">Etc</Card.Text>
                      <EtcModal
                            show={this.state.etcModalShow}
                            onHide={this.etcToggleModal}
                          />
                    </Card.Body>
                  </Card>
                </Col>
                
             </Row>
            </Container>
          </div>
        </div>
      );
    }
  }
  
  export default Folio;