import React from "react";
import { LuContact } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import Navbar from "./LandingPage/Navbar";
import Footer from "./LandingPage/Footer";

function Contact() {
  return (
    <section className="bg-gray-100">
      <Navbar />
      <div className="container mx-auto flex flex-col items-center px-4 py-20 md:flex-row md:space-x-12">
        <div className="w-full md:w-1/2">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            Let's Connect!
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            We'd love to hear from you! Whether you have a question, a
            collaboration idea, or just want to chat, don't hesitate to reach
            out. We're always happy to connect.
          </p>
          <ul className="list-none space-y-4">
            <li className="flex items-center space-x-4">
              <span className="text-xl text-green-500">
                <MdEmail />
              </span>
              <span className="text-gray-600">
                <a
                  href="https://www.socialmedia.com/yourcompany"
                  className="text-green-500 hover:underline"
                >
                  contact@thriveapp.com
                </a>
              </span>
            </li>

            <li className="flex items-center space-x-4">
              <span className="text-xl text-green-500">
                <LuContact />
              </span>
              <span className="text-gray-600">+91 9343109266</span>
            </li>
          </ul>
          <form className="mt-8 flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            ></textarea>
            <button
              type="submit"
              className="inline-flex items-center rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex w-full items-center justify-center md:w-1/2">
          <img
            src="/public/Images/ContactUs.svg"
            alt="Contact Us Illustration"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Contact;
