import React, { Component } from 'react';
import './App.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline,SplitLetters } from 'react-gsap';



class App extends Component {
  render() {
    return (

      <div className="App">

        <div className="HeadImg">
        <Controller>
      <Scene
        triggerHook="onLeave"
        duration="300%"
        pin
      >
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section className="panel blue"><span>Panel</span></section>
          <Tween
            from={{ x: '-100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel turqoise"><span>Panel</span></section>
          </Tween>
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel green"><span>Panel</span></section>
          </Tween>
          <Tween
            from={{ y: '-100%' }}
            to={{ y: '0%' }}
          >
            <section className="panel bordeaux"><span>Panel</span></section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
        </div>
      </div>
    );
  }
}

export default App;
