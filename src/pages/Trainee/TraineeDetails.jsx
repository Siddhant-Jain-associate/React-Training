import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useParams,Link} from 'react-router-dom';
import NotFound from '../../layouts/NotFoundPage';
import data from './data/trainee';
import Moment from 'react-moment';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function TraineeDetail(props) {
  const classes = useStyles();

  let {id} = useParams();
  console.log(id);

  const trainee = data.find(p=>p.id===id);
  console.log(trainee.name);
  let TraineeData=null;
  if(trainee){
    TraineeData = (
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {trainee.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {trainee.email}<br/>
           <Moment format="dddd, MMMM Do YYYY, h:mm:ss a" >
              {trainee.date}
           </Moment>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component={Link} to="/trainee">
           Back
        </Button>
      </CardActions>
    </Card>
    )
  }else{
    TraineeData = (<NotFound />)
  }
  // const params = useLocation();
  // console.log(params.pathname);
  // console.log(params.pathname.substr(9,25));
  // let Trainee = Object.keys(Trainees).find(key => Trainees[key].id === params.pathname.substr(9,24));
  // console.log(Trainees[Trainee]);

  return (
    <div>
      {TraineeData}
    </div>
  );
}