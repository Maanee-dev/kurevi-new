import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const TypingText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const characters = text.split("");
  
  return (
    <motion.span className="inline-block">
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: delay + i * 0.03,
            ease: "easeIn"
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const FloatingParticle = ({ index }: any) => {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  const randomDuration = 10 + Math.random() * 20;
  const randomDelay = Math.random() * 5;

  return (
    <motion.div
      className="absolute w-1 h-1 bg-white/20 rounded-full"
      style={{ left: `${randomX}%`, top: `${randomY}%` }}
      animate={{
        y: [0, -100, 0],
        opacity: [0, 0.5, 0],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        delay: randomDelay,
        ease: "linear",
      }}
    />
  );
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('https://q-xx.bstatic.com/xdata/images/city/608x352/674773.webp?k=f65fb36a6b12a3f09a07232ef7946deb46871c0d5a308d3e16ff127d61233f41&o=')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: y1
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
        
        {/* Ambient Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <FloatingParticle key={i} index={i} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-display font-light leading-[0.9] mb-12 "
          >
            Boost Your Brand <br />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 2, delay: 1 }}
              className="opacity-50"
            >
              in Maldives
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed font-light"
          >
            Kurevi is Maldives' premier digital marketing agency, specializing in helping resorts, travel companies, and local businesses grow through strategic SEO and conversion-focused design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-none blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <Button size="lg" className="relative rounded-none px-12 h-16 text-[12px] uppercase tracking-[0.3em] bg-white text-black hover:bg-white/90 group">
                GET STARTED
                <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button size="lg" variant="link" className="text-white rounded-none px-0 h-16 text-[12px] uppercase tracking-[0.3em] hover:text-muted-foreground">
                Our Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Proof Marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20 pt-10 border-t border-border/50 overflow-hidden"
          >
            <div className="flex items-center gap-8 mb-8">
              <span className="text-sm font-medium uppercase tracking-widest opacity-40 whitespace-nowrap">Trusted by 40+ Brands</span>
              <div className="h-[1px] flex-grow bg-white/10" />
            </div>
            
            <div className="relative flex overflow-hidden">
              <motion.div 
                className="flex gap-16 items-center whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {[...Array(10)].map((_, i) => (
                  <span key={i} className="text-xl font-display font-light text-white/20 tracking-[0.2em] uppercase">
                    {["Resorts", "Luxury", "Travel", "Maldives", "Strategy", "Digital"][i % 6]}
                  </span>
                ))}
                {/* Duplicate for seamless loop */}
                {[...Array(10)].map((_, i) => (
                  <span key={i + 10} className="text-xl font-display font-light text-white/20 tracking-[0.2em] uppercase">
                    {["Resorts", "Luxury", "Travel", "Maldives", "Strategy", "Digital"][i % 6]}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"
          animate={{ height: [48, 24, 48], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
