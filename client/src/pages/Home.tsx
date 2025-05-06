import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsBanner from '@/components/StatsBanner';
import MissionCards from '@/components/MissionCards';
import FeatureSection from '@/components/FeatureSection';
import CTASection from '@/components/CTASection';
import TestimonialSection from '@/components/TestimonialSection';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Full-screen animated background */}
      <AnimatedBackground />
      
      {/* Screen noise overlay */}
      <div className="screen-noise fixed inset-0 pointer-events-none z-0"></div>
      
      {/* Main content with proper contrast and padding */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <StatsBanner />
        <MissionCards />
        <FeatureSection />
        <CTASection />
        <TestimonialSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
