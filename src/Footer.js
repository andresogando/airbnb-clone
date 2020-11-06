import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">

           <p>  © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://twitter.com/Andresyrn">Andres</a>
          </p>
          <p> NO RIGHTS RESERVED THIS IS A DEMO PAGE</p>
        </div>
    )
}

export default Footer
