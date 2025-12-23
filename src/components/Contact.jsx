"use client";

import { useState } from "react";
import Button from "./Button";
import BackgroundPaths from "./BackgroundPaths";
import emailjs from "@emailjs/browser";

export default function ContactBox() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        form,
        process.env.EMAILJS_PUBLIC_KEY
      );
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setSuccess(false);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <BackgroundPaths />
      <div className="absolute w-[30vw] h-[30vw] rounded-full bg-linear-to-bl from-transparent via-[#5c92ff] to-transparent opacity-40 blur-3xl animate-pulse" />
      <div className="absolute -right-30 w-[80vw] h-[80vw] rounded-full bg-linear-to-l from-[#5c92ff]/40 via-transparent to-transparent opacity-40 blur-3xl" />
      <div className="absolute -left-30 w-[70vw] h-[70vw] rounded-full bg-linear-to-r from-[#5c92ff]/40 via-transparent to-transparent opacity-40 blur-3xl" />

      <div className="relative w-[80vw] z-10">
        <div className="backdrop-blur-sm bg-linear-to-b from-white/5 via-black/10 to-white/5 border border-white/20 rounded-2xl p-8 space-y-8">
          <h2
            className="text-center text-white tracking-tight"
            style={{
              fontFamily: "Audiowide, sans-serif",
              fontWeight: 400,
              fontSize: "40px",
            }}
          >
            Contact Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white/80"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/80"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white/80"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write something..."
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent resize-none transition-all"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full py-3.5 mt-2"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}
            </Button>

            {success === true && (
              <p className="text-green-400 mt-2">Message sent successfully!</p>
            )}
            {success === false && (
              <p className="text-red-400 mt-2">Failed to send message.</p>
            )}
          </form>
        </div>
      </div>

      <link
        href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
