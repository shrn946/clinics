'use client';

import React, { useState } from 'react';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    record: '',
    date: '',
    time: '',
    reason: 'Routine Checkup',
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, reason: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking process
    setStatus({
      type: 'success',
      message: 'Appointment Request Sent Successfully!',
    });
    setFormData({
      name: '',
      email: '',
      location: '',
      record: '',
      date: '',
      time: '',
      reason: 'Routine Checkup',
    });
  };

  return (
    <div className="appointment-form wow fadeInUp">
      <div className="appointment-form-content">
        <p>Fill out the form below to request your dental appointment. We'll confirm your time and send you a reminder.</p>
      </div>
      {/* Form Start */}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-lg-4 col-md-6 mb-4">
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group col-lg-4 col-md-6 mb-4">
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

          <div className="form-group col-lg-4 col-md-6 mb-4">
            <input
              type="text"
              name="location"
              className="form-control"
              id="location"
              placeholder="Enter Your Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group col-lg-4 col-md-6 mb-4">
            <input
              type="text"
              name="record"
              className="form-control"
              id="record"
              placeholder="Medical Record No."
              value={formData.record}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group col-lg-4 col-md-6 mb-4">
            <input
              type="date"
              name="date"
              className="form-control"
              id="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group col-lg-4 col-md-6 mb-4">
            <input
              type="time"
              name="time"
              className="form-control"
              id="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="appointment-form-title col-12 mt-2">
            <h3>Reason For Visit</h3>
          </div>

          <div className="appointment-reason col-12 mb-4">
            <div className="reason-box">
              <input
                type="radio"
                id="routine"
                name="reason"
                value="Routine Checkup"
                checked={formData.reason === 'Routine Checkup'}
                onChange={handleRadioChange}
              />
              <label htmlFor="routine">Routine Checkup</label>
            </div>
            <div className="reason-box">
              <input
                type="radio"
                id="new"
                name="reason"
                value="New Patient Visit"
                checked={formData.reason === 'New Patient Visit'}
                onChange={handleRadioChange}
              />
              <label htmlFor="new">New Patient Visit</label>
            </div>
            <div className="reason-box">
              <input
                type="radio"
                id="specific"
                name="reason"
                value="Specific Concern"
                checked={formData.reason === 'Specific Concern'}
                onChange={handleRadioChange}
              />
              <label htmlFor="specific">Specific Concern</label>
            </div>
          </div>

          <div className="col-md-12">
            <button type="submit" className="btn-default">book appointment</button>
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
      </form>
    </div>
  );
}
