import {
  RiMenu3Line,
  RiFolderInfoFill,
  RiContactsBook2Fill,
} from "react-icons/ri";
import { MdWork } from "react-icons/md";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaHome, FaDownload } from "react-icons/fa";

import PrimaryBtn from "../../buttons/PrimaryButton";

export default function Navbar() {
  // Show Navbar on Scroll UP
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShow(true);
        } else {
          setShow(false);
        }
        setLastScrollY(window.scrollY);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navLinks = [
    { title: "Home", link: "/", icon: <FaHome /> },
    { title: "About", link: "/about", icon: <RiFolderInfoFill /> },
    { title: "Projects", link: "/projects", icon: <MdWork /> },
    { title: "Contact", link: "/contact", icon: <RiContactsBook2Fill /> },
  ];

  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 500,
      color: isActive && "#FF651C",
    };
  };

  const handleDownload = () => {
    const url = "/zunaira-asif_resume.pdf";
    const fileName = url.split("/").pop();
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div
      className={`w-full fixed z-50 flex items-center justify-stretch 
      bg-secondary shadow-lg transition-all duration-300 ease-linear 
      ${show ? "-top-20" : "top-0"}`}
    >
      <div className="w-full flex items-center justify-between px-3 md:px-24 py-3">
        <div>
          <Link to="/">
            <h1 className="text-2xl text-primary font-lobster">Zunaira Asif</h1>
          </Link>
        </div>

        <div className="lg:flex items-center hidden">
          {navLinks.map((item) => (
            <NavLink
              key={item.title}
              to={item.link}
              style={activeLink}
              className="text-white hover:text-primary duration-300 mx-4"
            >
              {item.title}
            </NavLink>
          ))}

          <PrimaryBtn onClick={handleDownload}>
            RESUME
            <FaDownload />
          </PrimaryBtn>
        </div>

        <div className="block lg:hidden">
          <button onClick={toggleDrawer} className="btn btn-ghost text-white">
            <RiMenu3Line />
          </button>

          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            style={{ backgroundColor: "#212121" }}
            className="flex flex-col justify-between pb-4"
          >
            <div className="flex justify-end px-4 py-3">
              <button
                className="text-white hover:text-primary duration-300"
                onClick={toggleDrawer}
              >
                ✕
              </button>
            </div>

            <nav className="px-4 py-3 flex-1">
              {navLinks.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.link}
                  style={activeLink}
                  className="block text-white py-2"
                  onClick={toggleDrawer}
                >
                  <div className="flex items-center gap-2 hover:text-primary duration-300">
                    {item.icon}
                    {item.title}
                  </div>
                </NavLink>
              ))}
            </nav>

            <div className="mx-3">
              <PrimaryBtn onClick={handleDownload} className="w-full">
                RESUME
                <FaDownload />
              </PrimaryBtn>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
