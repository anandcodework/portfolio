import React, { useState, useEffect, useRef } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// Importing Google Fonts
import '@fontsource/roboto';  // Example: Roboto font
import '@fontsource/open-sans';  // Example: Open Sans font


export default function Navbar() {
  const NavbarMenu = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'Service', link: '/service' },
    { id: 3, title: 'Resume', link: '/resume' },
    // { id: 4, title: 'Project', link: '/project' },
    { id: 5, title: 'Contact', link: '/contact' },
  ];

  const [open, setOpen] = useState(false);  // State to toggle the menu visibility
  const location = useLocation();
  const menuRef = useRef(null);

  // Close the menu when clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false); // Close the menu if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle menu open/close
  const handleMenuToggle = () => {
    setOpen((prevOpen) => !prevOpen);  // Toggle menu visibility
  };

  // Close the menu when a menu item is clicked
  const handleMenuItemClick = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="bg-primary top-0 z-10 w-screen shadow-md px-5 font-roboto">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-3">
            {/* Logo section */}
            <div className="text-xl lg:text-2xl font-bold flex items-center ">
              <Link to="/" className="flex items-center ">
                <img src="https://media-hosting.imagekit.io//875530d7f01f407a/1.png?Expires=1735934543&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=w7V7ESI5ZpJJEM9P2-9vHC6Pjw2FE-qB3RyjT~vZcis56R-gJyA6oJ2LP18kRJ21Qz7dz~so5LN-I~tbZPc2RA0KiMniqhuMFgx8b0iGqWmyZv-0hRkozHe3znZRMGp8lXYugnEeGoMv9F864QRp36nGnLPLdjdnOjCjap~lT3~G~cnRY-wu3BT370KokT9HrH8hh33p5ceoDFtsp0sH5GmX5zWdGR-iSa4qBrW53iB02zdRzIFp7DWzSQDW4KdIBqlhV-AwUd1Aei-HuduGMEPV5A5MkorAoL1gl5HfNvV1NrnSVeEhAnoXn1lcNbV2sPcEc3wjV2FBJMNdea9FMQ__" className="rounded-full w-14 h-14 mx-2" alt="logo" />
                <span className="text-fourth font-mono">
                  {"<anandMaurya/>"}
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center">
              <ul className="flex text-third text-sm font-bold">
                {NavbarMenu.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.link}
                      className={`relative group uppercase hover:text-fourth no-underline tracking-wide inline-block py-3 px-5 transition-colors duration-300 ${location.pathname === item.link
                        ? "text-fourth"
                        : 'text-third'
                        }`}
                    >
                      {item.title}
                      <span className="block absolute bottom-0 left-1/2 w-0 h-0.5 bg-fourth transition-all duration-200 ease-out group-hover:w-full group-hover:left-0"></span>
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Hire Button */}
              <a className="ml-8 text-md bg-fourth hover:bg-fourth/70
               text-primary  font-semibold rounded-full px-4 py-1 duration-200"
               href='/contact'>
                Hire Me !
              </a>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden flex items-center" onClick={handleMenuToggle}>
              {open ? (
                <MdClose className="text-4xl text-fourth cursor-pointer" />  // Show close icon when menu is open
              ) : (
                <MdMenu className="text-4xl text-third cursor-pointer" />  // Show hamburger icon when menu is closed
              )}
            </div>
          </div>
        </div>

        {/* Mobile Slidebar Section */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="fixed top-0 left-0 w-2/3 sm:w-1/2 h-full bg-gray-500/45 z-20"
            >
              <div ref={menuRef} className="text-sm font-semibold uppercase text-third py-5 flex flex-col justify-center items-center ">
                <ul className="w-full flex flex-col items-center gap-3 mt-20 mb-8">
                  {NavbarMenu.map((item) => (
                    <li key={item.id} className="w-full">
                      <Link
                        to={item.link}
                        onClick={handleMenuItemClick}
                        className={`ml-[40%] relative group hover:text-fourth uppercase no-underline tracking-wide inline-block py-3 px-5 items-center transition-colors duration-300 text-center ${location.pathname === item.link
                            ? 'text-fourth'
                            : 'text-third'
                          }`}
                      >
                        {item.title}
                        <span className="block absolute bottom-0 left-1/2 w-0 h-0.5 bg-fourth transition-all duration-200 ease-out group-hover:w-full group-hover:left-0"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* Hire Button */}
                <button className="ml-8 text-lg bg-fourth hover:bg-fourth/70
               text-primary  font-semibold rounded-full px-4 py-1 duration-200">
                  Hire Me !
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}