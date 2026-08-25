import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile(1)(1).png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">

        {/* ================= LEFT SIDE ================= */}
        <div className="md:w-[55%] text-center md:text-left mt-8 md:mt-0">

          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Zameer Hassan Shah
          </h2>

          {/* Professional Identity */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-5 text-[#8245ec] leading-tight">

            <span className="text-white">
              I am an&nbsp;
            </span>

            <ReactTypingEffect
              text={[
                'AI & Data Science Engineer',
                'Machine Learning Engineer',
                'AI Engineer',
                'Software Engineer',
                'Full-Stack Developer',
                'Technology Enthusiast',
              ]}
              speed={70}
              eraseSpeed={40}
              typingDelay={500}
              eraseDelay={1800}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />

          </h3>

          {/* About Me */}
          <p className="text-base sm:text-lg md:text-lg text-gray-300 mb-6 mt-6 leading-relaxed">

            I am an Information Technology graduate and Artificial Intelligence
            Intern at Brackets Pvt. Ltd. under the Punjab Government's Chief
            Minister IT Internship Program (CMITP). My current focus is on
            Artificial Intelligence, Data Science, Machine Learning, and
            intelligent software systems.

          </p>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-8 leading-relaxed">

            I work with Python, SQL, data analysis, machine learning,
            statistical analysis, data preprocessing, and visualization,
            while leveraging my background in full-stack software engineering
            to build practical, scalable, and data-driven applications.
            I am particularly interested in applying AI and machine learning
            to real-world problems, especially healthcare and intelligent
            decision-support systems.

          </p>

          {/* Career / Research Direction */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 leading-relaxed">

            My long-term goal is to contribute to impactful AI research and
            engineering, develop intelligent technology for real-world
            challenges, and grow into a technology leader capable of bridging
            research, engineering, and innovation.

          </p>

          {/* ================= BUTTONS ================= */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            {/* CV */}
            <a
              href="/Zameer_hassan_cv.pdf"
              download="Zameer_hassan_cv.pdf"
              className="inline-block text-white py-3 px-8 rounded-full text-base sm:text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background:
                  'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow:
                  '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 30px #8245ec',
              }}
            >
              DOWNLOAD CV
            </a>

            {/* Projects */}
            <a
              href="#projects"
              className="inline-block text-white py-3 px-8 rounded-full text-base sm:text-lg font-bold border border-[#8245ec] transition duration-300 hover:bg-[#8245ec]/20 hover:scale-105"
            >
              VIEW PROJECTS
            </a>

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="md:w-[45%] flex justify-center md:justify-end">

          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >

            <img
              src={profileImage}
              alt="Zameer Hassan Shah - AI and Data Science Engineer"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />

          </Tilt>

        </div>

      </div>
    </section>
  );
};

export default About;