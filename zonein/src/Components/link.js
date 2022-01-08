import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const CssTextField = withStyles({
  root: {
    '& input': {
      color: 'white'
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& label': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);
function Link({ data, setData }) {
  const [link, setLink] = useState('');

  const handleLinkChange = event => {
    setLink(event.target.value);
  };
  useEffect(() => {
    setData({ data: link, type: 0 })
  }, [link]);
  return (
    <form noValidate autoComplete="on">
      <CssTextField
        id="custom-css-standard-input"
        label="URL" variant="outlined"
        placeholder="URL"
        style={{ color: 'white' }}
        onChange={handleLinkChange}
        onPaste={handleLinkChange} />
    </form>
  )
}

export default Link
