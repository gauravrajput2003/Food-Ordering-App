// Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-2">About Us</h3>
          <p className="text-sm">
            We are dedicated to providing the best services to our customers.
            Our mission is to deliver excellence and innovation.
          </p>
        </div>

        <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li className="mb-2">
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 px-4">
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FontAwesomeIcon className="text-2xl"  icon={faFacebookF} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FontAwesomeIcon className="text-2xl"  icon={faTwitter} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FontAwesomeIcon className="text-2xl"  icon={faInstagram} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FontAwesomeIcon className="text-2xl"  icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
