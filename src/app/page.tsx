"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

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
          name: "About",
          id: "about",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Aiden Tech Solutions"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Aiden Tech Solutions"
      description="Empowering your business with scalable, AI-driven infrastructure and modern software solutions."
      buttons={[
        {
          text: "Get Started",
          href: "#contact",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/data-driven-planning-helps-this-professional-build-successful-strategy-global-business_482257-132707.jpg",
          imageAlt: "AI Data Visualization",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cyber-security-experts-working-with-tech-devices-neon-lights_23-2151645652.jpg",
          imageAlt: "Code Development",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hallway-building_23-2149397571.jpg",
          imageAlt: "Cloud Architecture",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/digital-low-poly-abstract-background-with-connecting-lines-dots_1048-6337.jpg",
          imageAlt: "Neural Network",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/general-director-reviewing-data-analytics-with-her-team-successful-development-plan_482257-118674.jpg",
          imageAlt: "Data Projection",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-wave-texture-background_474888-7161.jpg",
          imageAlt: "Digital Tech",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Built for Innovation"
      description="At Aiden Tech Solutions, we bridge the gap between complex digital challenges and streamlined, effective software systems. Our team provides custom development, cloud strategy, and AI-led business intelligence tailored to your specific goals."
      bulletPoints={[
        {
          title: "Scalable Infrastructure",
          description: "Cloud systems that grow as you do.",
        },
        {
          title: "AI Integration",
          description: "Leveraging machine learning for smart operations.",
        },
        {
          title: "Custom Software",
          description: "Tailored code designed for your unique needs.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/african-american-team-collaborates-financial-project-business-space_482257-119790.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={true}
      title="Comprehensive Capabilities"
      description="High-impact services that drive digital performance and operational growth."
      accordionItems={[
        {
          id: "f1",
          title: "Enterprise Software",
          content: "Robust, enterprise-grade software development for critical business tasks.",
        },
        {
          id: "f2",
          title: "Data Analytics",
          content: "Extracting meaningful business insights through custom analytics and ML.",
        },
        {
          id: "f3",
          title: "Cloud Migration",
          content: "Secure, efficient migration from legacy to modern cloud infrastructure.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-shot-ai-scripts-displayed-pc-monitors_482257-110985.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split-description"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Marcus V.",
          date: "Oct 2024",
          title: "CEO",
          quote: "Aiden Tech completely transformed our data pipeline. Efficient and reliable.",
          tag: "Tech",
          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-equity-analyst-working-proprietary-firm-reading-annual-company-reports-evaluate_482257-132953.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/data-driven-planning-helps-this-professional-build-successful-strategy-global-business_482257-132707.jpg",
          imageAlt: "portrait professional executive tech industry",
        },
        {
          id: "2",
          name: "Sarah L.",
          date: "Sep 2024",
          title: "Lead Engineer",
          quote: "Incredible expertise in cloud scalability. Professional and fast.",
          tag: "SaaS",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-girl-white-blazer-looks-nervous_114579-15696.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/cyber-security-experts-working-with-tech-devices-neon-lights_23-2151645652.jpg",
          imageAlt: "portrait professional executive tech industry",
        },
        {
          id: "3",
          name: "James K.",
          date: "Aug 2024",
          title: "Director",
          quote: "The AI integration has saved our team hundreds of hours per week.",
          tag: "Enterprise",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-posing-with-blue-jacket_23-2149020770.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/hallway-building_23-2149397571.jpg",
          imageAlt: "portrait professional executive tech industry",
        },
        {
          id: "4",
          name: "Emily D.",
          date: "Jul 2024",
          title: "Founder",
          quote: "Professional, knowledgeable, and always on schedule. Highly recommended.",
          tag: "Startup",
          avatarSrc: "http://img.b2bpic.net/free-photo/middle-age-businessman-smiling-happy-standing-city_839833-25759.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/digital-low-poly-abstract-background-with-connecting-lines-dots_1048-6337.jpg",
          imageAlt: "portrait professional executive tech industry",
        },
        {
          id: "5",
          name: "David W.",
          date: "Jun 2024",
          title: "CTO",
          quote: "The best technical partner we've had. Excellent communication.",
          tag: "Fintech",
          avatarSrc: "http://img.b2bpic.net/free-photo/side-view-woman-holding-tablet_23-2149927578.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/general-director-reviewing-data-analytics-with-her-team-successful-development-plan_482257-118674.jpg",
          imageAlt: "portrait professional executive tech industry",
        },
      ]}
      title="Trusted by Leaders"
      description="Hear what our partners have to say about working with us."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Let's Talk"
      title="Ready to scale?"
      description="Reach out today to discuss your project and get a custom strategy."
      inputPlaceholder="Enter your email address"
      buttonText="Send Request"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#features",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "info@aidentechnology.com",
              href: "mailto:info@aidentechnology.com",
            },
            {
              label: "+1 (555) 123-4567",
              href: "tel:+15551234567",
            },
          ],
        },
      ]}
      logoText="Aiden Tech"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
