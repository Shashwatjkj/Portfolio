import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const formRef = useRef(null);
 
const sendEmail = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    const visitorIP = data.ip;

    const formData = new FormData(formRef.current);
    
    const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      visitor_ip: visitorIP,
      // Create a formatted HTML message
      html_message: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h3>New Contact Form Submission</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 10px 0;">
            <strong>Message:</strong><br>
            ${formData.get('message').replace(/\n/g, '<br>')}
          </div>
          <div style="background-color: #e8f4f8; padding: 10px; border-radius: 5px; font-size: 12px; color: #666; margin-top: 20px;">
            <strong>Technical Information:</strong><br>
            Visitor's IP: ${visitorIP}<br>
            Submitted: ${new Date().toLocaleString()}
          </div>
        </div>
      `
    };
    console.log(templateParams,'hi')
    await emailjs.send(
      "service_da7iwza",
      "template_zb5hcbm",
      templateParams,
      "Zmw_EZuHcsFJGKJvP"
    );

    alert("Mail sent successfully!");
  } catch (error) {
    alert("Failed to send email. Please try again.");
    console.log(error)
  }
};

  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Computer Science & Engineering graduate (AKGEC, 2025) with
            full-stack expertise in Node.js, Go, MongoDB, PostgreSQL, and
            React, passionate about building scalable, user-centric
            applications and seeking software engineering opportunities.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src="phone.svg" alt="phone" />
              <p>(+91)9919307232</p>
            </div>
            <div className="contact-detail">
              <img src="email.svg" alt="email" />
              <p>shashwat9007@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src="location.svg" alt="location" />
              <p>Block D, Sector 44, Noida, Uttar Pradesh</p>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Write your message"
             required
          />
          <button type="submit" className="contact-submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
