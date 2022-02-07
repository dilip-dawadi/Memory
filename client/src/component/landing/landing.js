import React from 'react';
import { AppBar, Typography} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import useStyles from './styles';
export default function Landing() {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position='static'  color='inherit'>
          <Typography className={classes.toolbar}>
            Welcome. This is a Memories Website, Where you can Find different memories of mine
          </Typography>
          <Typography className={classes.toolbar}> 
          <a className={classes.a} href='https://www.facebook.com/'><FacebookIcon/></a>
          <a className={classes.a} href='https://github.com/dilip-zan'><GitHubIcon/></a>
          <a className={classes.a} href='https://twitter.com/'><TwitterIcon/></a>
          </Typography>
      </AppBar>
  )
    }
