import React from "react";
import { FaMobile, FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="footer p-10">
        <div >
          <h1 id="white" className="text-5xl font-extrabold mb-5">Spotify U</h1>
          <p id="white">
            SportifyU Academy Ltd.
            <br />
            SportifyU are passionate about sports and physical activity. <br /> Our
            school was created out of passion for water sports and personal
            development.
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
          Copyright © 2023 - All right reserved by SportifyU Academy Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
