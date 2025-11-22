import React, { useState } from "react";
import "../styles/Contact.css";
import Header from "./Header";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    // Clear form fields
    setFormData({ name: "", email: "", message: "" });

    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
    <Header />
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-subtext">
        Have questions, suggestions, or feedback? We'd love to hear from you!
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Write your message..."
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>

      {showPopup && (
        <div className="popup">
          <p>Thank you! We'll get back to you soon.</p>
        </div>
      )}
    </div>
    </>
  );
}

export default Contact;