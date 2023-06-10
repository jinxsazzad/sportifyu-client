import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="footer p-10">
        <div>
          <h1 id="white">Sports Spark</h1>
          <p id="white">
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div id="white">
          <span className="footer-title white">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div id="white">
          <span className="footer-title white">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div id="white">
          <span className="footer-title white">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <hr />
      <div className=" text-center p-4 text-base-content">
        <p id="white">
          Copyright © 2023 - All right reserved by ACME Industries Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
