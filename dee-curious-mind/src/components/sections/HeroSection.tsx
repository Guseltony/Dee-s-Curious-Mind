"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, Heart, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 md:pb-24 px-6 md:px-8 lg:px-12 w-full bg-gradient-to-br from-bg-light via-white to-primary/5 overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 translate-x-20 -translate-y-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-20 translate-y-20" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Text Content (Left Column) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 space-y-6 md:space-y-8 text-left"
        >
          {/* Subtle Badge */}
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide uppercase">
            <Heart className="w-3.5 h-3.5 fill-current" />
            Welcoming children aged 6 months – 5 years
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight font-poppins">
            A Nurturing Space Where <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Curious Minds
            </span>{" "}
            Grow & Play
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-text-secondary font-inter max-w-xl leading-relaxed">
            Dee's Curious Minds childcare offers a loving, safe, and engaging home-from-home childcare service in London. We focus on personal attention, developmental milestones, and learning through creative play.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-7 py-3.5 rounded-xl font-bold tracking-wide shadow-md hover:shadow-lg transition-all hover:translate-y-[-2px]"
            >
              Enquire Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border-2 border-slate-200 hover:border-primary/30 bg-white text-text-primary hover:bg-slate-50 px-7 py-3.5 rounded-xl font-bold tracking-wide transition-all hover:translate-y-[-2px]"
            >
              Our Services
            </Link>
          </div>
        </motion.div>

        {/* Overlapping Image Composition & Floating Cards (Right Column) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 relative flex justify-center items-center h-[350px] sm:h-[450px] md:h-[500px]"
        >
          {/* Main Image Frame (Playroom) */}
          <div className="relative w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-[-2deg] hover:rotate-0 transition-transform duration-500 z-10">
            <Image
              src="/images/hero_childcare.png"
              alt="Dee's Curious Minds Playroom"
              fill
              priority
              sizes="(max-w-7xl) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Overlapping Secondary Image Frame (Activity) */}
          <div className="absolute left-0 bottom-4 w-2/5 h-2/5 rounded-2xl overflow-hidden shadow-lg border-4 border-white rotate-[6deg] hover:rotate-0 transition-transform duration-500 z-20 hidden sm:block">
            <Image
              src="/images/learning_play.png"
              alt="Child learning through play"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>

          {/* Floating Card 1: Safe Environment */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 left-0 sm:left-4 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-md border border-slate-100 flex items-center gap-2.5 z-30"
          >
            <div className="p-2 bg-green-50 text-green-600 rounded-xl">
              <Shield className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-text-primary">Safe Environment</p>
              <p className="text-[10px] text-text-secondary">Fully Secure & Insured</p>
            </div>
          </motion.div>

          {/* Floating Card 2: Learning Through Play */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-8 right-0 sm:right-4 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-md border border-slate-100 flex items-center gap-2.5 z-30"
          >
            <div className="p-2 bg-amber-50 text-amber-500 rounded-xl">
              <Heart className="w-4 h-4 fill-current" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-text-primary">Learning via Play</p>
              <p className="text-[10px] text-text-secondary">Sensory & Creative Arts</p>
            </div>
          </motion.div>

          {/* Floating Card 3: Experienced Care */}
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-1/4 right-0 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-md border border-slate-100 flex items-center gap-2.5 z-30"
          >
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-text-primary">Ofsted Registered</p>
              <p className="text-[10px] text-text-secondary">Qualified Professional</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
