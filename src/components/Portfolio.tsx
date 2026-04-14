import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import { CheckCircle2, Star } from "lucide-react";

const typewriterWords = ["overhaul", "revitalization", "reinvention", "evolution"];

const Typewriter = ({ words }: any) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt((Math.random() * 100).toString())));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-white relative">
      {`${words[index].substring(0, subIndex)}`}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
        className="inline-block w-[2px] h-[1em] bg-white ml-1 align-middle"
      />
    </span>
  );
};

export default function Portfolio() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="portfolio" className="py-32 md:py-48 bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl mb-6 font-light"
          >
            Featured Case Study
          </motion.h2>
          <div className="text-2xl md:text-3xl text-muted-foreground flex flex-wrap items-center gap-x-4 font-light">
            Maldives Serenity Travels Complete Digital
            <div className="relative inline-block min-w-[200px]">
              <Typewriter words={typewriterWords} />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-4xl md:text-5xl mb-8 font-light">360° Digital Transformation</h3>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                We completely transformed Maldives Serenity Travels from a traditional tour operator to a digital-first luxury travel brand.
              </p>
            </div>

            <div className="space-y-10">
              {[
                {
                  title: "Conversion-Optimized Website",
                  desc: "Designed a mobile-first website with immersive visuals and streamlined booking process."
                },
                {
                  title: "Virtual Island Tours",
                  desc: "Created interactive 360° resort experiences that increased engagement by 65%."
                },
                {
                  title: "Targeted Digital Campaigns",
                  desc: "Implemented data-driven marketing across social and search platforms."
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-6"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="text-white/40" size={24} strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-display font-light mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground font-light">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-12 pt-12 border-t border-white/10">
              {[
                { val: "300%", label: "Bookings" },
                { val: "40%", label: "Bounce" },
                { val: "4.9", label: "Rating" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.1), duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="text-4xl font-display font-light text-white mb-2">{stat.val}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-light">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div 
              style={{ rotateX, rotateY }}
              className="rounded-none overflow-hidden border border-white/10 shadow-2xl relative group"
            >
              <img
                src="https://visitmaldives.s3.amazonaws.com/QoQ53dov/c/jwazcftb-large.jpg"
                alt="Case Study Showcase"
                className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                <div className="text-white">
                  <p className="text-[10px] uppercase tracking-[0.4em] mb-2">View Case Study</p>
                  <h4 className="text-3xl font-display font-light">Serenity Travels</h4>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
