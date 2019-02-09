import React, { Component } from 'react';
import './App.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import avatar from './assets/avatar.jpeg';
import Grid from '@material-ui/core/Grid';
import IosFingerPrint from 'react-ionicons/lib/IosFingerPrint';
import MdPin from 'react-ionicons/lib/MdPin';
import MdCard from 'react-ionicons/lib/MdCard';
import MdSchool from 'react-ionicons/lib/MdSchool';



class App extends Component {
  render() {
    return (

      <div className="App">

        <div >
          <Controller >
          <Scene
                duration={1000}
                pin={true}
                triggerHook={'onLeave'}
              >
                  {(progress) => (
                    <div>
                        
                        <Timeline totalProgress={progress} paused
                          target={
                            <div className="panel blue"><span >Hi.</span></div>
                          }
                        >
                          <Tween
                            staggerFrom={{ 
                              opacity: 0,
                              ease: 'Expo.easeInOut',
                            }}
                            staggerTo={{ opacity: '1' }}
                            stagger={0.15}

                          />
                          <Tween
                            to={{ opacity: '0' }}
                          />
                      </Timeline>
                    </div>
                  )}
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
                                <Card className="card">
                                <CardContent>
                                <Typography gutterBottom variant="h4" component="h1" align="left">
                                      Stats
                                    </Typography>
                                      <img className="bavatar" src={avatar}/>
                                    
                                    <Grid container spacing={24} justify="center" >
                                      <Grid item xs={3} direction="row">
                                      <div className="icons">
                                        <IosFingerPrint fontSize="20px" color="red" beat={true} />
                                      </div>
                                      </Grid>
                                      
                                      <Grid item xs={9} direction="row">
                                        <div className="details">
                                        <Typography component="p" align="left" >
                                          Jeremiah Japhet Dingal
                                        </Typography>
                                      </div>
                                      </Grid>
                                      <Grid item xs={3} direction="row">
                                        <div className="icons">
                                          <MdPin fontSize="20px" color="orange" />
                                        </div>
                                      </Grid>
                                      <Grid item xs={9} direction="row">
                                        <Typography component="p" align="left" >
                                          Davao, Philippines
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={3} direction="row">
                                        <div className="icons">
                                          <MdCard fontSize="20px" color="gray" />
                                        </div>
                                      </Grid>
                                      <Grid item xs={9} direction="row">
                                        <Typography component="p" align="left" >
                                          Licensed Electrical Engineer
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={3} direction="row">
                                        <div className="icons">
                                          <MdSchool fontSize="20px" color="lightblue" shake={true}/>
                                        </div>
                                      </Grid>
                                      <Grid item xs={9} direction="row">
                                        <Typography component="p" align="left" >
                                          MBA
                                        </Typography>
                                      </Grid>
                                      
                                    </Grid>
                                  </CardContent>
                                </Card>
                                
                            
                            </div>
                          }
                        >
                          <Tween
                            staggerFrom={{ 
                              x: '-20%',
                              opacity:'0',
                              ease: 'Expo.easeInOut',
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

            <Scene duration={1000} pin>
              <div className="panel bordeaux"><span>4</span></div>
            </Scene>
          </Controller>
        </div>
      </div>
    );
  }
}

export default App;
