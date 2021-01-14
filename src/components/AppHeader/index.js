import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import cx from 'classnames';
import './styles.css';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    textAlign: "center",
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: "bolder",
    fontSize: 30

  },
}));

const AppHeader = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static" className="appheader">
        <Toolbar className="appheader">
          <Typography variant="h6" className={classes.title}>
            CRUD APP
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppHeader
