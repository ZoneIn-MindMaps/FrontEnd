import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

function Circular() {
    const classes = useStyles();

  return (
    <DIV className={classes.root}>
      <CircularProgress size={100} />
      <H1>Thank You For Your Patience</H1>
    </DIV>
    )
}

export default Circular

const DIV = styled.div`
overflow-x: hidden;
z-index: 10000;
top: -100px;
left: 0px;
right: 0px;
position: absolute;
display flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
background-color: #081430;
`

const H1 = styled.h1`
margin-top: 5vw;
size: 200px;
color: white;
`
