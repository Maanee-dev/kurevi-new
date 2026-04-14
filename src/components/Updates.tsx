import { motion } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";

const updates = [
  {
    date: "April 12, 2024",
    title: "Revolutionizing Resort Marketing with AI",
    category: "Insights",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },
  {
    date: "April 05, 2024",
    title: "Kurevi Named Top Digital Agency in Maldives",
    category: "News",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
  },
  {
    date: "March 28, 2024",
    title: "New SEO Strategies for Luxury Travel",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  }
];

export default function Updates() {
  return (
    <section id="updates" className="py-32 md:py-48 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-7xl mb-6 font-light">Recent Updates</h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Stay informed with the latest trends, news, and strategic insights from the heart of the Maldives' digital landscape.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="text-[10px] uppercase tracking-[0.4em] text-white/60 hover:text-white transition-colors flex items-center gap-4 group">
              View All Insights <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {updates.map((update, index) => (
            <motion.div
              key={update.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.15, 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-8 border border-white/10">
                <motion.img
                  src={update.image}
                  alt={update.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-[8px] uppercase tracking-[0.3em] text-white">
                    {update.category}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-light">
                  <Calendar size={12} strokeWidth={1} />
                  {update.date}
                </div>
                <h3 className="text-2xl font-light group-hover:text-white/80 transition-colors leading-tight">
                  {update.title}
                </h3>
                <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-white/40" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
