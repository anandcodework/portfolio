import React, { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        setSuccess(true);
        setError('');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError('Error sending message. Please try again later.');
      setSuccess(false);
    }
  };

  return (
    <div className="py-16 bg-secondary/10 w-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-fourth mb-12">Contact Computer Shop</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-12 bg-primary/80">
          <p className="text-lg text-secondary text-center leading-relaxed">
            Have any questions or need assistance with your tech? Get in touch with the experts at{' '}
            <span className="font-bold text-fourth">Computer Shop</span>. We are here to help you with custom PC builds, repairs, upgrades, and more. Reach out using the form below or visit us at our store.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary/80 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-fourth mb-6">Get In Touch</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-flow-row md:grid-flow-col gap-2">
                <div>
                  <label className="block text-secondary my-1 font-medium">First Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-2 border border-secondary/25 hover:border-2 hover:border-fourth bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Anand"
                    required
                  />
                </div>
                <div>
                  <label className="block text-secondary my-1 font-medium">Your Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 border border-secondary/25 hover:border-2 hover:border-fourth bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="example@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-secondary my-1 font-medium">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="px-4 py-2 border border-secondary/25 hover:border-2 hover:border-fourth bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Service Inquiry"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-secondary my-1 font-medium">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 border border-secondary/25 hover:border-2 hover:border-fourth bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-fourth text-primary font-semibold px-4 py-2 rounded-xl hover:bg-fourth/70 transition duration-300"
              >
                Send Message
              </button>
              {success && <p className="text-green-500 mt-4">Message sent successfully!</p>}
              {error && <p className="text-red-500 mt-4">{error}</p>}
            </form>
          </div>

          <div className="bg-primary/80 p-8 rounded-lg shadow-md">
            {/* Optional: Add store contact details or location */}
            <h3 className="text-xl font-semibold text-fourth mb-4">Visit Us</h3>
            <p className="text-lg text-secondary">
              Our store is located at 123 Tech Street, Tech City. Drop by for a free consultation, or call us at (123) 456-7890 for more information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
