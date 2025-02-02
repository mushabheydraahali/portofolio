import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="flex flex-wrap mx-2 w-10 h-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaDiscord />
        <FaInstagram />
        <FaYoutube />
        <FaTiktok />
      </div>
    </nav>
  );
};

export default Navbar;