'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setStatus({
      type: 'success',
      message: 'Message Sent Successfully!',
    });
    setFormData({
      fullname: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="contact-us-form">
      {/* Section Title Start */}
      <div className="section-title">
        <h3 className="wow fadeInUp">Contact form</h3>
        <h2 className="text-anime-style-2" data-cursor="-opaque">Get in touch with us.</h2>
      </div>
      {/* Section Title End */}

      <form onSubmit={handleSubmit} className="wow fadeInUp" data-wow-delay="0.5s">
        <div className="row">
          <div className="form-group col-md-4 mb-4">
            <label htmlFor="fullname">full name</label>
            <input
              type="text"
              name="fullname"
              className="form-control"
              id="fullname"
              placeholder="Enter Your Name"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group col-md-4 mb-4">
            <label htmlFor="email">your email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group col-md-4 mb-4">
            <label htmlFor="phone">phone number</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              id="phone"
              placeholder="Enter Your Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group col-md-12 mb-4">
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              className="form-control"
              id="message"
              rows={7}
              placeholder="write Message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="col-lg-12">
            <div className="contact-form-btn">
              <button type="submit" className="btn-default">submit now</button>
              {status.type === 'success' && (
                <div id="msgSubmit" className="h3 text-success mt-3">
                  {status.message}
                </div>
              )}
              {status.type === 'error' && (
                <div id="msgSubmit" className="h3 text-danger mt-3">
                  {status.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
