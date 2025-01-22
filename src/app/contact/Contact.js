import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
} from "lucide-react";
import { Input } from "@/components/ui/input";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 md:py-12 py-6 md:mx-0 mx-5">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg md:p-8 p-4">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Reach Us At
            </h2>

            <div className="flex items-center space-x-4 mb-4">
              <Mail className="w-5 h-5 text-gray-600" />
              <span className="text-lg text-gray-700">
                mashal7864@gmail.com
              </span>
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <MapPin className="w-5 h-5 text-gray-600" />
              <span className="text-lg text-gray-700">
                Barakhamba Rd, Connaught Place,New Delhi
              </span>
            </div>

            <div className="flex space-x-6 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="youremail@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 outline-1 outline-blue-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
