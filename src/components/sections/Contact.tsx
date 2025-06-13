import React from 'react';
import { Instagram, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-24 bg-green-500 mx-auto mb-6"></div>
          <p className="text-neutral-600">
            Have a project in mind? I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact form */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6 flex-1">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Instagram className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Instagram</h4>
                    <a 
                      href="https://www.instagram.com/kollikamalakar/" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      @kollikamalakar
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:kollikamalakar@gmail.com" 
                      className="text-green-600 hover:underline"
                    >
                     kollikamalakar@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-600 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Let's work together</h3>
              <p className="mb-6">
                I'm currently available for freelance work. Get in touch if you have a project that needs creative attention.
              </p>
              <a 
                href="https://www.instagram.com/kollikamalakar/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-neutral-100 transition-colors"
              >
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;