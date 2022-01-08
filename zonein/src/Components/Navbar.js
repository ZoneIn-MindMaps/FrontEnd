import React from "react";
import logo from '../css/Logo.png';
import styled from 'styled-components';


import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {

    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "#3F51B5",
      borderBottom: "1px solid white",
    },
  },
}));


function Navbar() {
  const classes = useStyles();

  return (
    <APPBAR position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <IMG src={logo}></IMG>
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
          <Link to="/faq" className={classes.link}>
            FAQ
          </Link>
        </div>
      </Toolbar>
    </APPBAR>
  );
}
export default Navbar;


const APPBAR = styled(AppBar)`
  background-color: #1a1a1a;
`

const IMG = styled.img`
  width: 150px;
  height: 50px;
`
