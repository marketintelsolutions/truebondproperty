import axios from 'axios';
import React, { useState } from 'react';
// import { usePlunk } from '@plunk/client';

const Contact = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interest: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.firstName.trim()) {
            tempErrors.firstName = 'First name is required';
            isValid = false;
        }

        if (!formData.lastName.trim()) {
            tempErrors.lastName = 'Last name is required';
            isValid = false;
        }
        if (!formData.phone.trim()) {
            tempErrors.phone = 'Phone number is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            tempErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Please enter a valid email';
            isValid = false;
        }

        if (!formData.interest) {
            tempErrors.interest = 'Please select an interest';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setSubmitStatus('Please fix the errors before submitting.');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('');

        const { firstName,
            lastName,
            email,
            phone,
            interest,
            message } = formData

        const body = `
        <!DOCTYPE html>
              <html lang="en">
    
              <head>
                  <meta charset="UTF-8">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Form Submission</title>
                  <style>
                      body {
                          font-family: Arial, sans-serif;
                          line-height: 1.6;
                          color: #333;
                          padding: 20px;
                      }
    
                      .container {
                          max-width: 600px;
                          margin: auto;
                          background: #f4f4f4;
                          padding: 20px;
                          border-radius: 8px;
                      }
    
                      h2 {
                          color: #275e8f;
                      }
    
                      .data-row {
                          margin-bottom: 10px;
                          padding: 10px;
                          background: #fff;
                          border-radius: 5px;
                          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                      }
    
                      .label {
                          font-weight: bold;
                          color: #555;
                      }
    
                      .value {
                          margin-left: 10px;
                      }
    
                      .footer {
                          margin-top: 20px;
                          text-align: center;
                          font-size: 12px;
                          color: #888;
                      }
                  </style>
              </head>
    
              <body>
                  <div class="container">
                      <h2>New Form Submission</h2>
                      <div class="data-row">
                          <span class="label">Name:</span> <span class="value">${firstName} ${lastName}</span>
                      </div>
                      <div class="data-row">
                          <span class="label">Email:</span> <span class="value">${email}</span>
                      </div>
                      <div class="data-row">
                          <span class="label">Phone:</span> <span class="value">${phone}</span>
                      </div>
                      <div class="data-row">
                          <span class="label">Interest:</span> <span class="value">${interest}</span>
                      </div>
                      <div class="data-row">
                          <span class="label">Message:</span>
                          <div class="value">${message}</div>
                      </div>
                      <!-- Add more rows as needed for each form field -->
                      <div class="footer">
                          This message was sent from the Contact form submission on your website.
                      </div>
                  </div>
              </body>
    
              </html>
      `;

        try {
            const resp = await axios.post(
                "https://api.useplunk.com/v1/send",
                {
                    subject: "Contact Form Submission",
                    to: "truebondproperty@gmail.com",
                    body,
                },
                {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_USE_PLUNK_TOKEN
                            }`,
                    },
                }
            );

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                interest: '',
                message: ''
            });
            setSubmitStatus('Thank you for your submission!');
        } catch (error) {
            console.log(error);
            setSubmitStatus('There was an error submitting the form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='bg-[#1d2d42] text-white py-20'>
            <div className='w-full mx-auto max-w-[1100px] flex flex-wrap gap-20 lg:px-0 px-10 justify-between'>
                <div>
                    <h2 className='text-lg font-thin tracking-[4px]'>
                        FIND YOUR <br /> NEXT HOME</h2>
                    <p className='max-w-[400px] text-base mt-20 leading-[35px] font-extralight tracking-[2px]'>
                        At TrueBond Properties Limited, we specialize in the comprehensive management of residential, commercial, and industrial properties across Nigeria. With a deep commitment to excellence, customer satisfaction, and operational efficiency, we provide a range of property management solutions designed to maximize the value of your investments
                    </p>
                </div>
                <div className='w-1/2'>
                    <h2 className='text-lg font-thin tracking-[4px]'>CONTACT US</h2>
                    <form onSubmit={handleSubmit} className='mt-20 flex flex-col gap-10'>
                        <div className='flex gap-6'>
                            <div className='flex flex-col gap-3 w-full border-b'>
                                <label htmlFor="firstName">First Name *</label>
                                <input
                                    name='firstName'
                                    type="text"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className='bg-transparent focus:outline-none'
                                />
                                {errors.firstName && (
                                    <span className='text-red-500 text-sm'>{errors.firstName}</span>
                                )}
                            </div>
                            <div className='flex flex-col gap-3 w-full border-b'>
                                <label htmlFor="lastName">Last Name *</label>
                                <input
                                    name='lastName'
                                    type="text"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className='bg-transparent focus:outline-none'
                                />
                                {errors.lastName && (
                                    <span className='text-red-500 text-sm'>{errors.lastName}</span>
                                )}
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 w-full border-b'>
                            <label htmlFor="email">Email *</label>
                            <input
                                name='email'
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className='bg-transparent focus:outline-none'
                            />
                            {errors.email && (
                                <span className='text-red-500 text-sm'>{errors.email}</span>
                            )}
                        </div>
                        <div className='flex flex-col gap-3 w-full border-b'>
                            <label htmlFor="phone">Phone *</label>
                            <input
                                name='phone'
                                type="number"
                                value={formData.phone}
                                onChange={handleChange}
                                className='bg-transparent focus:outline-none'
                            />
                            {errors.phone && (
                                <span className='text-red-500 text-sm'>{errors.phone}</span>
                            )}
                        </div>
                        <div>
                            <label>Interested in</label>
                            <div className='flex flex-wrap w-full gap-8 md:gap-14 lg:gap-24 mt-10'>
                                {['Buy', 'Rent', 'Other'].map((option) => (
                                    <div key={option} className='flex items-center gap-4'>
                                        <input
                                            type="radio"
                                            name="interest"
                                            value={option}
                                            checked={formData.interest === option}
                                            onChange={handleChange}
                                            id={`interest-${option.toLowerCase()}`}
                                        />
                                        <span className='text-base font-extralight tracking-[2px]'>{option}</span>
                                    </div>
                                ))}
                            </div>
                            {errors.interest && (
                                <span className='text-red-500 text-sm block mt-2'>{errors.interest}</span>
                            )}
                        </div>
                        <div className='flex flex-col gap-3 w-full border-b'>
                            <label htmlFor="message">Message</label>
                            <textarea
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                className='bg-transparent h-[100px] resize-none focus:outline-none'
                            />
                        </div>

                        {submitStatus && (
                            <div className={`text-sm ${submitStatus.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
                                {submitStatus}
                            </div>
                        )}

                        <button
                            type='submit'
                            disabled={isSubmitting}
                            className='bg-primaryRed border border-primaryRed hover:bg-white hover:text-primaryRed px-5 py-3 w-[170px] text-[19px] mt-4 text-white disabled:opacity-50'
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;