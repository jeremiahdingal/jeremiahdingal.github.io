import React, { Component } from 'react';
import './App.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Stats from './Stats'
import Skills from './Skills'



class App extends Component {
  render() {
    return (

      <div className="App">

        <div >
          <Controller >
          <Scene      
                    pin={true}
                    duration={1000}
                    triggerHook={'onLeave'}

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
                      <span className="text">Hi.</span>
                    </Tween>
                    
            </Scene>
            <Scene      
                    pin={true}
                    duration={1000}
                    triggerHook={'onLeave'}

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
                      <span className="text">I am Jeremiah,</span>
                    </Tween>
                    
            </Scene>
            <Scene  pin={true}
                    reverse={true}
                    duration={1000}
                    triggerHook={'onLeave'}

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
                      <span className="text">and this is my portfolio.</span>
                    </Tween>
            </Scene>
            <Scene
                duration={1000}
                pin={true}
                triggerHook={'onLeave'}
              >
                  {(progress) => (
                    <div>
                        
                        <Timeline totalProgress={progress} paused
                          target={
                            <div className="panel green">
                                <Stats/>
                                
                            
                            </div>
                          }
                        >
                          <Tween
                            staggerFrom={{ 
                              x: '-20%',
                              opacity:'0',
                              ease: 'Back.easeOut',
                            }}
                            staggerTo={{ x: '0%', opacity:'1',}}
                            stagger={0.15}

                          />
                          <Tween
                            to={{ x: '20%' ,opacity:'0'}}
                          />
                      </Timeline>
                    </div>
                  )}
            </Scene>

            <Scene duration={1000} pin={true} triggerHook={'onLeave'}>
              <div className="panel skills">
                <Skills/>
              </div>
            </Scene>
            <Scene duration={1000} pin>
              <div className="panel bordeaux">
                
              </div>
            </Scene>
          </Controller>
        </div>
      </div>
    );
  }
}

export default App;
