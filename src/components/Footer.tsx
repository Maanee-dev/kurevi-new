import { Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-black pt-32 pb-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex flex-col mb-10">
              <span className="text-2xl font-display font-light tracking-[0.2em] uppercase">Kurevi</span>
              <span className="text-[8px] font-sans font-light text-muted-foreground uppercase tracking-[0.4em] mt-1">
                Digital Marketing Agency
              </span>
            </a>
            <p className="text-muted-foreground leading-relaxed mb-12 font-light text-sm">
              Kurevi is a Maldives-based digital marketing agency specializing in helping businesses thrive through cinematic storytelling and local market expertise.
            </p>
            <div className="flex gap-8">
              <a 
                href="https://instagram.com/kurevi.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-all"
              >
                <Instagram size={20} strokeWidth={1} />
              </a>
              <a 
                href="https://tiktok.com/@kureviico" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-all"
              >
                <span className="font-light text-[10px] uppercase tracking-widest">TikTok</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-sans font-light uppercase tracking-[0.4em] mb-10 text-muted-foreground">Navigation</h4>
            <ul className="space-y-6">
              {["About", "Services", "Portfolio", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm font-light text-muted-foreground hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-sans font-light uppercase tracking-[0.4em] mb-10 text-muted-foreground">Expertise</h4>
            <ul className="space-y-6">
              {[
                "SEO & Content",
                "Social Media",
                "Local Strategy",
                "Visual Storytelling",
                "Analytics",
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm font-light text-muted-foreground hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] font-sans font-light uppercase tracking-[0.4em] mb-10 text-muted-foreground">Journal</h4>
            <p className="text-sm font-light text-muted-foreground mb-8">
              Subscribe for digital marketing insights.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Your Email" className="bg-white/5 border-white/10 rounded-none h-12 text-sm focus:border-white transition-colors" />
              <Button size="icon" className="shrink-0 rounded-none h-12 w-12 bg-white text-black hover:bg-white/90">
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-sans font-light uppercase tracking-[0.3em] text-muted-foreground">
            © 2025 Kurevi Digital Marketing Agency.
          </p>
          <div className="flex gap-12 text-[10px] font-sans font-light uppercase tracking-[0.3em] text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
