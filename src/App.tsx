import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CodeSection from "./components/CodeSection";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Updates from "./components/Updates";
import RequestMeeting from "./components/RequestMeeting";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

export default function App() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-white selection:text-black overflow-x-hidden">
      {/* Cinematic Overlays */}
      <div className="grain-overlay" />
      <div className="cinematic-vignette" />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <CodeSection />
        <Services />
        <Stats />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Updates />
        <RequestMeeting />
        <Contact />
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}
