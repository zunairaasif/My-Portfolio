import React, { useState } from "react";
import { MdWork } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaDownload } from "react-icons/fa";
import { RiContactsBook2Fill, RiFolderInfoFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { title: "Home", link: "/", icon: <FaHome /> },
    { title: "About", link: "/about", icon: <RiFolderInfoFill /> },
    { title: "Project", link: "/project", icon: <MdWork /> },
    { title: "Contact", link: "/contact", icon: <RiContactsBook2Fill /> },
  ];

  const activeLink = ({ isActive }) => ({
    fontWeight: 500,
    color: isActive ? "#FF651C" : "white",
  });

  const url = "/zunaira-asif_resume.pdf";
  const handleDownload = () => {
    const fileName = url.split("/").pop();
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="bg-secondary shadow-lg">
      <div className="w-full flex items-center justify-between px-3 md:px-24 py-3">
        <div>
          <Link to="/">
            <h1 className="text-2xl text-primary font-lobster">Zunaira Asif</h1>
          </Link>
        </div>

        {/* Nav Links */}

        <div className="hidden md:flex items-center">
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
          <div className="inline-block ml-4 bg-primary py-2 px-4 rounded font-bold">
            <button onClick={handleDownload}>
              <div className="flex items-center gap-2">
                RESUME
                <FaDownload />
              </div>
            </button>
          </div>
        </div>

        {/* Drawer Button */}

        <button
          className="text-white focus:outline-none md:hidden"
          onClick={toggleDrawer}
        >
          <RiMenu3Line />
        </button>
      </div>

      {/* Overlay */}

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      ></div>

      {/* Drawer */}

      <div
        className={`fixed top-0 right-0 h-full bg-secondary w-64 flex flex-col transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
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

        <div className="m-3">
          <button
            onClick={handleDownload}
            className="w-full bg-primary py-2 px-4 gap-2 rounded font-bold flex items-center justify-center"
          >
            RESUME
            <FaDownload />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
