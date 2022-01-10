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
function Link2({ data, setData }) {
  const [link, setLink] = useState('');

  const handleLinkChange = event => {
    setLink(event.target.value);
  };
  const matchYoutubeUrl = (url) => {
    var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if (url.match(p)) {
      return url.match(p)[1];
    }
    return false;
  }
  useEffect(() => {
    if (matchYoutubeUrl(link)) {
      setData({ data: link, type: 0 })
    } else {
      setData(null)
    }
  }, [link]);
  return (
    <form noValidate autoComplete="on">
      <CssTextField
        id="custom-css-standard-input"
        label="URL" variant="outlined"
        placeholder="URL"
        style={{ color: 'white' }}
        onChange={handleLinkChange}
        onPaste={handleLinkChange}
        onKeyPress={(e) => { if (e.key === 'Enter') { e.preventDefault(); } }}
      />
    </form>
  )
}

export default Link2
