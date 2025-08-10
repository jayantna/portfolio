'use client';
import React, { useRef, useState } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import emailjs from '@emailjs/browser';
import siteMetadata from '@/data/siteMetadata';
// import { genPageMetadata } from 'app/seo'

// export const metadata = genPageMetadata({ title: 'Contact' })
export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const form = useRef<HTMLFormElement | null>(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send email via EmailJS
    if (process.env.NEXT_PUBLIC_ACTIVATE_SERVICE == 'true') {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          form.current as HTMLFormElement,
          process.env.NEXT_PUBLIC_USER_ID as string
        )
        .then(
          (response) => {
            console.log('Email sent successfully!', response.status, response.text);
            setStatus('Email sent successfully!');
            setFormData({ name: '', email: '', message: '' });
          },
          (error) => {
            console.error('Failed to send email:', error);
            setStatus('Failed to send email.');
          }
        );
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
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex w-2/3 flex-col items-center justify-center p-6">
            <h1 className="mb-6 text-3xl">
              Get in touch <span className="text-primary-500">...</span>
            </h1>
            <form ref={form} onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
              <Input
                name="name"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-950 sm:text-sm"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <Input
                name="email"
                type="email"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-950 sm:text-sm"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
              <Input
                name="recipient"
                className="hidden w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-950 sm:text-sm"
                value={process.env.NEXT_PUBLIC_TO_NAME}
                onChange={handleChange}
                placeholder="Recipient"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-950 sm:text-sm"
                rows={5}
                required
              />
              <Button
                className="bg-primary-600 text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:ring-offset-gray-950"
                type="submit"
              >
                Send Message
              </Button>
              {status && <p className="mt-4 text-center">{status}</p>}
            </form>
          </div>
          <blockquote className="flex w-1/3 flex-wrap text-xl text-gray-800 dark:text-gray-200">
            <div className="font-handwriting">
              “A good programmer is someone who always looks both ways before crossing a one-way
              street.” <span className="text-primary-600">— Doug Linder</span>
            </div>
            <figcaption>
              <div className="mt-8">
                <div className="text-base font-semibold text-gray-800 dark:text-gray-300">
                  Jayant Nagle
                </div>
                <div className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {siteMetadata.email}
                </div>
              </div>
            </figcaption>
          </blockquote>
        </div>
      </div>
    </>
  );
}
