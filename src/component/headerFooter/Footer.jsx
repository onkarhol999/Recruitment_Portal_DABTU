import React from 'react' // eslint-disable-line no-unused-vars
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start" id="footerContainer">
      <div className="container p-4">
        <a className="footerLinks" href="/"> Terms of Use </a> | 
        <a className="footerLinks" href="/"> Privacy Statement </a> | 
        <a className="footerLinks" href="/"> Disclaimer </a> |
        <a className="footerLinks" href="/"> AICTE </a> |
        <a className="footerLinks" href="/"> DST </a> |
        <a className="footerLinks" href="/"> DTE Maharashtra </a> |
        <a className="footerLinks" href="/"> RUSA </a> |
        <a className="footerLinks" href="/"> State CET Cell </a>
      </div>
      <div className="text-center p-3">
        © 2024 Copyright:
        <a className="text-body footerLinks" href="/"> all copyrights reserved</a>
      </div>
    </footer>
  )
}

export default Footer
