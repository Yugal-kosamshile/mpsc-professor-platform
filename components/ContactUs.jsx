import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs() {
  const formRef = useRef(); // Required by EmailJS to grab the form data

  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State to handle the "Sending..." button UI
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // The Active Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these three strings with your actual IDs from EmailJS!
    const SERVICE_ID = 'service_nwtxasa';
    const TEMPLATE_ID = 'template_ibtu0i5';
    const PUBLIC_KEY = 'axEtz_W4eT-Gw166A';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          alert('Thank you for reaching out! Your message has been sent successfully.');
          setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      }, (error) => {
          console.log(error.text);
          alert('Oops! Something went wrong. Please try emailing us directly.');
      })
      .finally(() => {
          setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="container py-5" style={{ scrollMarginTop: "80px" }}>
      
      {/* Section Header */}
      <div className="mb-5 text-center">
        <h2 className="h3 fw-bold text-dark d-flex align-items-center justify-content-center gap-2 mb-2">
          <span className="text-primary fs-4">✉️</span> Contact Us
        </h2>
        <p className="text-secondary">Have a question about the syllabus or need guidance? We're here to help.</p>
      </div>

      <div className="row g-5">
        
        {/* Left Column: Contact Information */}
        <div className="col-12 col-lg-5">
          <div className="bg-primary bg-opacity-10 rounded-4 p-4 p-md-5 h-100 border border-primary border-opacity-25">
            <h4 className="fw-bold text-dark mb-4">Get in Touch</h4>
            <p className="text-secondary mb-5">
              Fill out the form to send us a direct message, or reach out through our official channels for faster updates and daily MCQs.
            </p>

            <div className="d-flex flex-column gap-4">
              
              {/* WhatsApp Contact */}
              <div className="d-flex align-items-center gap-3">
                <div className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow-sm text-success" style={{ width: '50px', height: '50px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">WhatsApp Channel</h6>
                  <a href="https://chat.whatsapp.com/LQb5lDWDNY6D0QNFUIt6mi?mode=gi_t" target="_blank" rel="noopener noreferrer" className="text-secondary small text-decoration-none hover-primary">Join for daily updates</a>
                </div>
              </div>

              {/* Telegram Contact */}
              <div className="d-flex align-items-center gap-3">
                <div className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow-sm text-info" style={{ width: '50px', height: '50px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.297.26.008.546-.104.859-.336.228-.167.37-.254.427-.254.058 0 .145.075.261.18l.061.055c.34.309.61.554.912.753.308.203.626.398.966.611.345.215.688.431.986.602.296.169.569.255.823.218.29-.042.535-.308.73-.787.21-5.186.27-5.54.27-5.69 0-.056-.009-.091-.027-.103-.02-.014-.055-.02-.108-.02-.057 0-.173.023-.348.082l-3.692 1.458z"/>
                  </svg>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Telegram Community</h6>
                  <a href="https://t.me/l1G6wrOwe0UxMzY1" target="_blank" rel="noopener noreferrer" className="text-secondary small text-decoration-none hover-primary">Get free PDF notes & MCQs</a>
                </div>
              </div>

              {/* Email Contact */}
              <div className="d-flex align-items-center gap-3">
                <div className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow-sm text-primary" style={{ width: '50px', height: '50px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                  </svg>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Email Us</h6>
                  <a href="mailto:contact@mpscprofessor.com" className="text-secondary small text-decoration-none hover-primary">contact@mpscprofessor.com</a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="col-12 col-lg-7">
          <div className="bg-white rounded-4 shadow-sm p-4 p-md-5 border h-100">
            <h4 className="fw-bold text-dark mb-4">Send us a Message</h4>
            
            {/* Added ref={formRef} here! */}
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="row g-3">
                
                {/* Name Input */}
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label fw-medium text-dark small">Your Name</label>
                  <input 
                    type="text" 
                    className="form-control bg-light border-0 py-2" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name" 
                    required 
                  />
                </div>

                {/* Email Input */}
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label fw-medium text-dark small">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control bg-light border-0 py-2" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com" 
                    required 
                  />
                </div>

                {/* Subject Input */}
                <div className="col-12">
                  <label htmlFor="subject" className="form-label fw-medium text-dark small">Subject</label>
                  <input 
                    type="text" 
                    className="form-control bg-light border-0 py-2" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?" 
                    required 
                  />
                </div>

                {/* Message Input */}
                <div className="col-12">
                  <label htmlFor="message" className="form-label fw-medium text-dark small">Message</label>
                  <textarea 
                    className="form-control bg-light border-0" 
                    id="message" 
                    name="message"
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="col-12 mt-4">
                  <button 
                    type="submit" 
                    className="btn btn-primary px-5 py-2 fw-medium w-100 shadow-sm"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactUs;