import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 200,
      marginLeft: 500,
    [theme.breakpoints.down('sm')]: {
        width: 'auto',
        margin: 'auto'
      }
    },
  }));
const UserProfile = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const classes = useStyles();
    return (
        
     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="120"

          image={user?.result.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent> 
          <Typography gutterBottom variant="p" component="p">
          {user?.result.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {user?.result.email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    )
}

export default UserProfile



