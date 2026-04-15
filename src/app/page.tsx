"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitAbout from '@/components/sections/about/SplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeMediumTitles"
        background="noise"
        cardStyle="gradient-mesh"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "About",          id: "about"},
        {
          name: "Services",          id: "features"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="AW Digital Designs"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="AW Digital Designs"
      description="Professional web design services for businesses. Custom, high-performance websites for $1500 with reliable maintenance."
      autoplayDelay={5000}
      buttons={[
        {
          text: "Get Started",          href: "#contact"},
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/data-driven-planning-helps-this-professional-build-successful-strategy-global-business_482257-132707.jpg?w=1600&h=900&auto=format&fit=crop&q=90",          imageAlt: "Professional Web Design"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cyber-security-experts-working-with-tech-devices-neon-lights_23-2151645652.jpg?w=1600&h=900&auto=format&fit=crop&q=90",          imageAlt: "Digital Solutions"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      tag="Why Choose Us"
      textboxLayout="split"
      useInvertedBackground={false}
      title="Design That Drives Growth"
      description="AW Digital Designs specializes in creating impactful digital storefronts for growing businesses. We combine modern aesthetics with functional performance to ensure your online presence works as hard as you do."
      bulletPoints={[
        {
          title: "Flat Fee Pricing",          description: "Full website builds for just $1500."},
        {
          title: "Monthly Maintenance",          description: "Keep your site secure and updated for only $50/mo."},
        {
          title: "Custom Design",          description: "Tailored layouts that reflect your unique brand identity."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/african-american-team-collaborates-financial-project-business-space_482257-119790.jpg?w=1200&h=800&auto=format&fit=crop&q=90"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={true}
      title="Our Service Model"
      description="We believe in transparency and simplicity. Our straightforward approach helps your business thrive online without unnecessary complexity."
      accordionItems={[
        {
          id: "f1",          title: "Development Fee",          content: "A flat fee of $1500 covers the complete design and development of your professional website."},
        {
          id: "f2",          title: "Maintenance Plan",          content: "For just $50/month, we handle updates, security, and minor tweaks to keep your site performing optimally."},
        {
          id: "f3",          title: "Client Communication",          content: "Direct support via awdigitalwebdesigns@gmail.com and 571-789-3731."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-shot-ai-scripts-displayed-pc-monitors_482257-110985.jpg?w=1200&h=800&auto=format&fit=crop&q=90"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient"}}
      tag="Contact Us"
      title="Get Your Project Started"
      description="Ready for a professional website? Reach us at awdigitalwebdesigns@gmail.com or call 571-789-3731."
      inputPlaceholder="Enter your email address"
      buttonText="Get a Quote"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "AW Digital",          items: [
            {
              label: "Email: awdigitalwebdesigns@gmail.com",              href: "mailto:awdigitalwebdesigns@gmail.com"},
            {
              label: "Phone: 571-789-3731",              href: "tel:+15717893731"},
          ],
        },
      ]}
      logoText="AW Digital Designs"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}