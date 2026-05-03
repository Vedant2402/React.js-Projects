import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, MapPin, Send } from 'lucide-react';

type ContactSectionProps = {
  darkMode: boolean;
};

const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,         // 🔁 Replace with your EmailJS service ID
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,        // 🔁 Replace with your EmailJS template ID
      {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY          // 🔁 Replace with your EmailJS public key
    ).then(
      (result) => {
        console.log(result.text);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      },
      (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      }
    );
  };

  const contactItems = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'vedantkankate22@gmail.com',
      link: 'mailto:vedantkankate22@gmail.com'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Los Angeles, CA',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <section 
      id="contact" 
      className={`py-20 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Let's Connect
          </h2>
          <div className={`h-1 w-20 mx-auto rounded ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Interested in collaboration or have a project in mind? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg h-full`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.title}</h4>
                      <a 
                        href={item.link} 
                        className={`${darkMode ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'} transition-colors`}
                        target={item.title === 'Location' ? '_blank' : undefined}
                        rel={item.title === 'Location' ? 'noopener noreferrer' : undefined}
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <h4 className={`font-medium mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Connect With Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Vedant2402" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full ${
                      darkMode 
                        ? 'bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white'
                    } transition-colors`}
                    aria-label="GitHub"
                  >
                    {/* GitHub SVG */}
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a 
                    href="https://linkedin.com/in/vedant-kankate/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full ${
                      darkMode 
                        ? 'bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white'
                    } transition-colors`}
                    aria-label="LinkedIn"
                  >
                    {/* LinkedIn SVG */}
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg h-full`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Send Me A Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode 
                          ? 'bg-gray-800 text-white border-gray-700 focus:border-blue-500' 
                          : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-blue-600'
                      } border focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500 outline-none transition-colors`}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode 
                          ? 'bg-gray-800 text-white border-gray-700 focus:border-blue-500' 
                          : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-blue-600'
                      } border focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500 outline-none transition-colors`}
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode 
                        ? 'bg-gray-800 text-white border-gray-700 focus:border-blue-500' 
                        : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-blue-600'
                    } border focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500 outline-none transition-colors`}
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode 
                        ? 'bg-gray-800 text-white border-gray-700 focus:border-blue-500' 
                        : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-blue-600'
                    } border focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500 outline-none transition-colors`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`px-6 py-3 rounded-lg flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-105`}
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
