import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import logo from "../../src/assets/Logo/IMG_20240828_143915.png";

import { NavbarLinks } from "../data/navbar-links"; // Adjust the path as necessary
import { motion } from "framer-motion";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) =>
    location.pathname === path ? "text-yellow-500 font-bold" : "text-[#AAAAAA]";

  return (
    <div
      className={`flex items-center justify-center  mt-6 mb-40 bg-[#010127] transition-all duration-200 `}
    >
      <div
        className={`items-center justify-between border-[#2F343A] border-2 px-6 md:rounded-2xl bg-[#010B10] flex  md:backdrop-filter md:backdrop-blur-md md:bg-opacity-85  ${
          scrolled
            ? "md:w-7/12 md:mt-20 mt-8 md:h-16 w-full h-20"
            : "md:mt-20 mt-8 md:w-11/12 md:h-20 w-full h-20"
        } fixed z-50 transition-all duration-200`}
      >
        {/* Logo */}
        <Link to="/">
        <div className="flex items-center">
          <img src={logo} alt="Logo" width={70} height={24} loading="lazy" />
          <h1 className="text-white text-3xl font-bold mx-2 ">CodeVertex</h1>
        </div>
        </Link>

        {/* Navigation links for desktop */}
        <nav className="hidden md:block text-lg font-semibold">
          <ul className="flex gap-x-6">
            {NavbarLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className={isActive(link.path)}>
                  <p>{link.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* login and sign up  */}
        <div className="hidden items-center gap-x-4 md:flex ">
          <Link to="/login">
            <button className="rounded-full border border-[#141313] bg-[#2F343A] px-[20px]  py-[8px] text-[#AFB2BF] text-lg font-semibold">
              Get Started
            </button>
          </Link>
         
        </div>

        {/* Mobile menu icon */}
        <button
          className="mr-4 md:hidden "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <AiOutlineClose fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
          )}
        </button>
        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <motion.div
            initial={{ y: "50%" }}
            animate={{ y: "1%" }}
            transition={{ duration: 0.9 }}
            className="fixed top-16 w-[90%] h-[60%]  backdrop-filter backdrop-blur-md bg-opacity-80 rounded-2xl text-[#AAAAAA] bg-[#2F343A] mt-12 z-40 flex flex-col items-center"
          >
            <ul className="flex flex-col mt-20 gap-6 text-center">
              {NavbarLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={isActive(link.path) + " text-2xl"}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
