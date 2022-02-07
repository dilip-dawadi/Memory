import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    backgroundColor: '',
    padding: '10px',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },


  toolbar: {
    display: 'flex',
    justifyContent: 'flex-center',
    padding: '7px',
  },
  a: {
    textDecoration: 'none',
    padding: '0px 20px',
  }
}));