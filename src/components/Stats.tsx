import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";

const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  
  // Extract number and suffix
  const numberMatch = value.match(/\d+/);
  const target = numberMatch ? parseInt(numberMatch[0]) : 0;
  const suffix = value.replace(/\d+/, "");

  useEffect(() => {
    const controls = animate(count, target, {
      duration: duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest).toString() + suffix);
      }
    });
    return controls.stop;
  }, [target, suffix, count, duration]);

  return <motion.span>{displayValue}</motion.span>;
};

const stats = [
  { label: "Positive Client Feedback", value: "95%" },
  { label: "Campaigns Delivered", value: "150+" },
  { label: "Team Members", value: "5+" },
  { label: "Brands We've Helped", value: "40+" },
];

export default function Stats() {
  const [isInView, setIsInView] = useState(false);

  return (
    <section className="py-32 border-y border-white/10 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              onViewportEnter={() => setIsInView(true)}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.15, 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="text-center group"
            >
              <motion.div 
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl font-display font-light text-white mb-4"
              >
                {isInView ? <Counter value={stat.value} /> : "0"}
              </motion.div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-[0.4em] font-light group-hover:text-white transition-colors duration-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
