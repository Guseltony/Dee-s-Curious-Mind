"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../shared/Section";
import SectionHeading from "../shared/SectionHeading";

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  childAge: z.string().min(1, "Please specify your child's age or age group."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export default function ContactPreviewSection() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  return (
    <Section background="light" id="contact-preview">
      {/* Title */}
      <SectionHeading
        title="Get In Touch"
        subtitle="Have questions about spaces, schedules, or fees? Fill out the form or reach out directly to coordinate a visit."
        badge="Enquiries"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Info & Map */}
        <div className="lg:col-span-5 space-y-8 text-left">
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-text-primary font-poppins">
              Contact Information
            </h3>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary text-sm font-poppins">Phone Number</h4>
                  <a href="tel:+441234567890" className="text-text-secondary hover:text-primary transition-colors text-sm font-inter">
                    +44 123 456 7890
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary text-sm font-poppins">Email Address</h4>
                  <a href="mailto:info@deescuriousminds.co.uk" className="text-text-secondary hover:text-primary transition-colors text-sm font-inter">
                    info@deescuriousminds.co.uk
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary text-sm font-poppins">Location</h4>
                  <p className="text-text-secondary text-sm font-inter">
                    123 Curious Lane, London, UK
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary text-sm font-poppins">Hours of Operation</h4>
                  <p className="text-text-secondary text-sm font-inter">
                    Mon – Fri: 7:30 AM – 6:00 PM <br />
                    Sat – Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-4">
            <h4 className="font-bold text-text-primary text-sm font-poppins">Our Location Area</h4>
            <div className="relative h-60 w-full rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-slate-200 flex items-center justify-center">
              {/* Fake Map Elements */}
              <div className="absolute inset-0 bg-slate-100/90 grid grid-cols-6 grid-rows-6 opacity-30 pointer-events-none">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="border border-slate-300/40" />
                ))}
              </div>
              <div className="absolute top-1/2 left-1/3 w-32 h-6 bg-slate-300/40 rounded-full rotate-[15deg] pointer-events-none" />
              <div className="absolute top-1/3 left-1/2 w-48 h-8 bg-slate-300/40 rounded-full rotate-[-30deg] pointer-events-none" />
              
              {/* Map pin */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 flex flex-col items-center gap-1 bg-white p-3 rounded-xl shadow-md border border-slate-100"
              >
                <div className="p-1.5 bg-primary text-white rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold text-text-primary">Dee's Curious Minds</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm relative">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 text-left"
              >
                <h3 className="text-xl font-bold text-text-primary font-poppins">
                  Enquiry Form
                </h3>

                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-text-secondary font-poppins">
                    Parent / Guardian Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    placeholder="Denise Smith"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-inter transition-all focus:outline-none focus:ring-2 ${
                      errors.name
                        ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                        : "border-slate-200 focus:ring-primary/20 focus:border-primary"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-text-secondary font-poppins">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="denise@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-inter transition-all focus:outline-none focus:ring-2 ${
                        errors.email
                          ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                          : "border-slate-200 focus:ring-primary/20 focus:border-primary"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-text-secondary font-poppins">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="07123 456789"
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-inter transition-all focus:outline-none focus:ring-2 ${
                        errors.phone
                          ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                          : "border-slate-200 focus:ring-primary/20 focus:border-primary"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Child Age */}
                <div className="space-y-2">
                  <label htmlFor="childAge" className="text-xs font-bold uppercase tracking-wider text-text-secondary font-poppins">
                    Child's Age / Age Group
                  </label>
                  <input
                    id="childAge"
                    type="text"
                    {...register("childAge")}
                    placeholder="e.g. 2 years old, or Toddler"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-inter transition-all focus:outline-none focus:ring-2 ${
                      errors.childAge
                        ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                        : "border-slate-200 focus:ring-primary/20 focus:border-primary"
                    }`}
                  />
                  {errors.childAge && (
                    <p className="text-xs text-red-600 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.childAge.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-text-secondary font-poppins">
                    Tell us about your requirements
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    placeholder="Include details like desired start dates, part-time or full-time request..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-inter transition-all focus:outline-none focus:ring-2 ${
                      errors.message
                        ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                        : "border-slate-200 focus:ring-primary/20 focus:border-primary"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover disabled:bg-slate-300 text-white font-bold py-3.5 rounded-xl shadow-md transition-all duration-200 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-5"
              >
                <div className="p-4 bg-green-50 text-green-600 rounded-full">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary font-poppins">
                  Enquiry Submitted!
                </h3>
                <p className="text-text-secondary text-sm md:text-base font-inter max-w-sm leading-relaxed">
                  Thank you for reaching out! Denise will read your message and respond via email or phone within 24 hours to coordinate next steps.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-all shadow-sm"
                >
                  Send Another Enquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
