import React, { useState, useRef } from 'react';
import { MdEmail, MdCall, MdLocationOn } from "react-icons/md";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [mobile, setMobile] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

  const handleChange = (e) => {
    const value = e.target.value;
    // Only allow numbers by filtering out non-numeric characters
    if (/^\d*$/.test(value)) {
      setMobile(value); // Update state with the numeric value
    }
  };

  const handleServiceChange = (e) => {
    const service = e.target.value;
    setSelectedService(service);
    
    // Add the selected service to the message area
    if (service === 'web-development') {
      setMessage('I am interested in Web Development services.');
    } else if (service === 'app-development') {
      setMessage('I am interested in App Development services.');
    } else {
      setMessage('');
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_snsi79c', 'template_t7myuo8', form.current, {
        publicKey: '6Y-awfRZi2v9KYghh',
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="py-16 bg-secondary/10 w-screen font-mono overflow-y-auto scrollbar-hidden h-[86vh]">
      <div className="container mx-auto px-5 sm:px-16 md:px-32">
        <h1 className="text-4xl font-bold text-center text-fourth mb-12">Contact me</h1>
        <div className="p-6 rounded-lg shadow-lg mb-12 bg-primary/80">
          <p className="text-lg text-secondary text-center leading-relaxed">
            Hello! I'm <span className="font-bold text-fourth">Anand Maurya</span>, a passionate Web Developer specializing in building dynamic, responsive, and user-friendly websites using the MERN stack. I focus on delivering high-performance, scalable web applications that provide seamless user experiences. If you have any questions or want to discuss a project, feel free to reach out—I’m excited to bring your ideas to life!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary/80 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold font-sans text-fourth mb-6">Let's work together</h2>
            <form className="space-y-4" ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-secondary my-1 font-medium">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full px-4 py-2 border text-third border-secondary/25 hover:border-2 hover:border-fourth bg-white/10 rounded-lg"
                    placeholder="Anand"
                    required
                  />
                </div>
                <div>
                  <label className="block text-secondary my-1 font-medium">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full px-4 py-2 border text-third border-secondary/25 hover:border-2 hover:border-fourth bg-white/10 rounded-lg"
                    placeholder="Maurya"
                    required
                  />
                </div>
                <div>
                  <label className="block text-secondary my-1 font-medium">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border text-third border-secondary/25 hover:border-2 hover:border-fourth bg-white/10 rounded-lg"
                    placeholder="example@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-secondary my-1 font-medium">Mobile No.</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={mobile}
                    onChange={handleChange} // Use handleChange to enforce numeric input
                    pattern="[0-9]{10}"
                    maxLength={10}
                    minLength={10}
                    className="w-full px-4 py-2 border text-third border-secondary/25 hover:border-2 hover:border-fourth bg-white/10 rounded-lg"
                    placeholder="9382459090"
                    required
                  />
                </div>
                <div>
                  <label className="block text-secondary my-1 font-medium">Select Service</label>
                  <select
                    name="service"
                    className="w-full px-4 py-2 border text-third border-secondary/25 hover:border-2 hover:border-fourth bg-white/10 rounded-lg"
                    value={selectedService}
                    onChange={handleServiceChange}
                    required
                  >
                    <option className='bg-primary/60 text-primary' value="">Choose an option</option>
                    <option className='bg-primary/60 text-primary' value="web-development">Web Development</option>
                    <option className='bg-primary/60 text-primary' value="app-development">App Development</option>
                  </select>
                </div>
              </div>

              {/* Message area is rendered based on selected service */}
              {selectedService && (
                <div>
                  <label className="block text-secondary my-1 font-medium">Message</label>
                  <textarea
                    name="message"
                    className="w-full px-4 py-2 border text-third border-secondary/25 hover:border-2 hover:border-fourth bg-white/10 rounded-lg"
                    rows="5"
                    placeholder="Write your message here..."
                    value={message}  // Pre-fill message with selected service text
                    onChange={(e) => setMessage(e.target.value)}  // Allow the user to modify the message
                    required
                  ></textarea>
                </div>
              )}

              <button
                type="submit"
                value="send"
                className="bg-fourth text-primary font-semibold px-4 py-2 rounded-xl hover:bg-fourth/70 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-primary/80 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center space-y-8">
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row justify-start items-center gap-5 text-third">
                <MdCall className="text-fourth bg-third/10 p-1 text-6xl rounded-md" />
                <div>
                  <div className="text-third/70">Phone No. :</div>
                  <div>+91 8169295148</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-start items-center gap-5 text-third">
                <MdEmail className="text-fourth bg-third/10 p-1 text-6xl rounded-md" />
                <div>
                  <div className="text-third/70">Email Id :</div>
                  <div>am6429975@gmail.com</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-start items-center gap-5 text-third">
                <MdLocationOn className="text-fourth bg-third/10 p-1 text-6xl rounded-md" />
                <div>
                  <div className="text-third/70">Address :</div>
                  <div>Ramabai colony Ghatkopar <br className='md;hidden '/> East Mum-75</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
