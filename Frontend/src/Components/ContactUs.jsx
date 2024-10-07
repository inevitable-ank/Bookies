import React from 'react';
import library from '../assets/book-library.jpg'

const ContactUs = () => {
  return (
    <div className="bg-gray-100 dark:bg-slate-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: `url(${library})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Get in Touch with Us!</h1>
            <p className="text-lg font-light mb-6">
              We’re here to help and answer any question you might have.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-semibold mb-6">Contact Us</h2>
            <p className="text-lg leading-relaxed mb-6">
              Fill out the form below and we’ll get back to you as soon as possible.
            </p>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-semibold mb-6">Our Contact Information</h2>
            <p className="text-lg leading-relaxed mb-4">
              You can also reach out to us through the following ways:
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-blue-500 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12h.01M12 16v1m8-11a9 9 0 11-7.368 15.197c-.045-.053-6.502-6.503-8.01-8.01A8.965 8.965 0 013 12H2m5-5.999V12m12-1.008l.001.001M6 16v1" />
                </svg>
                <p className="text-lg">Phone: (123) 456-7890</p>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-blue-500 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 16.66A2.34 2.34 0 0019.34 15H4.66A2.34 2.34 0 003 17.34v2.32A2.34 2.34 0 004.66 22h14.68A2.34 2.34 0 0021 19.66v-2.32zm0-6A2.34 2.34 0 0019.34 9H4.66A2.34 2.34 0 003 11.34v2.32A2.34 2.34 0 004.66 16h14.68A2.34 2.34 0 0021 13.66v-2.32zm0-6A2.34 2.34 0 0019.34 3H4.66A2.34 2.34 0 003 5.34v2.32A2.34 2.34 0 004.66 10h14.68A2.34 2.34 0 0021 7.66V5.34z" />
                </svg>
                <p className="text-lg">Email: contact@bookstore.com</p>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-blue-500 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.022 9.293A4.978 4.978 0 0117.5 8a5 5 0 11-2.957 4.293" />
                </svg>
                <p className="text-lg">Location: 123 Bookstore Lane, Fiction City, FC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
