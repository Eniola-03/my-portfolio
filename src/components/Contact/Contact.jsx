import {React, useRef} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();


    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    emailjs
      .sendForm('service_9vb68gh', 'template_v8arn3r', form.current, {
        publicKey: 'bw8ZjehHSx62xeu8f',
      })
      .then(
        () => {
          alert('Email submitted successfully!');
          e.target.reset();
        },
        (error) => {
          alert('Error submitting email. Please try again later.');
          console.error('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contact' className='contact-section'>
      <div className='container pb-5'>
        <div className='row contact-row'>
          <div className='col-12 col-md-6'>
            <h2 className='text-10 mb-4 text-center connect'>Let's Connect</h2>
            <p className='text-5 mb-4'>I would love to hear about your project ideas and challenges. Feel free to reach out, and let's create something amazing together!</p>
            <div className='contact-info'>
              <h3 className='contact-heading text-5'>Phone:</h3>
              <p className='text-4'>08103866040</p>
            </div>
            <ul className='socials mt-4'>
              <li><a href='https://instagram.com' target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href='https://whatsapp.com' target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-whatsapp"></i></a></li>
              <li><a href='https://facebook.com' target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href='https://twitter.com' target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-twitter"></i></a></li>
            </ul>
          </div>
          <div className='col-12 col-md-6'>
            <h2 className='text-10 mb-4 text-center quote'>Get a Quote</h2>
            <form ref={form} onSubmit={sendEmail} className='contact-form'>
                <label htmlFor="user_name">Name:</label>
                <input type="text" id="user_name" name="user_name" placeholder="Enter your name" />
                <label htmlFor="user_email">Email:</label>
                <input type="email" id="user_email" name="user_email" placeholder="Enter your email" />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Write your message"></textarea>
                <button type="submit" className='btn btn-dark btn-block'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact