import React, { Component } from 'react';
import './App.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline,SplitLetters } from 'react-gsap';
import StickyBox from "react-sticky-box";



class App extends Component {
  render() {
    return (

      <div className="App">
          <StickyBox offsetTop={20} offsetBottom={20}><div className="panel"><span>wew</span></div></StickyBox>

        <div className="HeadImg">
          <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
           <Scene      
                    pin={true}
                    reverse={true}
                    duration={1000}
                  >
                    <Tween 
                      wrapper={
                        <div className="panel blue" />
                      }
                      staggerFrom= {{
                         opacity: 0,
                        ease: 'Expo.easeInOut',
                      }}
                      stagger={0.15}
                    >
                    
                        <span >Hi.</span>
                    </Tween>
            </Scene>
            <Scene      
                    pin={true}
                    reverse={true}
                    duration={500}
                  >
                    <Tween 
                      wrapper={
                        <div className="panel turqoise" />
                      }
                      staggerFrom= {{
                         opacity: 0,
                        ease: 'Expo.easeInOut',
                      }}
                      stagger={0.15}
                    >
                      <span className="text">I am Jeremiah, <br/>and this is my folio.</span>
                    </Tween>
            </Scene>
            <Scene pin>
              <div className="panel green"><span>3</span></div>
            </Scene>
            <Scene pin>
              <div className="panel bordeaux"><span>4</span></div>
            </Scene>
          </Controller>
        </div>
      </div>
    );
  }
}

export default App;
