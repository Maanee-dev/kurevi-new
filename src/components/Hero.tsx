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
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block text-[10px] font-sans font-light tracking-[0.4em] uppercase mb-6 text-muted-foreground/60">
              Digital Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-light leading-[1.1] mb-8"
          >
            Elevate Your Brand <br />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 2, delay: 1 }}
              className="opacity-40"
            >
              in the Maldives
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-muted-foreground/80 max-w-lg mb-12 leading-relaxed font-light"
          >
            Strategic digital marketing for premium island brands.
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
              <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent rounded-none blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <Button size="lg" className="relative rounded-none px-10 h-14 text-[11px] uppercase tracking-[0.3em] bg-white text-black hover:bg-white/90 group">
                GET STARTED
                <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button size="lg" variant="link" className="text-white/60 rounded-none px-0 h-14 text-[11px] uppercase tracking-[0.3em] hover:text-white transition-colors">
                Our Services
              </Button>
            </motion.div>
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
