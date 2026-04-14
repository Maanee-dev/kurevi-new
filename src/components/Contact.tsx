import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Contact() {
  const [formStep, setFormStep] = useState(1);
  
  return (
    <section id="contact" className="py-32 md:py-48 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-5xl md:text-7xl mb-12  font-light">Get in Touch</h2>
            <p className="text-xl text-muted-foreground mb-16 leading-relaxed font-light">
              Ready to elevate your brand in the Maldives? Let's discuss your project and how we can help you achieve your goals.
            </p>

            <div className="space-y-12">
              {[
                { icon: MapPin, title: "Location", detail: "H. Malé, Maldives" },
                { icon: Phone, title: "Phone", detail: "+960 722 2966" },
                { icon: Mail, title: "Email", detail: "hello@kurevi.com" },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 rounded-none bg-white/5 flex items-center justify-center text-white/40 border border-white/10">
                    <item.icon size={24} strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-sans font-light uppercase tracking-[0.4em] text-muted-foreground mb-2">{item.title}</h4>
                    <p className="text-lg font-light">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-20"
            >
              <Button size="lg" className="rounded-none px-12 h-16 text-[12px] uppercase tracking-[0.3em] bg-white text-black hover:bg-white/90 group">
                CHAT ON WHATSAPP
                <MessageSquare className="ml-4 w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="p-12 bg-white/5 border border-white/10"
          >
            <div className="mb-12">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl  font-light">Project Inquiry</h3>
                <span className="text-[10px] font-sans font-light uppercase tracking-[0.4em] text-muted-foreground">Step {formStep} of 2</span>
              </div>
              <div className="h-px w-full bg-white/10">
                <motion.div 
                  className="h-full bg-white" 
                  initial={{ width: "50%" }}
                  animate={{ width: formStep === 1 ? "50%" : "100%" }}
                />
              </div>
            </div>

            <form className="space-y-8">
              <AnimatePresence mode="wait">
                {formStep === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8"
                  >
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.3em] font-light text-muted-foreground">Full Name</label>
                      <Input placeholder="John Doe" className="bg-black border-white/10 rounded-none h-14 focus:border-white transition-colors" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.3em] font-light text-muted-foreground">Email Address</label>
                      <Input placeholder="john@example.com" className="bg-black border-white/10 rounded-none h-14 focus:border-white transition-colors" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.3em] font-light text-muted-foreground">Company Name</label>
                      <Input placeholder="Your Resort / Business" className="bg-black border-white/10 rounded-none h-14 focus:border-white transition-colors" />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8"
                  >
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.3em] font-light text-muted-foreground">Service Required</label>
                      <Select>
                        <SelectTrigger className="bg-black border-white/10 rounded-none h-14 focus:border-white transition-colors">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-black border-white/10 text-white rounded-none">
                          <SelectItem value="seo">SEO & Content</SelectItem>
                          <SelectItem value="social">Social Media</SelectItem>
                          <SelectItem value="web">Web Design</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.3em] font-light text-muted-foreground">Project Details</label>
                      <Textarea placeholder="Tell us about your goals..." className="bg-black border-white/10 rounded-none min-h-[150px] focus:border-white transition-colors" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex gap-4 pt-8">
                {formStep === 2 && (
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="flex-1 rounded-none h-14 border-white/10 text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black"
                    onClick={() => setFormStep(1)}
                  >
                    Back
                  </Button>
                )}
                <Button 
                  type="button" 
                  className="flex-[2] rounded-none h-14 bg-white text-black hover:bg-white/90 text-[10px] uppercase tracking-[0.3em]"
                  onClick={() => formStep === 1 ? setFormStep(2) : null}
                >
                  {formStep === 1 ? "Next Step" : "Send Inquiry"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
