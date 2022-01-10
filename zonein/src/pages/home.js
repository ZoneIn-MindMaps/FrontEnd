import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import { makeStyles } from '@material-ui/core/styles';
import Link2 from '../Components/link';
import Upload from '../Components/upload';
import './home.css';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Circular from './Circular';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));



function Home() {
  const classes = useStyles();
  const [flag, setFlag] = useState(true);
  const [data, setData] = useState({})
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
  }, [flag]);
  const handlePost = () => {
    if (flag) {
      console.log("GENERATE");
      setisLoading(true)
      console.log(data);
      axios.get(`http://127.0.0.1:5000/1/sub`, data,
        { crossdomain: true }
      )
        .then(function (response) {
          setisLoading(false)
          window.location.reload(false);
          console.log(response);
          Swal.fire({
            icon: 'success',
            title: 'Results Generated Successfully'
          })
        })
        .catch(function (error) {
          console.log(error);
          //Perform action based on error
        });
    } else {
      if (data !== null) {
        console.log(data.data.slice(-11));
        setisLoading(true)
        axios.get(`http://127.0.0.1:5000/${data.data.slice(-11)}`, { crossdomain: true }
        )
          .then(function (response) {
            setisLoading(false)
            window.location.reload(false);
            console.log(response);
            Swal.fire({
              icon: 'success',
              title: 'Results Generated Successfully'
            })
          })
          .catch(function (error) {
            console.log(error);
            //Perform action based on error
          });
        console.log("GENERATE");
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Ooops, Please put a Youtube Link with English Subtitles',
        })
      }
    }
  }
  return (
    <div className="container">
      { isLoading ? <Circular /> : null }
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
      {flag ? <Upload data={data} setData={setData} /> : <Link2 data={data} setData={setData} />}
    </div>
    <div className="generate">
      <BUTTON1 variant="contained" size="large" color="primary" onClick={handlePost}>
        GENERATE
      </BUTTON1>
      <br></br>
      <LINK to="/slider">
        <BUTTON2 variant="contained" size="large" color="primary">
          VIEW RESULTS
        </BUTTON2>
      </LINK>
    </div>
    {/* {isLoading ? null : <Navigate to='/slider' />} */}
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
font-size: 25px;
margin-bottom: 50px;
text-decoration: none;
margin-right: 15px;
`
const BUTTON2 = styled(Button)` 
font-size: 25px;
margin-bottom: 50px;
text-decoration: none;

`
const CLOUDUPLOADICON = styled(CloudUploadIcon)`
height: 30px;
width: 30px;
`
const INSERTLINKICON = styled(InsertLinkIcon)`
height: 30px;
width: 30px;
`
const LINK = styled(Link)`
text-decoration: none;
`