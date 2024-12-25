import React from 'react';
import { GoArrowDownRight, GoArrowRight } from "react-icons/go";

export default function Service() {
  return (
    <div className='w-screen overflow-y-auto scrollbar-hidden h-auto text-third px-5 sm:px-16 md:px-32'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-20'>
        {/* First service card */}
        <div className='border border-secondary p-6 rounded-md hover:text-fourth'>
          <div className='flex justify-between items-center text-2xl font-bold'>
            <h1>01</h1>
            {/* Icon container with group class */}
            <div className='group'>
              {/* Default Icon */}
              <GoArrowDownRight className='bg-third text-primary rounded-full text-4xl group-hover:hidden' />
              {/* Hover Icon */}
              <a href="/contact">
                <GoArrowRight className='bg-fourth text-primary rounded-full text-4xl group-hover:block hidden' />
              </a>
            </div>
          </div>
          <h1 className='my-5 text-3xl font-serif'>Web Development</h1>
          <p className='text-secondary font-mono'>
            Web Developer experienced in creating responsive websites using the MERN stack. Strong in frontend technologies (HTML, CSS, JavaScript, React) and backend development (Node.js, MongoDB). Focused on delivering seamless user experiences and eager to contribute and grow in professional projects.
          </p>
        </div>

        {/* Second service card */}
        <div className='border border-secondary p-6 rounded-md hover:text-fourth'>
          <div className='flex justify-between items-center text-2xl font-bold'>
            <h1>02</h1>
            {/* Icon container with group class */}
            <div className='group'>
              {/* Default Icon */}
              <GoArrowDownRight className='bg-third text-primary rounded-full text-4xl group-hover:hidden' />
              {/* Hover Icon */}
              <a href="/contact">
                <GoArrowRight className='bg-fourth text-primary rounded-full text-4xl group-hover:block hidden' />
              </a>
            </div>
          </div>
          <h1 className='my-5 text-3xl font-serif'>Mobile Application Development</h1>
          <p className='text-secondary font-mono'>
            Mobile App Developer experienced in building responsive and user-friendly applications for both Android and iOS. Proficient in React Native for cross-platform development. Focused on creating seamless mobile experiences and eager to contribute to impactful projects.
          </p>
        </div>
      </div>
    </div>
  );
}
