import React from 'react';
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import CountUp from 'react-countup';
import Resume from './Resume';
import Service from './Service';

// Importing Google Fonts
import '@fontsource/roboto';  // Example: Roboto font
import '@fontsource/open-sans';  // Example: Open Sans font
import { motion } from 'framer-motion';


export default function Hero() {
  return (
    <section className="text-third w-screen  font-mono overflow-y-auto scrollbar-hidden h-[86vh]">
      <div className="flex flex-col md:flex-row mt-[10vh] md:mt-[5vh] justify-center items-center gap-16 mx-auto md:mx-20">

        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl md:max-w-lg">
          <p className="text-2xl sm:text-xl text-secondary mb-4">Website Development</p>
          <p className="text-7xl sm:text-3xl font-bold font-serif">Hello, I'm</p>
          <p className="text-7xl font-bold text-fourth font-sans">Anand Maurya</p>
          <p className="text-xl sm:text-lg mt-5 mb-8">
          Web Developer skilled in building responsive websites with the MERN stack. Proficient in HTML, CSS, JavaScript, React, Node.js, and MongoDB. Passionate about creating seamless user experiences and eager to apply and grow my skills in real-world projects.
          </p>
          {/* Button Section */}
      <div className='flex flex-wrap justify-center w-full container gap-5'>
        {/* Download CV Button */}
        <button
          className="text-sm text-third border-2 hover:text-primary border-fourth hover:bg-fourth/70
      font-semibold rounded-2xl px-3 py-2 duration-200 flex items-center transform hover:scale-105"
        >
          <a href="" className='flex items-center gap-1'>
            Download CV <FaDownload className='text-base pl-1' />
          </a>
        </button>

        {/* GitHub Link */}
        <a
          href="https://github.com/anandcodework"  // Replace with your GitHub link
          className="text-lg text-third border-2 hover:text-primary border-fourth hover:bg-fourth/70
      font-semibold rounded-full p-4 duration-200 transform hover:scale-105"
        >
          <FaGithub className='text-2xl' />
        </a>

        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHY6Ei9kV6QAAAAAZQjJB2I9-_YshrXChS-QIBYYq8R1m90mCbM0kZgZQwh65_8uk5QTGuOue4FSJ7cowG806uUvgFSmSnZyK4R0VskEKmL-a6CEGSljl8xtD-spG2hgRMHkiQ=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fanand-maurya-2aa1a232a%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app"  // Replace with your LinkedIn link
          className="text-lg text-third border-2 hover:text-primary border-fourth hover:bg-fourth/70
      font-semibold rounded-full p-4 duration-200 transform hover:scale-105"
        >
          <FaLinkedin className='text-2xl' />
        </a>
      </div>
        </div>

        {/* Image Section */}
        

<div className="flex justify-center relative">
  

  {/* Image Animation */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 1, duration: 1.7, ease: "easeInOut" },
    }}
    className="relative w-48 p-3 sm:w-64 md:w-72 lg:w-80 xl:w-[360px] 2xl:w-[420px]"
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.9, ease: "easeInOut" },
      }}
    >
      {/* Rotating Circle Animation */}
  <motion.svg
    width="506"
    height="506"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 506 506"
    className="absolute inset-0 w-full h-full"
  >
    <motion.circle
      cx="253"
      cy="253"
      r="250"
      stroke="#06ff99" // Green stroke color
      strokeWidth="4"
      strokeLinejoin="round"
      fill="none" // Ensures the circle is hollow
      strokeDasharray="24 16" // This defines the dashed pattern
      animate={{
        strokeDasharray: ["15 120 25 25", "16 25 92 72", "2 250 22 22",], // Change the dash pattern
        rotate: [120, 360], // Rotate the circle
      }}
      transition={{
        duration: 26,
        repeat: Infinity, // Repeat animation infinitely
        repeatType: "reverse", // Reverse the animation on repeat
      }}
    />
  </motion.svg>
      <img
        src="src/assets/2.png" // Adjust the image path as needed
        alt="2.png"
        className="object-contain rounded-full w-full h-full"
      />
    </motion.div>
  </motion.div>
</div>

      </div>
              
{/* Counter Section */}
      <div className="w-screen text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 px-6 md:px-20 mt-20 md:mt-32">
        {/* Counter Item: Years of Experience */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <div className="text-5xl sm:text-6xl lg:text-7xl font-sans mr-4">
            <CountUp
              start={0}
              end={2}
              duration={5}
              decimals={1}
            />
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl font-medium text-justify">
            Years of <br  /> experience
          </p>
        </div>

        {/* Counter Item: Projects Completed */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <div className="text-5xl sm:text-6xl lg:text-7xl font-sans mr-4">
            <CountUp
              start={0}
              end={5}
              duration={5}
              decimals={0}
            />
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl font-medium text-justify">
            Projects <br /> completed
          </p>
        </div>

        {/* Counter Item: Programming Languages Learned */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <div className="text-5xl sm:text-6xl lg:text-7xl font-sans mr-4">
            <CountUp
              start={0}
              end={14}
              duration={5}
              decimals={0}
            />
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl font-medium text-justify">
          Technology <br />knowledge
          </p>
        </div>

        {/* Counter Item: Code Commits */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <div className="text-5xl sm:text-6xl lg:text-7xl font-sans mr-4">
            <CountUp
              start={0}
              end={25}
              duration={5}
              decimals={0}
            />
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl font-medium text-justify">
            Code <br /> commits
          </p>
        </div>
      </div>
      <Service/>
      <Resume/>
    </section>

  );
}
