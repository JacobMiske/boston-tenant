// MIT License
import React from 'react';

const year = new Date().getFullYear()

function Footer() {
  return (
    <div className="Footer">
        © {year} Boston Tenant Coalition
    </div>
  )
}

export default Footer;