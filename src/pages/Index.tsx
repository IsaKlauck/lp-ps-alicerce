
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PurposeSection from '@/components/PurposeSection';
import BenefitsSection from '@/components/BenefitsSection';
import ProfilePaths from '@/components/ProfilePaths';
import SelectionProcess from '@/components/SelectionProcess';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import ApplicationForm from '@/components/ApplicationForm';
import Footer from '@/components/Footer';
import TransformationalServices from '@/components/TransformationalServices';
import ScrollTopButton from '@/components/ScrollTopButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PurposeSection />
      <TransformationalServices />
      <BenefitsSection />
      <ProfilePaths />
      <SelectionProcess />
      <Testimonials />
      <ApplicationForm />
      <FAQSection />
      <Footer />
      <ScrollTopButton />
    </div>
  );
};

export default Index;
