'use client';
import React, { useState } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
// import { genPageMetadata } from 'app/seo'

// export const metadata = genPageMetadata({ title: 'Contact' })
export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong.');
      }
    } catch (error) {
      setStatus('An error occurred.');
    }
  };

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-6 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            Contact
          </h1>
        </div>
        <div className="justify flex flex-row flex-wrap py-6">
          <div className="flex flex-col items-center justify-center p-6">
            <h1 className="mb-6 text-3xl">
              Get in touch <span className="text-primary-500">...</span>
            </h1>
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
              <Input
                name="name"
                className=""
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <Input
                name="email"
                type="email"
                className=""
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                rows={5}
                required
              />
              <Button
                className="bg-primary-600 text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                type="submit"
              >
                Send Message
              </Button>
              {status && <p className="mt-4 text-center">{status}</p>}
            </form>
          </div>
          <div>
            “A good programmer is someone who always looks both ways before crossing a one-way
            street.” — Doug Linder
          </div>
        </div>
      </div>
    </>
  );
}
