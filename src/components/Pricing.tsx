import { motion, useScroll, useTransform } from "motion/react";
import { Check, X, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRef, useState, useEffect } from "react";

const packages = [
  {
    name: "STARTER",
    price: "8,500",
    target: "Great for freelancers, home-based businesses, and new startups",
    features: [
      "3 Custom Designed Pages",
      "Mobile-Friendly Design",
      "Contact Form Integration",
      "Social Media Links",
      "Basic SEO Setup",
      "2 Weeks Free Support",
    ],
    notIncluded: [
      "Product or Service Gallery",
      "Basic Content Management",
      "Local Payment Gateway",
      "Multilingual Support",
      "Admin Dashboard (CMS)",
      "E-commerce Functionality",
    ],
    popular: false,
  },
  {
    name: "BUSINESS",
    price: "15,000",
    target: "Perfect for small shops, service providers, and growing brands",
    features: [
      "6 Custom Designed Pages",
      "Optimized for Mobile Devices",
      "Contact Form Integration",
      "Social Media Links",
      "On-Page SEO",
      "Product or Service Gallery",
      "Basic Content Management",
      "Local Payment Gateway",
      "1 Month Free Support",
    ],
    notIncluded: [
      "Multilingual Support",
      "Admin Dashboard (CMS)",
      "E-commerce Functionality",
      "Monthly Analytics Report",
    ],
    popular: true,
  },
  {
    name: "PREMIUM",
    price: "25,000+",
    target: "Comprehensive package for established businesses and e-commerce",
    features: [
      "10+ Custom Designed Pages",
      "Advanced Mobile & Speed Optimization",
      "Contact Form Integration",
      "Social Media Links",
      "Full SEO Strategy",
      "Product or Service Gallery",
      "Advanced Content Management",
      "Local Payment Gateway Integration",
      "Multilingual Support (Dhivehi + English)",
      "Admin Dashboard (CMS)",
      "E-commerce Functionality",
      "Monthly Analytics Report",
      "2 Months Free Support",
    ],
    notIncluded: [],
    popular: false,
  }
];

export default function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const { scrollWidth, offsetWidth } = containerRef.current;
      setConstraints({ left: -(scrollWidth - offsetWidth), right: 0 });
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-32 md:py-48 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl mb-8 font-light"
            >
              Service Packages
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl text-muted-foreground font-light"
            >
              Transparent pricing for businesses of all sizes in the Maldives.
            </motion.p>
          </div>
          
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('left')}
              className="rounded-none border-white/10 hover:bg-white hover:text-black transition-all h-12 w-12"
            >
              <ChevronLeft size={20} strokeWidth={1} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('right')}
              className="rounded-none border-white/10 hover:bg-white hover:text-black transition-all h-12 w-12"
            >
              <ChevronRight size={20} strokeWidth={1} />
            </Button>
          </div>
        </div>

        <div 
          ref={containerRef}
          className="flex overflow-x-auto gap-px bg-white/10 border border-white/10 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.15, 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="min-w-full md:min-w-[450px] lg:min-w-[400px] p-12 bg-black flex flex-col group hover:bg-white/[0.02] transition-colors duration-500 snap-center"
            >
              <div className="mb-10">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 1 }}
                  className="text-[10px] font-sans font-light uppercase tracking-[0.4em] text-muted-foreground mb-4"
                >
                  {pkg.name}
                </motion.h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-light text-muted-foreground">MVR</span>
                  <span className="text-5xl font-display font-light">{pkg.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-4 font-light min-h-[40px]">
                  {pkg.target}
                </p>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {pkg.features.map((feature, fIndex) => (
                  <motion.div 
                    key={feature} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.4 + (fIndex * 0.05), duration: 0.8 }}
                    className="flex items-start gap-3 text-sm font-light"
                  >
                    <Check className="w-4 h-4 text-white/40 shrink-0 mt-0.5" strokeWidth={1} />
                    <span>{feature}</span>
                  </motion.div>
                ))}
                {pkg.notIncluded.map((feature, fIndex) => (
                  <motion.div 
                    key={feature} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.4 + ((pkg.features.length + fIndex) * 0.05), duration: 0.8 }}
                    className="flex items-start gap-3 text-sm text-muted-foreground/40 font-light line-through shrink-0 mt-0.5"
                  >
                    <X className="w-4 h-4" strokeWidth={1} />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.8, duration: 1 }}
              >
                <Button 
                  variant={pkg.popular ? "default" : "outline"} 
                  className={`w-full rounded-none h-14 text-[10px] uppercase tracking-[0.3em] transition-all ${
                    pkg.popular ? "bg-white text-black hover:bg-white/90" : "border-white/10 hover:bg-white hover:text-black"
                  }`}
                >
                  Select {pkg.name}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

