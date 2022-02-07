import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Link} from 'react-router-dom';

import useStyles from "./styles";
const Footer = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.appBar}
      px={{ xs: 5, sm: 5 }}
      py={{ xs: 5, sm: 5 }}
      bgcolor="text.secondary"
      color="white"
    >
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Link to="/auth"  className={classes.link}>
            GoogleLogin or Login
          </Link>
          <hr/>
          <Link to="/"  className={classes.link}>
            Home
          </Link>
        </Box>
        <Box textAlign="center" mt={5}>
          MKD Co-Operations &reg; {new Date().getFullYear()}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
