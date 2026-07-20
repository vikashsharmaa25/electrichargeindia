import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImageMarquee from "@/components/ImageMarquee";
import TrustSignals from "@/components/TrustSignals";
import About from "@/components/About";
import Services from "@/components/Services";
import InvestmentModels from "@/components/InvestmentModels";
import Applicants from "@/components/Applicants";
import Gallery from "@/components/Gallery";
import Timeline from "@/components/Timeline";
import Documents from "@/components/Documents";
import MarketGrowth from "@/components/MarketGrowth";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <div className="flex flex-col bg-bg-base">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <ImageMarquee />
      <TrustSignals />
      <About />
      <Services />
      <Gallery />
      <InvestmentModels />
      <Applicants />
      <Timeline />
      <Documents />
      <MarketGrowth />
      <Testimonials />
      <BlogSection />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
