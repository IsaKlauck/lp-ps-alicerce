
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProfilePaths from '@/components/ProfilePaths';
import SelectionProcess from '@/components/SelectionProcess';
import FAQSection from '@/components/FAQSection';
import ApplicationForm from '@/components/ApplicationForm';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Toaster />
      <Navbar />
      <HeroSection />
      <ProfilePaths />
      <SelectionProcess />
      <ApplicationForm />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
