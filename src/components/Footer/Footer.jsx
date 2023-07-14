import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import{BiLogoGmail} from "react-icons/bi";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
        Hey, my name is Hitesh Singh Bisht. I am an undergrad at Graphic Era Hill University pursuing a Bachelor of Technology majoring in Computer Science and Engineering. I am known for bringing about new inspiration and thoughtful ideas. I would describe myself as a passionate learner, who will always take ownership of difficult challenges whenever they occur, which is my strength. Now my goal is to utilize everything I have learned and get experience across different industries.
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Me</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="mailto:hiteshbisht565@gmail.com" target="black">
          <BiLogoGmail />
        </a>
        <a href="https://github.com/hiteshbisht11" target="black">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/hiteshbisht565/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/hitesh-bisht-277211217/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
