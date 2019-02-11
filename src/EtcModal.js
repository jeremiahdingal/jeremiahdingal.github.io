import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import duracrete from './assets/duracrete.png'
import duracretemixer from './assets/duracretemixer.png'
import duracreteposter from './assets/duracrete poster.png'
import parcpage from './assets/parcpage2.png'
import banners from './assets/banners.png'
import Carousel from 'react-bootstrap/Carousel'


class EtcModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }


    render() {
      const { index, direction } = this.state;

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
         

          <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          interval={1000}
          pauseOnHover={false}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banners}
                alt="First slide"
              />
            
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={parcpage}
                alt="Third slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={duracrete}
                alt="Third slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={duracretemixer}
                alt="Fourth slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={duracreteposter}
                alt="Fifth slide"
              />

            </Carousel.Item>
          </Carousel>

        </Modal.Body>
        
      </Modal>
      );
    }
  }
  
  export default EtcModal;