import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import AboutPreviewSection from "@/components/sections/AboutPreviewSection";
import ServicesSection from "@/components/sections/ServicesSection";
import LearningApproachSection from "@/components/sections/LearningApproachSection";
import GalleryPreviewSection from "@/components/sections/GalleryPreviewSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import ContactPreviewSection from "@/components/sections/ContactPreviewSection";

export default function Home() {
  return (
    <>
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col w-full overflow-hidden">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Trust & Credibility Badges */}
        <TrustSection />

        {/* 3. About Denise Preview */}
        <AboutPreviewSection />

        {/* 4. Service Cards */}
        <ServicesSection />

        {/* 5. Connected Learning Pathway */}
        <LearningApproachSection />

        {/* 6. Gallery Masonry Teaser */}
        <GalleryPreviewSection />

        {/* 7. Parent Testimonials Carousel */}
        <TestimonialsSection />

        {/* 8. FAQ Accordion Grid */}
        <FaqSection />

        {/* 9. Full-Width CTA Banner */}
        <CtaSection />

        {/* 10. Contact Details & Inquiry Form */}
        <ContactPreviewSection />
      </div>

      {/* Footer Navigation & Copyright */}
      <Footer />

      {/* Floating WhatsApp Action Trigger */}
      <WhatsAppButton />
    </>
  );
}
