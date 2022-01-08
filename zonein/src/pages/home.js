import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import { makeStyles } from '@material-ui/core/styles';
import Link from '../Components/link';
import Upload from '../Components/upload';
import './home.css';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));


function Home() {
  const classes = useStyles();
  const [flag, setFlag] = useState(true);
  const [data, setData] = useState({})

  useEffect(() => {
  }, [flag]);
  const handlePost = () => {
    if (flag) {
      console.log("GENERATE");
    } else {
      axios.post('http://localhost:5000/uploadLink', data)
        .then(function (response) {
          console.log(response);
          //Perform action based on response
        })
        .catch(function (error) {
          console.log(error);
          //Perform action based on error
        });
      console.log("GENERATE");
    }
  }
  return (
    <div className="container">
      <div className="buttonContainer">
        <BUTTON
          variant="contained"
          color="primary"
          className={classes.button}
          id="upload"
          startIcon={<CLOUDUPLOADICON />} onClick={() => flag ? null : setFlag(true)}>Upload
        </BUTTON>
        <BUTTON
          variant="contained"
          color="primary"
          className={classes.button}
          id="link"
          startIcon={<INSERTLINKICON />} onClick={() => flag ? setFlag(false) : null}>Link
        </BUTTON>
      </div>
      <div id="buttonwindow">
        {flag ? <Upload data={data} setData={setData} /> : <Link data={data} setData={setData} />}
      </div>
      <div className="generate">
        <BUTTON1 size="large" color="primary" onClick={handlePost}>
          GENERATE
        </BUTTON1>
      </div>
    </div>
  )
}

export default Home

const BUTTON = styled(Button)` 
height:65px;
width: 200px;
font-size: 25px;
margin-bottom: 25px;
`
const BUTTON1 = styled(Button)` 
background-color:#00d1d1;
font-size: 25px;
margin-bottom: 50px;
margin-left:130px;
`
const CLOUDUPLOADICON = styled(CloudUploadIcon)`
height: 30px;
width: 30px;
`
const INSERTLINKICON = styled(InsertLinkIcon)`
height: 30px;
width: 30px;
`
