
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PainPoints from '../components/PainPoints';
import SignupSection from '../components/SignupSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <PainPoints />
      <SignupSection />
      <Footer />
    </div>
  );
};

export default Index;
