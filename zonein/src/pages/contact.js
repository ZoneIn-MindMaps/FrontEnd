import { useForm } from "react-cool-form";
import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import '../css/styles.css';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  RadioGroup,
  Radio,
  Button
} from "@material-ui/core";

const SERVICE_ID = "service_wqvw3el";
const TEMPLATE_ID = "template_fh65e8k";
const USER_ID = "user_tL0SukpgBD4oWFNbE30XS";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };
  const { form, use } = useForm({
    defaultValues: { Name: "", email: "", Experience: "", Message: "" }
  });
  const errors = use("errors", { errorWithTouched: true });

  return (
    <CONTAINER>
      <CARD>
        <form onSubmit={sendEmail}>
          <TextField
            label="Name"
            name="Name"
            required
          />
          <FormControl>
            <TextField
              label="Email"
              id="email"
              name="Email"
              type="email"
              error={errors.email}
              helperText={errors.email}
            />
          </FormControl>
          <FormControl>
            <LABEL>
              Comments
            </LABEL>
            <FIELD name="Message"></FIELD>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend">Your Experience</FormLabel>
            <RadioGroup name="Experience" aria-label="Experience" row>
              <FormControlLabel control={<Radio />} value="😍" label="😍" />
              <FormControlLabel control={<Radio />} value="😊" label="😊" />
              <FormControlLabel control={<Radio />} value="😭" label="😭" />
              <FormControlLabel control={<Radio />} value="🤬" label="🤬" />
            </RadioGroup>
          </FormControl>
          <Button type="submit" variant="contained" color="primary" onSubmit={sendEmail}>
            Submit
          </Button>
        </form>
      </CARD>
    </CONTAINER>
  )
}

export default Contact

const CONTAINER = styled.div`
height: 84.7vh;
`


const CARD = styled(Card)`
  font-family: sans-serif;
  width: 500px;
  margin:auto;
  margin-top: 50px;
  height: 600px;
`

const FIELD = styled.textarea`
font-size: 15px;
height: 225px;
`

const LABEL = styled.label`
  margin-top: -20px;
  font-size: 17px;
  color: #777777;
  margin-bottom: 10px;
`
