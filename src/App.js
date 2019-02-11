import React, { Component } from 'react';
import './App.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Stats from './Stats'
import Skills from './Skills'
import Folio from './Folio'



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
                    duration={500}
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
                duration={2000}
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

            <Scene
                duration={2000}
                pin={true}
                triggerHook={'onLeave'}
              >
                  {(progress) => (
                    <div>
                        
                        <Timeline totalProgress={progress} paused
                          target={
                            <div className="panel skills">
                                <Skills/>
                                
                            
                            </div>
                          }
                        >
                          <Tween
                            staggerFrom={{ 
                              height:'10%',
                              x: '-20%',
                              opacity:'0',
                              ease: 'Back.easeOut',
                            }}
                            staggerTo={{ x: '0%', opacity:'1',height:'100%'}}
                            stagger={0.15}

                          />
                          <Tween
                            to={{ x: '20%' ,opacity:'0'}}
                          />
                      </Timeline>
                    </div>
                  )}
            </Scene>
            <Scene
                duration={2000}
                pin={true}
                triggerHook={'onLeave'}
              >
                  {(progress) => (
                    <div>
                        
                        <Timeline totalProgress={progress} paused
                          target={
                            <div className="panel folio">     

                                <Folio/>
                                
                            
                            </div>
                          }
                        >
                          <Tween
                            staggerFrom={{ 
                              height:'10%',
                              y: '-20%',
                              opacity:'0',
                              ease: 'Back.easeOut',
                            }}
                            staggerTo={{ y: '0%', opacity:'1',height:'100%'}}
                            stagger={0.15}

                          />
                          <Tween
                            to={{ y: '20%' ,opacity:'0'}}
                          />
                      </Timeline>
                    </div>
                  )}
            </Scene>
            <Scene duration={1000} pin>
              <div className="panel bordeaux">
                This website was created using React.<br/>
                All Rights Reserved. 2019
              </div>
            </Scene>
          </Controller>
        </div>
      </div>
    );
  }
}

export default App;
