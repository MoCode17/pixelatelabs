"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, CheckCircle, Users } from "lucide-react";
import icon from "@/public/images/iconDark.svg";

const CALENDLY_URL = "https://calendly.com/mbabs3000/website-strategy-call";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

type FormState = "idle" | "loading" | "success" | "error";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Load Calendly assets
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const handleCalendlyOpen = () => {
    if (typeof window !== "undefined" && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg("Please fill in all fields.");
      setFormState("error");
      return;
    }
    setFormState("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setFormState("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
      setFormState("error");
    }
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUpVariants} className="mb-4">
            <span className="inline-flex items-center text-lg font-bold tracking-wider text-brand uppercase">
              <Image src={icon} alt="Logo" className="w-6 h-6 mr-3" />
              LET&apos;S WORK TOGETHER
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUpVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-avantt tracking-tight text-gray-900 mb-4"
          >
            Two ways to get started
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Send us a message and we&apos;ll get back to you within 24 hours, or
            jump straight into a call if you&apos;re ready to talk.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Card 1 — Send a Message */}
          <motion.div
            variants={fadeInUpVariants}
            className="bg-gray-50 rounded-2xl border border-gray-200 p-8 sm:p-10"
          >
            <h3 className="text-2xl font-bold font-avantt text-gray-900 mb-2">
              Send a message
            </h3>
            <p className="text-gray-600 mb-8 text-sm">
              You can attach files when we reply.
            </p>

            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  Message sent!
                </h4>
                <p className="text-gray-600 text-sm max-w-xs">
                  We&apos;ll be in touch within 24 hours. Check your inbox.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-2 text-sm text-brand underline underline-offset-2 hover:text-brand-dark transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@yourbusiness.com.au"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Tell me about your project
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="What does your business do? What are you looking to build?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors text-sm resize-none"
                  />
                </div>

                {formState === "error" && (
                  <p className="text-red-500 text-sm">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full py-3.5 bg-brand hover:bg-brand-dark text-white font-semibold rounded-xl transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {formState === "loading" ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Card 2 — Book a Call */}
          <motion.div
            variants={fadeInUpVariants}
            className="bg-midnight rounded-2xl p-8 sm:p-10 flex flex-col"
          >
            <h3 className="text-2xl font-bold font-avantt text-snow mb-2">
              Prefer to talk it through?
            </h3>
            <p className="text-gray-400 text-sm mb-8">
              Jump on a quick call — no pitch, just a conversation about your
              project.
            </p>

            <ul className="space-y-4 mb-10 flex-1">
              {[
                { icon: Clock, text: "30-minute discovery call" },
                { icon: CheckCircle, text: "No commitment required" },
                { icon: Users, text: "We'll map out your project together" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-brand" />
                  </div>
                  <span className="text-gray-300 text-sm">{text}</span>
                </li>
              ))}
            </ul>

            <div>
              <button
                onClick={handleCalendlyOpen}
                className="w-full py-3.5 bg-brand hover:bg-brand-dark text-white font-semibold rounded-xl transition-colors duration-300"
              >
                Book a Free Call
              </button>
              <p className="text-center text-gray-500 text-xs font-space-mono mt-3">
                Usually booked within 48 hrs
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
