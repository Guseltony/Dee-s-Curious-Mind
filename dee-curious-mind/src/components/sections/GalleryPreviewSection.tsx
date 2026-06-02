"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Image as ImageIcon } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Section from "../shared/Section";
import SectionHeading from "../shared/SectionHeading";

const galleryItems = [
  {
    image: "/images/hero_childcare.png",
    title: "Vibrant Playroom",
    category: "Indoor Environment",
    cols: "lg:col-span-2 h-[350px]",
  },
  {
    image: "/images/learning_play.png",
    title: "Sensory Building Blocks",
    category: "Structured Play",
    cols: "h-[300px]",
  },
  {
    image: "/images/creative_activity.png",
    title: "Watercolor Painting",
    category: "Creative Arts",
    cols: "h-[320px]",
  },
  {
    image: "/images/nature_explore.png",
    title: "Seedling Planting",
    category: "Outdoor Learning",
    cols: "h-[320px]",
  },
  {
    image: "/images/social_group.png",
    title: "Cozy Story Corner",
    category: "Early Literacy",
    cols: "lg:col-span-2 h-[350px]",
  },
];

export default function GalleryPreviewSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Section background="white" id="gallery-preview">
      {/* Title */}
      <SectionHeading
        title="Our Environment & Activities"
        subtitle="A visual peek into the safe learning environments, creative work, and garden play our kids enjoy daily."
        badge="Photo Gallery"
      />

      {/* Masonry-Style Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {galleryItems.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={`relative rounded-2xl overflow-hidden shadow-sm group cursor-pointer border border-slate-100 ${item.cols}`}
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Hover Backdrop Overlay */}
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
              {/* Floating Center Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-all duration-300">
                <Plus className="w-6 h-6" />
              </div>

              {/* Title & Category Info */}
              <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 text-left">
                <span className="text-xs font-semibold text-primary-hover uppercase tracking-wider">
                  {item.category}
                </span>
                <h4 className="text-lg font-bold text-white font-poppins mt-1">
                  {item.title}
                </h4>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <div className="mt-12 text-center">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-primary/30 hover:bg-slate-50 text-text-primary px-7 py-3 rounded-xl font-bold tracking-wide transition-all hover:translate-y-[-1px] shadow-sm"
        >
          <ImageIcon className="w-4 h-4 text-primary" />
          View Full Gallery
        </Link>
      </div>
    </Section>
  );
}
