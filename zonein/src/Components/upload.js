import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Upload({ data, setData }) {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    formData.append('filename', event.target.files[0].name);
    fetch('http://localhost:5000/uploadFile', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      console.log(response);
    });
    setData({ data: formData, type: 1 });
    setIsSelected(true);
  };

  const handleSubmission = () => {
    console.log("Hi")
    const formData = new FormData();
    formData.append('File', selectedFile);
  };
  return (
    <div>
      <CARD className={classes.root}>
        <CardActionArea>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            style={{ display: 'none' }}
            onChange={changeHandler}
          />
          <label htmlFor="contained-button-file">
            <UPLOADER height={isSelected ? '245px' : '325px'}>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Upload Box"
              />
              <CardContent>
                <TYPOGRAPHY gutterBottom variant="h5" component="h2">
                  Upload File Here
                </TYPOGRAPHY>
              </CardContent>
            </UPLOADER>
          </label>
        </CardActionArea>
        <CardActions>
          {isSelected ? (
            <div>
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in bytes: {selectedFile.size}</p>
              <p>
                lastModifiedDate:{' '}
                {selectedFile.lastModifiedDate.toLocaleDateString()}
              </p>
            </div>
          ) : (
            <P>Select a file to show details</P>
          )}
        </CardActions>
      </CARD>
    </div >
  );
}

export default Upload

const CARD = styled(Card)`
margin-bottom: 50px;
margin-left: 50px;
width: 100%;
height: 400px;
`

const UPLOADER = styled.div`
height: ${props => props.height ? props.height : props.height};
background-color: #D4D4D4;
`

const TYPOGRAPHY = styled(Typography)`
margin-left: 20%;
font-family: sans-serif;
font-size: 25px;
`

const P = styled.p`
font-size: 15px;
`