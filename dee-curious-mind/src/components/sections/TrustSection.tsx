"use client";

import React from "react";
import { Award, ShieldCheck, Users, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Section from "../shared/Section";

const trustItems = [
  {
    icon: Award,
    title: "Experienced Childminder",
    description: "Certified EYFS childcare provider focused on nurturing cognitive development and early milestones.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: ShieldCheck,
    title: "Safe Home Setting",
    description: "A secure, fully insured, child-proof environment equipped with rich sensory play and outdoor spaces.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Users,
    title: "Personal Attention",
    description: "Small group sizes to guarantee individual attention, personalized learning plans, and dedicated care.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Sparkles,
    title: "Learning Through Play",
    description: "Engaging structured play focusing on social interaction, logic building, sensory skills, and arts.",
    color: "bg-amber-50 text-amber-500",
  },
];

export default function TrustSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Section background="white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        {trustItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.08)" }}
              className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 flex flex-col gap-4 group text-left"
            >
              <div className={`p-3.5 w-fit rounded-xl ${item.color} group-hover:scale-105 transition-transform duration-300`}>
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-text-primary font-poppins mt-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-text-secondary font-inter leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
