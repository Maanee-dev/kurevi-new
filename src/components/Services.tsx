import { motion } from "motion/react";
import { 
  Search, 
  Share2, 
  MapPin, 
  Camera, 
  Mail, 
  BarChart3,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "SEO & Content Marketing",
    description: "Improve your search rankings with our targeted SEO strategies and high-quality content tailored for your audience.",
    icon: Search,
    color: "text-white",
    size: "lg"
  },
  {
    title: "Social Media Advertising",
    description: "Reach your ideal customers through precisely targeted social media campaigns on platforms like Facebook and Instagram.",
    icon: Share2,
    color: "text-white",
    size: "md"
  },
  {
    title: "Local Market Expertise",
    description: "Leverage our deep understanding of Maldivian consumer behavior and digital trends.",
    icon: MapPin,
    color: "text-white",
    size: "md"
  },
  {
    title: "Visual Storytelling",
    description: "Showcase your brand with stunning visuals that capture the essence of the Maldives and your business.",
    icon: Camera,
    color: "text-white",
    size: "md"
  },
  {
    title: "Email Marketing",
    description: "Build lasting relationships with your customers through personalized email campaigns that convert.",
    icon: Mail,
    color: "text-white",
    size: "md"
  },
  {
    title: "Analytics & Reporting",
    description: "Make data-driven decisions with our comprehensive analytics and clear performance reports.",
    icon: BarChart3,
    color: "text-white",
    size: "lg"
  }
];

const FloatingIcon = ({ Icon, index }: any) => {
  return (
    <motion.div
      className="absolute text-white/5 pointer-events-none"
      style={{
        left: `${(index * 20) % 100}%`,
        top: `${(index * 15) % 100}%`,
      }}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0],
        opacity: [0.02, 0.05, 0.02],
      }}
      transition={{
        duration: 5 + index,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Icon size={120} strokeWidth={0.5} />
    </motion.div>
  );
};

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-48 bg-black relative overflow-hidden">
      {/* Ambient Icons */}
      <div className="absolute inset-0 z-0">
        {services.map((s, i) => (
          <FloatingIcon key={i} Icon={s.icon} index={i} />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl mb-8 font-light"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-muted-foreground font-light"
          >
            Comprehensive digital marketing solutions, executed with cinematic precision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.1, 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ 
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                transition: { duration: 0.3 }
              }}
              className={`group p-12 bg-black transition-all duration-500 ${
                service.size === 'lg' ? 'lg:col-span-2' : ''
              }`}
            >
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                viewport={{ once: true }}
                transition={{ 
                  scale: { delay: index * 0.1 + 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] },
                  rotate: { duration: 0.3 }
                }}
                className={`w-12 h-12 flex items-center justify-center mb-10 transition-transform duration-500 ${service.color}`}
              >
                <service.icon size={32} strokeWidth={1} />
              </motion.div>
              <h3 className="text-3xl mb-6 font-display font-light">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-10 font-light">
                {service.description}
              </p>
              <motion.div 
                className="flex items-center text-[10px] font-sans font-light uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-300"
                whileHover={{ x: 10 }}
              >
                Explore <ArrowRight className="ml-4 w-4 h-4" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Custom Solution CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-32 p-12 md:p-24 bg-white/5 border border-white/10 relative overflow-hidden group"
        >
          {/* Animated Background Gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"
            animate={{ 
              x: ["-100%", "100%"],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl text-center md:text-left"
            >
              <h3 className="text-4xl md:text-6xl mb-6 font-light">Need a Custom Solution?</h3>
              <p className="text-xl text-muted-foreground font-light">
                We work with retail stores, service providers, logistics companies, and more. Let's build the right website for your business in the Maldives.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="rounded-none px-12 h-16 text-[12px] uppercase tracking-[0.3em] bg-white text-black hover:bg-white/90 whitespace-nowrap">
                  Request Custom Package
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
