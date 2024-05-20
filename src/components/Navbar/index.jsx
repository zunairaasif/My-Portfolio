import React from "react";
import { FaDownload } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Project", link: "/project" },
    { title: "Contact", link: "/contact" },
  ];

  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 500,
      color: isActive && "#FF651C",
    };
  };

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
    <div className="bg-[#313131] shadow-lg">
      <div className="w-full flex items-center justify-between px-3 md:px-24 py-3">
        <div>
          <Link to="/">
            <h1 className="text-2xl text-primary font-lobster">Zunaira Asif</h1>
          </Link>
        </div>

        <div>
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
              <div className="flex items-center">
                <span className="mr-2">RESUME</span>
                <FaDownload />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
