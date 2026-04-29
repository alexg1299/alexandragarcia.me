import React, { useState, useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import emailjs from '@emailjs/browser';

// ─── EmailJS Configuration ────────────────────────────────────────────────────
// Replace these with your values from https://dashboard.emailjs.com
const EMAILJS_PUBLIC_KEY  = 'ZQBS9KafUgizkphcG';   // Admin → Account → Public Key
const EMAILJS_SERVICE_ID  = 'service_5tmy4a8';   // Email Services → Service ID
const EMAILJS_TEMPLATE_ID = 'template_b88orlg';  // Email Templates → Template ID
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const { portfolioData } = useContext(PortfolioContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Initialize EmailJS with your public key
  React.useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: portfolioData?.email,
          from_email: formData.email,
          from_name: formData.name,
          message: formData.message,
        }
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Email error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-2xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Let's Work Together
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg">
          Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing.
        </p>

        {submitted && (
          <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg text-center">
            Thanks for your message! I'll get back to you soon.
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-lg text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:text-white"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:text-white resize-none"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
