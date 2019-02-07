import React, { Component } from 'react';
import './App.css';
import { Window, TitleBar, Text } from 'react-desktop/macOs';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
              
        </header>
        <Controller>
         <Scene duration={2000} triggerHook="onLeave" pin>
         {(progress) => (
            <Timeline totalProgress={progress} paused>
            <Tween
                from={{ x: '10%', top: '60%' }}
                to={{ x: '60%', top: '10%' }}
            >
                  <div className="Win">
                      <Window
                      chrome
                      height="300px"
                      width="300px"
                      padding="10px"
                      >
                        <TitleBar title="Portfolio" controls height="43"/>
                        <Text>Hello World</Text>
                      </Window>
                      </div>

            </Tween>  
            </Timeline>

          )}

          </Scene>
          <Scene duration={200} pin={{ pushFollowers: false }}>
            <div className="sticky"><div>Pin Test</div></div>
            
          </Scene>
        </Controller>
        <div className="section" />
      </div>
    );
  }
}

export default App;
