import React, { Component } from 'react';
import './Skills.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import StarRatingComponent from 'react-star-rating-component';


class Skills extends Component {
    render() {
      return (
        <Card className="card">
        <CardContent>
        <Typography gutterBottom variant="h4" component="h1" align="left">
              Skills
            </Typography>
            
            <Grid container spacing={24} justify="center" >
              <Grid item xs={6} direction="row">
              <div className="details">
                <Typography component="p" align="right" >
                  UI/UX Design
                </Typography>
              </div>
              </Grid>
              <Grid item xs={6} direction="row">

              <div className="skillicons">
              <StarRatingComponent 
                  name="rate1" 
                  starCount={5}
                  emptyStarColor={'grey'}
                  value={5}
                  editing={1}
                />
              </div>
                
              </Grid>
              <Grid item xs={6} direction="row">
              <div className="details">
                <Typography component="p" align="right" >
                  Frontend 
                </Typography>
              </div>
              </Grid>
              <Grid item xs={6} direction="row">

              <div className="skillicons">
              <StarRatingComponent 
                  name="rate1" 
                  starCount={5}
                  emptyStarColor={'lightgrey'}
                  value={4}
                  editing={1}
                />
              </div>
                
              </Grid>
              <Grid item xs={6} direction="row">
              <div className="details">
                <Typography component="p" align="right" >
                  Backend 
                </Typography>
              </div>
              </Grid>
              <Grid item xs={6} direction="row">

              <div className="skillicons">
              <StarRatingComponent 
                  name="rate1" 
                  starCount={5}
                  emptyStarColor={'lightgrey'}
                  value={3}
                  editing={1}
                />
              </div>
                
              </Grid>
              
             
              
            </Grid>
          </CardContent>
        </Card>
      );
    }
  }
  
  export default Skills;