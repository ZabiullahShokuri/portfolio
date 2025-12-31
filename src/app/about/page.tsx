/** @format */
'use client';
import { motion } from 'framer-motion';
import {
  cardHover,
  fadeIn,
  fadeInDown,
  fadeInUp,
} from '@/src/utils/animations';
import React from 'react';
import { FaCode, FaGraduationCap, FaLaptop } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <motion.h1
        {...fadeInDown}
        className="text-4xl font-bold mb-8 text-center"
      >
        About Me
      </motion.h1>

      {/* bio section */}
      <motion.section {...fadeInUp} className="mb-16">
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I am a QA Engineer with a strong frontend development background,
          focused on building and testing modern web applications. With hands-on
          experience in manual testing and frontend technologies, I help ensure
          high-quality user experiences through close collaboration with
          developers and designers.
        </p>
      </motion.section>

      {/* skills section */}
      <motion.section {...fadeIn} className="mb-16 ">
        <motion.h2 {...fadeInUp} className="section-title">
          Skills
        </motion.h2>

        <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaCode className="h-8 w-8  text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3 / JavaScript</li>
            </ul>
          </motion.div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaLaptop className="h-8 w-8  text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <ul className="text-secondary space-y-2">
              <li>Manual Testing</li>
              <li>UI Testing (Figma vs Implementation)</li>
              <li>Test Case Design</li>
              <li>Bug Reporting & Regression Testing</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Basic CI/CD awareness</li>
              <li>Docker (basic)</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>

      {/* experience section */}
      <section className="mb-16">
        <h2 className="section-title">Experiences</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Frontend Developer / QA Engineer
            </h3>
            <p className="text-sm text-gray-500 mb-3">Tripsi.ir • 2024</p>
            <ul className="text-secondary space-y-2">
              <li>Built responsive UI components using React and Next.js</li>
              <li>Converted Figma designs into production-ready interfaces</li>
              <li>Executed manual tests on key user flows and layouts</li>
              <li>Reported UI issues with clear steps and visual references</li>
            </ul>
          </div>
        </div>
      </section>

      {/* education section */}
      <section className="mb-16">
        <h2 className="section-title">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              High School Diploma – Computer Studies
            </h3>
            <p className="text-sm text-gray-500 mb-3">2022</p>
            <ul className="text-secondary space-y-2">
              <li>
                Built a strong foundation in computer basics and programming
                concepts
              </li>
              <li>
                Developed early interest in web technologies and software
                quality
              </li>
              <li>
                Continued self-learning through online courses and hands-on
                projects
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
