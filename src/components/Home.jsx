import React from "react";
//React Icons
import { BsChevronDoubleDown } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
// React Scroll
import { Link } from "react-scroll";

import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-[#252629] to-black"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 space-y-4 flex flex-col justify-center h-full">
        <p className="text-4xl text-[#8892b0]">Hi, I'm,</p>
        <h1 className="text-4xl md:text-6xl sm:text-5xl font-bold uppercase tracking-widest text-white">
          Dinito Thompson
        </h1>
        <h2 className="text-xl sm:text-3xl tracking-wider text-[#8892b0]">
          Fullstack Developer/Graphic Designer
        </h2>
        <div className="flex text-xl sm:text-2xl tracking-widest text-[#8892b0]">
          <h2 className="text-white">
            Skills: <span></span>
          </h2>
          <div className="pl-2">
            <Typewriter
              options={{
                strings: [
                  "ReactJs",
                  "NodeJs",
                  "Java",
                  "C++",
                  "HTML",
                  "JavaScript",
                  "Adobe Photoshop",
                  "TailwindCss",
                  "Firebase",
                  "Adobe Illustrator",
                ],
                autoStart: true,
                loop: true,
                cursor: null,
              }}
            />
          </div>
        </div>
        {/* Buttons */}
        <div className="flex space-x-5">
          <Link to={"about"} smooth={true} duration={500}>
            <button className="text-white uppercase group border-b-2 px-4 py-3 my-2 flex items-center  hover:border-b-blue-600">
              About Me
              <span className="group-hover:scale-125 duration-300">
                <BsChevronDoubleDown className="ml-3 " />
              </span>
            </button>
          </Link>
          <a
            href={"/assets/Documents/Dinito R. Thompson - Resume.pdf"}
            download={true}
            target="_blank"
            alt="Resume"
            rel="noreferrer"
            className="text-white uppercase group border-b-2 px-4 py-3 my-2 flex items-center  hover:border-b-blue-600"
          >
            Resume
            <span className="group-hover:scale-125 duration-300">
              <AiOutlineDownload className="ml-3 " />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
