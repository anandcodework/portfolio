import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Importing Google Fonts
import '@fontsource/roboto';  // Example: Roboto font
import '@fontsource/open-sans';  // Example: Open Sans font


export default function Hero() {
  return (
    <section className="text-third w-screen mt-[20vh] font-mono">
      <div className="flex flex-col md:flex-row justify-center items-center gap-32 mx-auto md:mx-52">

        {/* Text Content */}
        <div className="text-center md:text-left">
          <p className="text-2xl sm:text-xl text-secondary mb-4">Website Development</p>
          <p className="text-7xl sm:text-3xl font-bold font-serif">Hello, I'm</p>
          <p className="text-7xl font-bold text-fourth font-sans">Anand Maurya</p>
          <p className="text-xl sm:text-lg mt-5 mb-8 max-w-xl mx-auto md:mx-0">
            Fresher with knowledge in web development and the MERN stack. Skilled in building responsive and
            user-friendly websites using HTML, CSS, JavaScript, and React. Looking for opportunities to apply my
            skills and gain professional experience.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img 
            src="src/assets/Anand Logo.png" 
            className="rounded-full sm:w-64 md:w-80 lg:w-96 h-auto" 
            alt="Anand Maurya Logo"
          />
        </div>
      </div>

      {/* Button Section */}
      <div className='flex justify-center w-[60%] gap-5'>
        <button>
          <a href="" className="mr-10 text-lg bg-fourth hover:bg-fourth/70
            text-primary font-semibold rounded-full px-4 py-2 duration-200">
            Download CV
          </a>
        </button>
        <button className="text-xl bg-fourth hover:bg-fourth/70
            text-primary font-semibold rounded-full px-2 py-2 duration-200">
          <FaGithub />
        </button>
        <button className="text-xl bg-fourth hover:bg-fourth/70
            text-primary font-semibold rounded-full px-2 py-2 duration-200">
          <FaLinkedin />
        </button>
      </div>

      {/* Additional Section for Counter Bar */}
      <div className="mt-12 text-center">
        <p className="text-2xl text-secondary">Counter Bar</p>
      </div>
    </section>
  );
}
