import React, { Component } from 'react';
import './App.css';
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

class Stats extends Component {
    render() {
      return (
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
                  <MdSchool fontSize="20px" color="maroon" />
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
      );
    }
  }
  
  export default Stats;