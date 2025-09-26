import {useRef} from  "react"
import emailjs from '@emailjs/browser'
//import {mail} from "../assets/contact-email-mail-svgrepo-com.svg"



export  default function Contact(){

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_da7iwza', 'template_zb5hcbm', form.current, 'Zmw_EZuHcsFJGKJvP')
      .then((result) => {
        window.location.reload();
        alert("Mail sent successfully!");
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    

    return(
       <div className="contact">
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src="" alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Computer Science & Engineering graduate (AKGEC, 2025) with full-stack expertise in Node.js, Go, MongoDB, PostgreSQL, and React, passionate about building scalable, user-centric applications and seeking software engineering opportunities.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src="phone.svg" alt="phone" /><p>(+91)9919307232</p>    
                    </div>
                    <div className="contact-detail">
                        <img src="email.svg" alt="email" /><p>shashwat9007@gmail.com</p>   
                    </div>
                    <div className="contact-detail">
                       <img src="location.svg" alt="location" /><p>Block D ,Sector 44, Noida, Uttar Pradesh</p>   
                    </div>
                </div>
            </div>
            <form ref={form} onSubmit={sendEmail}  className="contact-right">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" placeholder="Enter your name"  required/>
                <label htmlFor="email">Your Email</label>
                <input type="text" name="email" placeholder="Enter your email"  required/>
                <label htmlFor="message">Your Message</label>
                <textarea row="8" name="message" placeholder="Write your message"  required/>
                <button type="submit" className="contact-submit">Submit</button>
            </form>
        </div>

       </div>
    );
}