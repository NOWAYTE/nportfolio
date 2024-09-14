"use client";
import React, { useState } from "react";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Basic validation (optional)
    if (!name.value || !email.value || !message.value) {
      console.error("All fields are required");
      return;
    }

    // Format the email body
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${name.value}\nEmail: ${email.value}\nMessage: ${message.value}`
    );

    // Construct the mailto URL
    const mailtoUrl = `mailto:example@example.com?subject=${subject}&body=${body}`;

    // Open the default email client
    window.location.href = mailtoUrl;
  };

  return (
    <form
      className="form w-full max-w-lg mx-auto p-6 rounded-md shadow-md bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-neutral-100 dark:bg-neutral-700 border border-neutral-400 dark:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary px-3 py-2 rounded-md text-sm text-neutral-700 dark:text-neutral-300 w-full"
          value={formData.name.value}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: {
                value: e.target.value,
                error: "",
              },
            })
          }
        />
        <input
          type="email"
          placeholder="Your Email"
          className="bg-neutral-100 dark:bg-neutral-700 border border-neutral-400 dark:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary px-3 py-2 rounded-md text-sm text-neutral-700 dark:text-neutral-300 w-full"
          value={formData.email.value}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: {
                value: e.target.value,
                error: "",
              },
            })
          }
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={6}
          className="bg-neutral-100 dark:bg-neutral-700 border border-neutral-400 dark:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary px-3 py-2 mt-3 rounded-md text-sm text-neutral-700 dark:text-neutral-300 w-full"
          value={formData.message.value}
          onChange={(e) =>
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            })
          }
        />
      </div>
      <button
        className="w-full px-3 py-2 mt-4 bg-neutral-200 dark:bg-neutral-600 border border-neutral-400 dark:border-neutral-500 rounded-md font-medium text-neutral-600 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
