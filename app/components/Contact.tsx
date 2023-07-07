"use client";
import React from "react";
import useContactForm from "../hooks/useContactForm ";
import sendEmail from "../sendEmail";

const Contact = () => {
  const { values, handleChange } = useContactForm();
  const setResponseMessage = (data: { isSuccessful: boolean; message: string; }) => {
    alert(data.message)
  }
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const req = await sendEmail(values.email, values.name, values.message);
      if (req.status === 250) {
        setResponseMessage({
          isSuccessful: true,
          message: "Thank you for your message.",
        });
      }
    } catch (e) {
      console.log(e);
      setResponseMessage({
        isSuccessful: false,
        message: "Oops something went wrong. Please try again.",
      });
    }

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
        <form action="#" onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="text" className="block mb-2 text-md font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={values.name}
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
              id="email"
              value={values.email}
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
              rows={2}
              value={values.message}
              onChange={handleChange}
              className="shadow-sm bg-slate-200/80 text-slate-800 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-4 dark:placeholder-slate-600/100"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="text-end">
            <button
              type="submit"
              className="py-3 px-5 text-md font-medium text-center text-black rounded-lg bg-primary-700 bg-green-400/80 sm:w-fit hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Let&#39;s Talk
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
