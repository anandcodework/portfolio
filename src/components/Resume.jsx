import React, { useState } from 'react';
import '@fontsource/roboto';  // Example: Roboto font
import '@fontsource/open-sans';  // Example: Open Sans font
import "./../index.css"
import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaBootstrap, FaPython, FaReact, } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiCplusplus, SiVite, SiExpress, SiNextdotjs, SiAndroidstudio } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BsFiletypeSql } from "react-icons/bs";


export default function Resume() {
  const [activeSection, setActiveSection] = useState(1); // Default section 1 is active

  const handleAnchorClick = (sectionNumber) => {
    setActiveSection(sectionNumber);  // Set the active section based on anchor click
  };

  // Helper function to determine button background color
  const getButtonClass = (sectionNumber) => {
    return activeSection === sectionNumber
      ? 'bg-fourth text-primary'  // Active section button background color
      : 'bg-secondary/10 text-third';  // Inactive section button background color
  };

  return (
    <div className='w-screen md:px-36 overflow-y-auto scrollbar-hidden h-[85vh]'>
      <div className="font-mono text-third mt-[10vh] px-10 flex flex-col sm:flex-row gap-10 sm:gap-20 mb-10">
        <div className="w-full md:w-[25%]">
          <h1 className='mb-20 text-4xl font-sans'>Why hire me?</h1>
          {/* anchor section */}
          <div className="flex flex-col gap-5">
            <a
              href="#section1"
              className={`border text-center rounded-lg w-full sm:w-[80%] hover:text-primary hover:bg-fourth font-semibold font-sans py-2 ${getButtonClass(1)}`}
              onClick={(e) => { e.preventDefault(); handleAnchorClick(1); }}
            >
              Skills
            </a>
            <a
              href="#section2"
              className={`border text-center rounded-lg w-full sm:w-[80%] hover:text-primary hover:bg-fourth font-semibold font-sans py-2 ${getButtonClass(2)}`}
              onClick={(e) => { e.preventDefault(); handleAnchorClick(2); }}
            >
              Education
            </a>
            {/* <a
          href="#section3"
          className={`border text-center rounded-lg w-full sm:w-[80%] hover:text-primary hover:bg-fourth font-semibold font-sans py-2 ${getButtonClass(3)}`}
          onClick={(e) => { e.preventDefault(); handleAnchorClick(3); }}
        >
          Experience
        </a> */}
            <a
              href="#section4"
              className={`border text-center rounded-lg w-full sm:w-[80%] hover:text-primary hover:bg-fourth font-semibold font-sans py-2 ${getButtonClass(4)}`}
              onClick={(e) => { e.preventDefault(); handleAnchorClick(4); }}
            >
              About me
            </a>
          </div>
        </div>

        {/* Section 1 - visible if activeSection is 1 */}
        {activeSection === 1 && (
          <div className="w-full md:w-[75%]" id="section1">
            <h1 className='text text-2xl mb-5 font-roboto'>My Skills</h1>
            <p className='mb-5'>I am skilled in frontend development with HTML, CSS, JavaScript, and React, and have experience with Node.js, Express.js, and MongoDB on the backend. I focus on responsive design and user experience (UX), aiming to build seamless, intuitive web applications. Currently expanding my skills with Next.js, I prioritize clean, scalable code and continually seek to learn new technologies.
</p>
            <div className="p-4 bg-secondary/5 rounded-lg mt-2 overflow-y-auto scrollbar-hidden h-80">
              <h1>Programming languages</h1>
              <div className='flex flex-wrap justify-start gap-4 p-4'>
                {/* FaHtml5 */}
                <div className="relative group border rounded-md p-2 bg-secondary/5 text-primary hover:text-fourth flex items-center justify-center">
                  <FaHtml5 className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-110 transition-transform duration-300" />
                  <span className="absolute opacity-0 translate-y-4 text-center text-sm text-third group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bottom-[-22px] w-full pb-1">HTML5</span>
                </div>
                {/* FaCss3 */}
                <div className="relative group border rounded-md p-2 bg-secondary/5 text-primary hover:text-fourth flex items-center justify-center">
                  <FaCss3 className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-110 transition-transform duration-300" />
                  <span className="absolute opacity-0 translate-y-4 text-center text-sm text-third group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bottom-[-22px] w-full pb-1">CSS3</span>
                </div>

                {/* FaJs */}
                <div className="relative group border rounded-md p-2 bg-secondary/5 text-primary hover:text-fourth flex items-center justify-center">
                  <FaJs className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-110 transition-transform duration-300" />
                  <span className="absolute opacity-0 translate-y-4 text-center text-sm text-third group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bottom-[-22px] w-full pb-1">JavaScript</span>
                </div>
                {/* SiCplusplus */}
                <div className="relative group border rounded-md p-2 bg-secondary/5 text-primary hover:text-fourth flex items-center justify-center">
                  <SiCplusplus className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-110 transition-transform duration-300" />
                  <span className="absolute opacity-0 translate-y-4 text-center text-sm text-third group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bottom-[-22px] w-full pb-1">C++</span>
                </div>
                {/* FaPython */}
                <div className="relative group border rounded-md p-2 bg-secondary/5 text-primary hover:text-fourth flex items-center justify-center">
                  <FaPython className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-110 transition-transform duration-300" />
                  <span className="absolute opacity-0 translate-y-4 text-center text-sm text-third group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bottom-[-22px] w-full pb-1">Python</span>
                </div>
              </div>

              <h1>Frameworks</h1>
              <div className='flex flex-wrap justify-start gap-4 p-4'>
                {/* Next JS */}
                <div className="relative group border rounded-md p-2 bg-secondary/5 text-primary hover:text-fourth flex items-center justify-center">
                  <SiNextdotjs className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-110 transition-transform duration-300" />
                  <span className="absolute opacity-0 translate-y-4 text-center text-sm text-third group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bottom-[-22px] w-full pb-1">Next.js</span>
                </div>
                {/* RiTailwindCssFill */}
                <div className="relative group border rounded-md p-2 bg-secondary/5 text-primary hover:text-fourth flex items-center justify-center">
                  <RiTailwindCssFill className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-110 transition-transform duration-300" />
                  <span className="absolute opacity-0 translate-y-4 text-center text-sm text-third group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bottom-[-22px] w-full pb-1">Tailwind CSS</span>
                </div>
                {/* FaNodeJs */}
                <div className="relative group border rounded-md p-2 bg-secondary/5 text-primary hover:text-fourth flex items-center justify-center">
                  <FaNodeJs className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-110 transition-transform duration-300" />
                  <span className="absolute opacity-0 translate-y-4 text-center text-sm text-third group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bottom-[-22px] w-full pb-1">Node.js</span>
                </div>

                {/* SiExpress */}
                <div className="relative group border rounded-md p-2 bg-secondary/5 text-primary hover:text-fourth flex items-center justify-center">
                  <SiExpress className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-110 transition-transform duration-300" />
                  <span className="absolute opacity-0 translate-y-4 text-center text-sm text-third group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bottom-[-22px] w-full pb-1">Express</span>
                </div>

                {/* FaBootstrap */}
                <div className="relative group border rounded-md p-2 bg-secondary/5 text-primary hover:text-fourth flex items-center justify-center">
                  <FaBootstrap className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-110 transition-transform duration-300" />
                  <span className="absolute opacity-0 translate-y-4 text-center text-sm text-third group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bottom-[-22px] w-full pb-1">Bootstrap</span>
                </div>
              </div>

              <h1>Libraries</h1>
              <div className='flex flex-wrap justify-start gap-4 p-4'>
                {/* FaReact */}
                <div className="relative group border rounded-md p-2 bg-secondary/5 text-primary hover:text-fourth flex items-center justify-center">
                  <FaReact className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-110 transition-transform duration-300" />
                  <span className="absolute opacity-0 translate-y-4 text-center text-sm text-third group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bottom-[-22px] w-full pb-1">React</span>
                </div>
                {/* SiVite */}
                <div className="relative group border rounded-md p-2 bg-secondary/5 text-primary hover:text-fourth flex items-center justify-center">
                  <SiVite className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-110 transition-transform duration-300" />
                  <span className="absolute opacity-0 translate-y-4 text-center text-sm text-third group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bottom-[-22px] w-full pb-1">Vite</span>
                </div>
              </div>
              <h1>Database</h1>
              <div className='flex flex-wrap justify-start gap-4 p-4'>

                {/* SiMongodb */}
                <div className="relative group border rounded-md p-2 bg-secondary/5 text-primary hover:text-fourth flex items-center justify-center">
                  <SiMongodb className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-110 transition-transform duration-300" />
                  <span className="absolute opacity-0 translate-y-4 text-center text-sm text-third group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bottom-[-22px] w-full pb-1">MongoDB</span>
                </div>
                {/* BsFiletypeSql */}
                <div className="relative group border rounded-md p-2 bg-secondary/5 text-primary hover:text-fourth flex items-center justify-center">
                  <BsFiletypeSql className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-110 transition-transform duration-300" />
                  <span className="absolute opacity-0 translate-y-4 text-center text-sm text-third group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bottom-[-22px] w-full pb-1">Sql </span>
                </div>
              </div>

              <h1>Tools</h1>
              <div className='flex flex-wrap justify-start gap-4 p-4'>

                {/* SiAndroidstudio  */}
                <div className="relative group border rounded-md p-2 bg-secondary/5 text-primary hover:text-fourth flex items-center justify-center">
                  <SiAndroidstudio className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-110 transition-transform duration-300" />
                  <span className="absolute opacity-0 translate-y-4 text-center text-sm text-third group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bottom-[-38px] w-full pb-1">Android studio </span>
                </div>
                {/* VscVscode  */}
                <div className="relative group border rounded-md p-2 bg-secondary/5 text-primary hover:text-fourth flex items-center justify-center">
                  <VscVscode className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-110 transition-transform duration-300" />
                  <span className="absolute opacity-0 translate-y-4 text-center text-sm text-third group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bottom-[-22px] w-full pb-1">Vs code </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section 2 - visible if activeSection is 2 */}
        {activeSection === 2 && (
          <div className="w-full md:w-[75%]" id="section2">
            <h1 className='text text-2xl mb-5 font-roboto'>My Education</h1>
            <p>I am currently pursuing a Bachelor of Science in Computer Science (B.Sc. C.S.) at Mumbai University (2022-2025). Prior to this, I completed my Higher Secondary Certificate (H.S.C.) and Secondary School Certificate (S.S.C.) from the Maharashtra Board. My education has equipped me with a solid foundation in computer science and programming, which I am applying to real-world projects.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 overflow-y-auto scrollbar-hidden max-h-80 gap-5">
              <div className='border-2 border-fourth p-2'>
                <div className='px-3'>
                  <div className='flex justify-between'>
                    <p className='text-fourth mb-5 py-1'> 2025 </p>
                    <p className='text-fourth mb-5 py-1'> Awaiting </p>
                  </div>
                  <p className='text-third text-2xl'>Bachelor of Science Computer Science</p>
                  <p className='text-third mt-2'>Mumbai University</p>
                </div>
              </div>
              <div className='border-2 border-fourth p-2'>
                <div className='px-3'>
                  <div className='flex justify-between'>
                    <p className='text-fourth mb-5 py-1'> 2022 </p>
                    <p className='text-fourth mb-5 py-1'> 59.00% </p>
                  </div>
                  <p className='text-third text-2xl'>Higher Secondary Certificate (HSC)</p>
                  <p className='text-third mt-2'>Maharashtra state board</p>
                </div>
              </div>
              <div className='border-2 border-fourth p-2'>
                <div className='px-3'>
                  <div className='flex justify-between'>
                    <p className='text-fourth mb-5 py-1'> 2020 </p>
                    <p className='text-fourth mb-5 py-1'> 75.60% </p>
                  </div>
                  <p className='text-third text-2xl'>Secondary School Certificate (SSC)</p>
                  <p className='text-third mt-2'>Maharashtra state board</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section 3 - visible if activeSection is 3 */}
        {activeSection === 3 && (
          <div className="w-full md:w-[75%]" id="section2">
            <h1 className='text text-2xl mb-5 font-roboto'>My <Expericee></Expericee></h1>
            <p>I am currently pursuing a Bachelor of Science in Computer Science (B.Sc. C.S.) at Mumbai University (2022-2025). Prior to this, I completed my Higher Secondary Certificate (H.S.C.) and Secondary School Certificate (S.S.C.) from the Maharashtra Board. My education has equipped me with a solid foundation in computer science and programming, which I am applying to real-world projects.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 overflow-y-auto scrollbar-hidden max-h-80 gap-5">
              <div className='border-2 border-fourth p-2'>
                <div className='px-3'>
                  <div className='flex justify-between'>
                    <p className='text-fourth mb-5 py-1'> 2025 </p>
                    <p className='text-fourth mb-5 py-1'> Awaiting </p>
                  </div>
                  <p className='text-third text-2xl'>Bachelor of Science Computer Science</p>
                  <p className='text-third mt-2'>Mumbai University</p>
                </div>
              </div>
              <div className='border-2 border-fourth p-2'>
                <div className='px-3'>
                  <div className='flex justify-between'>
                    <p className='text-fourth mb-5 py-1'> 2022 </p>
                    <p className='text-fourth mb-5 py-1'> 59.00% </p>
                  </div>
                  <p className='text-third text-2xl'>Higher Secondary Certificate (HSC)</p>
                  <p className='text-third mt-2'>Maharashtra state board</p>
                </div>
              </div>
              <div className='border-2 border-fourth p-2'>
                <div className='px-3'>
                  <div className='flex justify-between'>
                    <p className='text-fourth mb-5 py-1'> 2020 </p>
                    <p className='text-fourth mb-5 py-1'> 75.60% </p>
                  </div>
                  <p className='text-third text-2xl'>Secondary School Certificate (SSC)</p>
                  <p className='text-third mt-2'>Maharashtra state board</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section 4 - visible if activeSection is 4 */}
        {activeSection === 4 && (
          <div className="w-full md:w-[75%]" id="section4">
            <h1 className='text text-2xl mb-5 font-roboto'>About Me</h1>
            <p> A dedicated Web Developer with expertise in the MERN stack (MongoDB, Express, React, Node.js). I focus on building responsive, user-friendly websites that provide seamless user experiences. With strong skills in frontend and backend development, I’m committed to delivering clean, scalable code and continuously learning new technologies to stay ahead. I’m passionate about turning ideas into functional, high-quality applications and am eager to contribute to your team’s success.</p>
            <div className='mt-8 grid grid-cols-1 sm:grid-cols-2'>
              <div className='space-y-5'>
                <p className='text-secondary text-md'>Name <span className='text-third font-semibold ml-2 text-lg'>Anand Maurya</span></p>
                <p className='text-secondary text-md'>Nationality <span className='text-third font-semibold ml-2 text-lg'>Indian</span></p>
                <p className='text-secondary text-md'>Experience <span className='text-third font-semibold ml-2 text-lg'>2 Years+</span></p>
                <p className='text-secondary text-md'>Freelance <span className='text-third font-semibold ml-2 text-lg'>Available</span></p>
              </div>
              <div className='space-y-5'>
                <p className='text-secondary text-md'>Phone No. <span className='text-third font-semibold ml-2 text-lg'>+91 8169295148</span></p>
                <p className='text-secondary text-md'>Gender <span className='text-third font-semibold ml-2 text-lg'>Male</span></p>
                <p className='text-secondary text-md'>Email <span className='text-third font-semibold ml-2 text-lg'>am6429975@gmail.com</span></p>
                <p className='text-secondary text-md'>Language <span className='text-third font-semibold ml-2 text-lg'>English, Hindi, Marathi</span></p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

  );
}
