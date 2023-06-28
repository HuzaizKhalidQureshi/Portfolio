import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";

const About = () => {
  const resumeUrl = "/Huzaiz Khalid Qureshi resume.pdf";

  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-7">
          Hi, I'm Huzaiz Khalid Qureshi, a MERN stack developer, WordPress
          designer, and tech enthusiast. Currently, I'm pursuing my Bachelor's
          degree in Computer Science at PIEAS, the prestigious university of
          Pakistan.
        </p>

        <br />

        <p className="text-xl">
          With over 2 years of experience, I have worked on various freelance
          projects, developing and designing websites for clients and local
          businesses. I am passionate about creating impactful and user-friendly
          web solutions.
        </p>

        <p className="text-xl mt-6">
          During my internship at Letsgrowmore, a remote company based in India,
          I excelled and became one of the top performers. My excellent
          communication and leadership skills, along with my strong time
          management abilities, contributed to my success in the role.
        </p>

        <p className="text-xl mt-6">
          Throughout my academic journey, I have been recognized as a remarkable
          and intelligent student. I possess a natural curiosity and drive to
          expand my knowledge and skills. This dedication has allowed me to
          excel in my studies and pursue my passion for web development.
        </p>

        <div className="flex justify-center mt-8">
          <a
            href={resumeUrl}
            className="bg-blue-500 hover:bg-blue-600 hover:scale-105 hover:duration-300 text-white px-4 py-2 rounded-md flex items-center"
            download
          >
            <BsFillPersonLinesFill className="mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
