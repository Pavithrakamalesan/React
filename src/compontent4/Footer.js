import React from 'react';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';
const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1976D2',
    color: 'white',
    textAlign: 'center',
  };

  const iconStyle = {
    color: 'white',
    marginRight: '10px',
  };

  return (
    <div style={footerStyle}>
      <IconButton color="inherit" aria-label="Facebook" href="https://www.facebook.com/vcetputtur/">
        <FacebookIcon style={iconStyle} />
      </IconButton>
      <IconButton color="inherit" aria-label="Linkedin" href="https://www.linkedin.com/school/velalar-college-of-engineering-and-technology/?originalSubdomain=in">
        <LinkedinIcon style={iconStyle} />
      </IconButton>
      <IconButton color="inherit" aria-label="Instagram" href="https://www.instagram.com/csi_vcet/">
        <Instagram style={iconStyle} />
      </IconButton>
    </div>
  );
}

export default Footer;