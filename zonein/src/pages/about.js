import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

function about() {
  return (
    <ABOUT>
      <H1>Meet The Team</H1>
      <CARD1>
        <div>
          <CardMedia>
            <IMG src="/images/aflah.jpeg"></IMG>
          </CardMedia>
        </div>
        <div>
          <CardHeader title="Mohammad Aflah Khan" subheader="2020082" />
          <CARDCONTENT>
            <Typography variant="body2" color="textSecondary">
              Handled Machine Learning/ Deep Learning, API Development and Network Plotting , assisted in backend development.
            </Typography>
          </CARDCONTENT>
        </div>

      </CARD1>
      <CARD2>
        <div>
          <CardMedia>
            <IMG src="/images/kushagra.jpg"></IMG>
          </CardMedia>
        </div>
        <div>
          <CardHeader title="Kushagra" subheader="2020075" />
          <CARDCONTENT>
            <Typography variant="body2" color="textSecondary">
              Handled Front End Components and Designing of Elements , handled Event handlers and Other Functionalities
            </Typography>
          </CARDCONTENT>
        </div>
      </CARD2>
      <CARD3>
        <div>
          <CardMedia>
            <IMG src="/images/nishaant.jpeg"></IMG>
          </CardMedia>
        </div>
        <div>
          <CardHeader title="Nishaant Rastogi" subheader="2020091" />
          <CARDCONTENT>
            <Typography variant="body2" color="textSecondary">
              Handled BackEnd Server Setup and Flask Development , Assisted in Designing of Elements and implementation of Other functionalities.
            </Typography>
          </CARDCONTENT>
        </div>
      </CARD3>
      <CARD4>
        <div>
          <CardMedia>
            <IMG src="/images/neemesh.jpeg"></IMG>
          </CardMedia>
        </div>
        <div>
          <CardHeader title="Neemesh Yadav" subheader="2020529" />
          <CARDCONTENT>
            <Typography variant="body2" color="textSecondary">
              Handled Data processing of the SRT Files , implemented Machine Learning Algorithms and Other functionalities.
            </Typography>
          </CARDCONTENT>
        </div>
      </CARD4>

    </ABOUT>
  )
}

export default about

const H1 = styled.h1`

margin: 20px;
color: white;
font-size: 50px;
font-family: 'Roboto', sans-serif;
`

const ABOUT = styled.div`
align-items: center;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const CARD1 = styled(Card)`
margin: 20px;
width:  50%;
display: flex;
`

const CARD2 = styled(Card)`
margin: 20px;
width:  50%;
display: flex;
`

const CARD3 = styled(Card)`
margin: 20px;
width:  50%;
display: flex;
`

const CARD4 = styled(Card)`
margin: 20px;
width:  50%;
display: flex;
`

const CARDCONTENT = styled(CardContent)`
display: flex;
align-items: right;
`

const IMG = styled.img`
height: 150px;
width: 150px;
margin-top: 10px;
border: 1px solid black;
margin-left: 10px;
`

const CARDHEADER = styled(CardHeader)`
margin-right: 0;

`
