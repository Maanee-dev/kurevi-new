import { motion, useScroll, useTransform } from "motion/react";

const MaskText = ({ children, delay = 0 }: { children: any; delay?: number }) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-white origin-top z-20 pointer-events-none opacity-10"
      />
    </div>
  );
};

export default function About() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section id="about" className="py-32 md:py-48 relative overflow-hidden bg-black">
      {/* Ambient Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-[100px]"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-[100px]"
          animate={{ 
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-light"
            >
              The Kurevi Story
            </motion.h2>
            
            <div className="space-y-8 text-xl text-muted-foreground leading-relaxed font-light">
              <MaskText delay={0.2}>
                <p>
                  Based in the Maldives, Kurevi is your trusted digital marketing partner. Our team blends global expertise with local insights to help you thrive in this unique market.
                </p>
              </MaskText>
              
              <MaskText delay={0.4}>
                <p>
                  We specialize in targeting both high-value tourists and local communities, delivering results for resorts, diving centers, and retail businesses in Malé.
                </p>
              </MaskText>
              
              <MaskText delay={0.6}>
                <p>
                  What sets us apart is our focus on combining innovative digital strategies with cultural relevance, ensuring campaigns resonate with both international visitors and Maldivian consumers.
                </p>
              </MaskText>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-none overflow-hidden border border-white/10 bg-white/5 relative group">
              <motion.img
                style={{ y }}
                src="https://www.kurevi.com/1bcb3b6b-4f58-4076-a003-942384d56be7.png"
                alt="Maldives Office"
                className="w-full h-[140%] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
