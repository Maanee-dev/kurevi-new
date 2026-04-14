import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 md:py-64 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Quote className="w-16 h-16 mx-auto mb-16 text-white/10" strokeWidth={1} />
            </motion.div>
            
            <motion.blockquote 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-5xl  font-light leading-tight mb-16"
            >
              "Kurevi really helped us take Maldives Serenity Travels to the next level. As a local business, their team understood our goals and the Maldivian market perfectly."
            </motion.blockquote>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-none overflow-hidden mb-6 border border-white/10">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQF9gtFajlniMw/profile-displayphoto-crop_800_800/B56Z1qQv62KAAI-/0/1775604273773?e=1777507200&v=beta&t=JsDdfSDQ3L0H0MlRlMw5Zcf0pNMNhi9e0_Og8jbxukg"
                  alt="Maanee Ali"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-xl font-display  font-light">Maanee Ali</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-[0.4em] mt-2">Maldives Serenity Travels</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
