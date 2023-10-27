import React from "react";
import Picture from "../assets/react.svg";

import {TypeAnimation} from "react-type-animation";
import{FaTwitter,FaFacebookF,FaInstagram,FaLinkedinIn} from "react-icons/fa"
const Main = () => {
  return (
    // Main component:Handles social media icons,introduction,text type effect
    // Image for the main section/background
    <div id="main" className='h-screen bg-black'>
       
      {/* Create overlay to cover background image */}
      <div className="w-full h-screen absolute top-0 ">
        {/* Introduction text */}
        <div className='max-w-[700px] m-auto h-full width-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold bg-gray-700 text-slate-200 first-letter:text-green-400'>My name is Vince Dority<span className=
          'text-40 text-green-400'>.</span></h1>
          <h2 className=" flex sm:text-2xl text-xl pt-4 text-slate-200 font-bold">
            {/* Enter TypeAnimation block */}
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am a Front End Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'With experience in',
        2000,
        'Javascript ',
        3000,
        'HTML & CSS',
        3000,
        'React',
        3000,
        'Bootstrap',
        3000,
        'SASS',
        3000,
        "Git & Github",
         3000,
         'Tailwind.css ',
         3000



      ]}
      wrapper="span"
      speed={30}
      style={{ fontSize: '2em' ,paddingleft:'5px' }}
      repeat={Infinity}
    />
          </h2>
          {/* Social media icons */}
          <div className='flex justify-between pt-6 max-w-[200px] w-full text-green-400 '>
            <FaTwitter className="cursor-pointer" size={20} />
            <FaFacebookF className="cursor-pointer" size={20}/>
            <FaInstagram className="cursor-pointer" size={20}/>
            <FaLinkedinIn className="cursor-pointer" size={20}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
