"use client";
import React from "react";
import emailjs from '@emailjs/browser'
import { useState,useRef } from "react";

const Contact = () => {

   const formRef = useRef(null);
   const [form, setForm] = useState({
     name: "",
     email: "",
     message: "",
   });

    const [loading, setLoading] = useState(false);  

    const handleChange = (e: { target: any; }) => {
      const { target } = e;
      const { name, value } = target;

      setForm({
        ...form,
        [name]: value,
      });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      setLoading(true);
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,

          {
            from_name: form.name,
            to_name: "Atharva Jadhav",
            from_email: form.email,
            to_email: process.env.NEXT_PUBLIC_EMAIL_ID,
            message: form.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");

            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);

            alert("Ahh, something went wrong. Please try again.");
          }
        );
    };

  return (
    <section id="contact">
      <div className="mt-12 py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
          Contact Me
        </h2>
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        <p className="mb-6 lg:mb-10 font-light text-center sm:text-xl">
          Ready to bring your project to life? Let&#39;s connect!
        </p>
        <form
          action="#"
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div>
            <label htmlFor="text" className="block mb-2 text-md font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              className="shadow-sm bg-slate-200/80 text-slate-800 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-4 dark:placeholder-slate-600/100"
              placeholder="Atharva Jadhav"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-md font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              className="shadow-sm bg-slate-200/80 text-slate-800 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-4 dark:placeholder-slate-600/100"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-md font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={2}
              value={form.message}
              onChange={handleChange}
              className="shadow-sm bg-slate-200/80 text-slate-800 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-4 dark:placeholder-slate-600/100"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="text-end">
            <button
              type="submit"
              className="py-3 px-5 text-md font-bold hover:text-black text-center rounded-lg bg-primary-700 border-y-2 border-x-2 border-green-500 hover:translate-x-2 sm:w-fit hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {loading===false ? `Send Email`:'Sending'}
              {/* Let&#39;s Talk */}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
