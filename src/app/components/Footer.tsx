/** @format */

import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary ">
              Portfolio&trade;
            </Link>
            <p className="text-sm text-secondary mt-2">
              ©{new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com/ZabiullahShokuri"
              target="_blank"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/zabiullah-shokuri-b61294270/"
              target="_blank"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="/"
              target="_blank"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
