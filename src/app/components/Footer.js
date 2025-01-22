import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8 px-4">
      <div className="w-full md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <div className="text-2xl font-bold">RawRage</div>
            <p className="mt-2 text-sm text-gray-400 text-left">
              Amplify Results, Awaken the Champion Within.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:items-center items-start">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2 md:ml-4 ml-0">
              <a
                href="/privacy"
                className="hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/refund"
                className="hover:text-blue-400 transition-colors"
              >
                Refund Policy
              </a>
              <a
                href="/terms"
                className="hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/about"
                className="hover:text-blue-400 transition-colors"
              >
                About Us
              </a>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col md:items-end items-start">
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="hover:text-blue-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} RawRage. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
