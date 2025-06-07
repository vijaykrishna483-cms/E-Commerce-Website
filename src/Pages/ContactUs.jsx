import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ContactPage = () => {
  return (
    <>
    
      <Navbar/>
        <div className="w-full px-[8vw] py-16 pt-32 flex flex-col md:flex-row gap-12">
      {/* Support Info */}
    
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Support Customer</h2>
        <p className="text-gray-700 mb-6">
          Have a question? Please contact us using the customer support channels below.
        </p>

        <div className="mb-6">
          <h3 className="font-bold">Customer Care:</h3>
          <p>Phone: +91-7395951666, +91-8056217504</p>
          <p>Email: <a href="mailto:ammasamayalfoods09@gmail.com" className="text-blue-600 underline">ammasamayalfoods09@gmail.com</a></p>
          <p>Opening hours: Everyday 8:00am – 5:00pm</p>
        </div>

        <div className="mb-6">
          <h3 className="font-bold">Wholesale:</h3>
          <p>Email: <a href="mailto:ammasamayalfoods09@gmail.com" className="text-blue-600 underline">ammasamayalfoods09@gmail.com</a></p>
        </div>

        <div>
          <h3 className="font-bold">Press Enquiries:</h3>
          <p>Email: <a href="mailto:ammasamayalfoods09@gmail.com" className="text-blue-600 underline">ammasamayalfoods09@gmail.com</a></p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-6">
          Please submit all general enquiries in the contact form below and we look forward to hearing from you soon.
        </p>

        <form className="space-y-4">
          <div className="flex gap-4 flex-col md:flex-row">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-full px-4 py-3 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-full px-4 py-3 outline-none"
            />
          </div>

          <textarea
            rows="5"
            placeholder="Enter please your message"
            className="w-full border border-gray-300 rounded-3xl px-4 py-3 outline-none resize-none"
          />

          <div className="flex items-center gap-2">
            <input type="checkbox" id="policy" className="w-4 h-4" />
            <label htmlFor="policy" className="text-sm">
              I agree to the <a href="#" className="font-semibold underline">Privacy Policy</a> of the website.
            </label>
          </div>

          <button
            type="submit"
            className="bg-black text-white rounded-full px-8 py-2 font-medium hover:bg-gray-800"
          >
            Send
          </button>
        </form>
      </div>
    </div>


    <Footer/>
      </>
  
  );
};

export default ContactPage;
