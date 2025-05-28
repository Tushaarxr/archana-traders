// src/pages/ContactPage/index.js
import React, { useState } from 'react';
import {
  ContactContainer,
  ContactHeader,
  ContactForm,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
  ContactInfoContainer,
  InfoItem,
  InfoIcon,
  InfoText,
  MapContainer,
  ContactGrid
} from './ContactPageElements';
import SEO from '../../components/SEO';
import { WhatsAppButton } from '../../components/Button';

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  // Form submission status
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    // Create FormData object (Web3Forms requires FormData, not JSON)
    const formDataToSend = new FormData();
    
    // Add form fields
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("message", formData.message);
    
    // Add Web3Forms required fields with your access key
    formDataToSend.append("access_key", "7fea1f32-4675-4164-abf9-41a5971baef7");
    formDataToSend.append("subject", "New Contact Form Submission from Achana Traders Website");
    formDataToSend.append("from_name", "Achana Traders Website");
    formDataToSend.append("replyto", formData.email);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "Thank you! We'll contact you shortly." }
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
          });
        }, 5000);
      } else {
        console.log("Error", result);
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: result.message || "Something went wrong. Please try again." }
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "Network error. Please check your connection and try again." }
      });
    }
  };

  // Function to generate WhatsApp link with predefined message
  const getWhatsAppLink = () => {
    const message = `Hello, I'm interested in your steel products. Can you provide more information?`;
    return `https://wa.me/919827143858?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Achana Traders for inquiries about our steel products. Contact us via phone, email, or visit our location."
      />
      
      <ContactContainer>
        <div className="container">
          <ContactHeader>
            <h2>Contact Us</h2>
            <p>
              Have questions about our products? Need a quote? Reach out to us through any of 
              the following channels, and we'll get back to you as soon as possible.
            </p>
          </ContactHeader>

          <ContactGrid>
            <ContactForm onSubmit={handleSubmit}>
              <h3>Send us a message</h3>
              
              <FormGroup>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your Phone Number"
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                  rows="5"
                />
              </FormGroup>
              
              <SubmitButton 
                type="submit" 
                disabled={status.submitting}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>
              
              {status.info.msg && (
                <div className={`form-status ${status.info.error ? 'error' : 'success'}`}>
                  {status.info.msg}
                </div>
              )}
            </ContactForm>

            <ContactInfoContainer>
              <h3>Get in touch</h3>
              
              <InfoItem>
                <InfoIcon>📞</InfoIcon>
                <InfoText>
                  <a href="tel:+919827143858">+91 98271 43858</a>
                </InfoText>
              </InfoItem>
              
              <InfoItem>
                <InfoIcon>✉️</InfoIcon>
                <InfoText>
                  <a href="mailto:archanatraders1@gmail.com">archanatraders1@gmail.com</a>
                </InfoText>
              </InfoItem>
              
              <InfoItem>
                <InfoIcon>📍</InfoIcon>
                <InfoText>
                  Achana traders jute mill road beside petrol pump
                </InfoText>
              </InfoItem>
              
              <InfoItem>
                <InfoIcon>🕒</InfoIcon>
                <InfoText>
                  Monday to Saturday: 9:00 AM - 7:00 PM<br />
                  Sunday: Closed
                </InfoText>
              </InfoItem>
              
              <WhatsAppButton 
                href={getWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ marginTop: '20px' }}
              >
                Chat on WhatsApp
              </WhatsAppButton>
              
              <MapContainer>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="250" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Achana Traders Location"
                />
              </MapContainer>
            </ContactInfoContainer>
          </ContactGrid>
        </div>
      </ContactContainer>
    </>
  );
};

export default ContactPage;
