import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import someimage from '../css/download.jpg';

function about() {
  return (
    <ABOUT>
      <H1>Meet The Team</H1>
      <CARD1>
        <CardHeader title="Mohammad Aflah Khan" subheader="Member" />
        <CARDCONTENT>
          <CardMedia>
            <IMG src={someimage}></IMG>
          </CardMedia>

          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CARDCONTENT>
      </CARD1>
      <CARD2>
        <CARDHEADER title="Kushagra" subheader="Member" />
        <CARDCONTENT>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
          <CardMedia>
            <IMG src={someimage}></IMG>
          </CardMedia>
        </CARDCONTENT>
      </CARD2>
      <CARD3>
        <CardHeader title="Nishaant Rastogi" subheader="Member" />
        <CARDCONTENT>
          <CardMedia>
            <IMG src={someimage}></IMG>
          </CardMedia>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CARDCONTENT>
      </CARD3>
      <CARD4>
        <CARDHEADER title="Neemesh Yadav" subheader="Member" />
        <CARDCONTENT>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
          <CardMedia>
            <IMG src={someimage}></IMG>
          </CardMedia>
        </CARDCONTENT>
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
`

const CARD2 = styled(Card)`
margin: 20px;
width:  50%;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
`

const CARD3 = styled(Card)`
align-items: right;
margin: 20px;
width:  50%;
`

const CARD4 = styled(Card)`
margin: 20px;
width:  50%;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
`

const CARDCONTENT = styled(CardContent)`
display: flex;
align-items: right;
`

const IMG = styled.img`
height: 100px;
width :  100px;
border: 1px solid blue;
margin-left: -5px;
margin-right: 10px;
margin-bottom: -20px;
margin-top: -20px;
`

const CARDHEADER = styled(CardHeader)`
margin-right: 0;

`
