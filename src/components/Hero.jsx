import React from 'react';
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import CountUp from 'react-countup';

// Importing Google Fonts
import '@fontsource/roboto';  // Example: Roboto font
import '@fontsource/open-sans';  // Example: Open Sans font
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="text-third w-screen mt-[10vh] font-mono">
      <div className="flex flex-col md:flex-row justify-center items-center gap-16 mx-auto md:mx-20">

        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl md:max-w-lg">
          <p className="text-2xl sm:text-xl text-secondary mb-4">Website Development</p>
          <p className="text-7xl sm:text-3xl font-bold font-serif">Hello, I'm</p>
          <p className="text-7xl font-bold text-fourth font-sans">Anand Maurya</p>
          <p className="text-xl sm:text-lg mt-5 mb-8">
            Fresher with knowledge in web development and the MERN stack. Skilled in building responsive and
            user-friendly websites using HTML, CSS, JavaScript, and React. Looking for opportunities to apply my
            skills and gain professional experience.
          </p>


        </div>

        {/* Image Section */}
        <div className="flex justify-center md:mb-20">
          <motion.div
            initial={{ opacity: 50 }}
            animate={{
              opacity: 50,
              transition: { delay: 1, duration: 0.1, ease: "easeIn" }
            }}
            className="relative w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[400px] 2xl:w-[500px]"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.4, duration: 0.1, ease: "easeInOut" }
              }}
            >
              <img
                src="src/assets/Anand Logo.png" // Adjust the image path as needed
                alt="Anand Maurya Logo"
                className="object-contain rounded-full w-full h-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

   {/* Button Section */}
<div className='flex flex-wrap justify-self-center pl-20 md:pl-52  w-full container my-5 gap-5 '>
  {/* Download CV Button */}
  <button
    className="text-lg text-third border-2 hover:text-primary border-fourth hover:bg-fourth/70
      font-semibold rounded-2xl px-2 py-1 duration-200 flex items-center"
  >
    <a href="" className='flex items-center gap-1'>
      Download CV <FaDownload className='pl-1 ' />
    </a>
  </button>

  {/* GitHub Link */}
  <a
    href="https://linkedin.com/in/your-linkedin"  // Replace with your LinkedIn link
    className="text-xl text-third border-2 hover:text-primary border-fourth hover:bg-fourth/70
      font-semibold rounded-full p-5 duration-200"
  >
    <FaGithub className='text-3xl' />
  </a>

  {/* LinkedIn Link */}
  <a
    href="https://linkedin.com/in/your-linkedin"  // Replace with your LinkedIn link
    className="text-xl text-third border-2 hover:text-primary border-fourth hover:bg-fourth/70
      font-semibold rounded-full p-5 duration-200"
  >
    <FaLinkedin className='text-3xl' />
  </a>
</div>


      {/* Counter Section */}
<div className=" w-screen text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 mt-36 px-20 ">
  {/* Counter Item: Years of Experience */}
  <div className="flex flex-col items-center gap-2 font-mono">
    <div className="text-6xl sm:text-5xl md:text-7xl font-sans mr-5">
      <CountUp
        start={0}
        end={0.6}
        duration={2.75}
        decimals={1}
      />
    </div>
    <p className="text-lg sm:text-xl">Years of <br /> experience</p>
  </div>

  {/* Counter Item: Projects Completed */}
  <div className="flex flex-col items-center gap-2 font-mono">
    <div className="text-6xl sm:text-5xl md:text-7xl font-sans mr-5">
      <CountUp
        start={0}
        end={5}
        duration={2.75}
        decimals={0}
      />
    </div>
    <p className="text-lg sm:text-xl">Projects <br /> completed</p>
  </div>

  {/* Counter Item: Programming Languages Learned */}
  <div className="flex flex-col items-center gap-2 font-mono">
    <div className="text-6xl sm:text-5xl md:text-7xl font-sans mr-5">
      <CountUp
        start={0}
        end={8}
        duration={2.75}
        decimals={0}
      />
    </div>
    <p className="text-lg sm:text-xl">Learned <br /> programming languages</p>
  </div>

  {/* Counter Item: Code Commits */}
  <div className="flex flex-col items-center gap-2 font-mono">
    <div className="text-6xl sm:text-5xl md:text-7xl font-sans mr-5">
      <CountUp
        start={0}
        end={25}
        duration={2.75}
        decimals={0}
      />
    </div>
    <p className="text-lg sm:text-xl">Code <br /> commits</p>
  </div>
</div>

    </section>
  );
}
