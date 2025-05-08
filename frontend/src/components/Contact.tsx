import React from 'react';

export default function Contact() {
    return (
      <section className="px-6 py-16 max-w-xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Contact Us</h2>
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Your Name" className="border border-gray-300 p-3 rounded" />
          <input type="email" placeholder="Your Email" className="border border-gray-300 p-3 rounded" />
          <textarea placeholder="Message" className="border border-gray-300 p-3 rounded" rows={5}></textarea>
          <button type="submit" className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition">Send Message</button>
        </form>
        <div className="mt-8 text-center text-sm text-gray-500">
          Or email us directly at <a href="mailto:studio@edenarch.com" className="underline">studio@edenarch.com</a>
        </div>
      </section>
    );
  }