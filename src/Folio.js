import React, { Component } from 'react';
import './Folio.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import plush from './assets/Plush.png';
import gala from './assets/galamockup.jpeg';

import Grid from '@material-ui/core/Grid';


class Folio extends Component {

  state = {
    raised:false
  }
  toggleRaised = () => this.setState({raised:!this.state.raised});

    render() {
      return (
        <Grid container spacing={24} justify="center" >
          <Grid item md={3} >
              <Card className="cardfolio"
              onMouseOver={this.toggleRaised} 
              onMouseOut={this.toggleRaised} 
              raised={this.state.raised}>
              
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Plush Project"
                className="media"
                image={plush}
                title="Contemplative Reptile"
              />
              <CardContent>
               <Typography gutterBottom variant="subtitle1"  >
                Plush
               </Typography>
               
              </CardContent>
            </CardActionArea>
            
          </Card>
         </Grid>
         <Grid item md={3} >
              <Card className="cardfolio"
              onMouseOver={this.toggleRaised} 
              onMouseOut={this.toggleRaised} 
              raised={this.state.raised}>
              
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Plush Project"
                className="media"
                image={gala}
                title="Contemplative Reptile"
              />
              <CardContent>
               <Typography gutterBottom variant="subtitle1"  >
                Gala
               </Typography>
              
              </CardContent>
            </CardActionArea>
            
            </Card>
          </Grid>
          <Grid item md={3} >
              <Card className="cardfolio"
              onMouseOver={this.toggleRaised} 
              onMouseOut={this.toggleRaised} 
              raised={this.state.raised}>
              
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Plush Project"
                className="media"
                image={gala}
                title="Contemplative Reptile"
              />
              <CardContent>
               <Typography gutterBottom variant="subtitle1"  >
                Gala
               </Typography>
              
              </CardContent>
            </CardActionArea>
            
            </Card>
          </Grid>
          <Grid item md={3} >
              <Card className="cardfolio"
              onMouseOver={this.toggleRaised} 
              onMouseOut={this.toggleRaised} 
              raised={this.state.raised}>
              
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Plush Project"
                className="media"
                image={gala}
                title="Contemplative Reptile"
              />
              <CardContent>
               <Typography gutterBottom variant="subtitle1"  >
                Gala
               </Typography>
              
              </CardContent>
            </CardActionArea>
            
            </Card>
          </Grid>
        </Grid>
      );
    }
  }
  
  export default Folio;