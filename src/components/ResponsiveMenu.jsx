import React, { useEffect, useRef } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const ResponsiveMenu = ({ open, setOpen }) => {
  const location = useLocation();
  const menuRef = useRef(null);

  const NavbarMenu = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'About', link: '/about' },
    { id: 3, title: 'Skills', link: '/skills' },
    { id: 4, title: 'Contact', link: '/contact' },
  ];

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false); // Close the menu if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuItemClick = () => {
    setOpen(false); // Close the menu when a menu item is clicked
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="fixed top-0 left-0 w-2/3 sm:w-1/2 h-full bg-gray-600/45 z-20"
        >
          <div ref={menuRef} className="text-sm font-semibold uppercase text-secondary py-5 flex flex-col justify-center items-center ">
            <ul className="w-full flex flex-col items-center gap-3 mt-20 mb-8">
              {NavbarMenu.map((item) => (
                <li key={item.id} className="w-full">
                  <Link
                    to={item.link}
                    onClick={handleMenuItemClick}
                    className={`ml-[40%] relative group uppercase no-underline tracking-wide inline-block py-3 px-5 items-center transition-colors duration-300 text-center ${
                      location.pathname === item.link
                        ? 'text-white'
                        : 'text-secondary'
                    }`}
                  >
                    {item.title}
                    <span className="block absolute bottom-0 left-1/2 w-0 h-0.5 bg-secondary transition-all duration-200 ease-out group-hover:w-full group-hover:left-0"></span>
                  </Link>
                </li>
              ))}
            </ul>
              {/* Hire Button */}
              <button className="ml-[8%] bg-black/75 hover:bg-primary hover:text-black text-primary font-semibold rounded-full px-4 py-1 inline-block duration-200">
                Hire Me !
              </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
