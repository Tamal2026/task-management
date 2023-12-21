import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto my-8">
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Contact Us
        </h2>

        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-600 block mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-gray-600 block mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="text-gray-600 block mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
