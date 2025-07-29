import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: 'Sending...', type: 'sending' });
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const response = await axios.post(`${apiUrl}/contact`, formData);
      setStatus({ message: "Message sent successfully!", type: 'success' });
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus({ message: '', type: '' });
      }, 5000);

    } catch (error) {
      setStatus({ message: 'Failed to send message. Please try again.', type: 'error' });
      console.error(error);
      
      setTimeout(() => {
        setStatus({ message: '', type: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-subtitle">Have a question or want to work together? Leave a message!</p>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
      {status.message && <p className={`status-message ${status.type}`}>{status.message}</p>}
    </section>
  );
};

export default Contact;