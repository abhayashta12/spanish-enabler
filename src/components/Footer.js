import React from 'react';

const Footer = () => (
  <footer className="bg-primary text-white py-6">
    <div className="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} Spanish Enabler . All Rights Reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://www.tiktok.com/@thespanishenabler"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300"
        >
          Tiktok
        </a>
        <a
          href="https://www.instagram.com/thespanishenabler/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300"
        >
          Instagram
        </a>
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300"
        >
          Twitter
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
