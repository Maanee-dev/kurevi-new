import { motion } from "motion/react";

const codeContent = `# Kurevi Digital Marketing Strategy
# Optimized for Maldives market

class DigitalCampaign:
    def __init__(self, target, platform):
        self.target = target
        self.platform = platform
        self.metrics = {}

    def launch(self):
        return f"Campaign live on {self.platform} targeting {self.target}"

class MaldivesStrategy(DigitalCampaign):
    def __init__(self):
        super().__init__(
            target="luxury travelers",
            platform="Instagram, Google Ads"
        )
        self.localized = True

    def analyze(self, data):
        engagement = data.get('engagement', 0)
        if engagement > 8.5:
            return "Optimize for conversions"
        return "Boost awareness"

# Initialize and run campaign
campaign = MaldivesStrategy()
print(campaign.launch())
print(campaign.analyze({'engagement': 9.2}))`;

export default function CodeSection() {
  return (
    <section className="py-32 bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-none overflow-hidden border border-white/10 shadow-2xl bg-black"
          >
            {/* Window Header */}
            <div className="bg-black px-4 py-3 flex items-center justify-between border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
              <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">strategy.py</div>
              <div className="w-12" />
            </div>

            {/* Code Content */}
            <div className="p-8 md:p-12 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
              <pre className="text-zinc-100">
                {codeContent.split('\n').map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.02 }}
                    className="flex"
                  >
                    <span className="w-8 text-zinc-800 select-none">{i + 1}</span>
                    <code className="whitespace-pre">
                      {line.trim().startsWith('#') ? (
                        <span className="text-zinc-500">{line}</span>
                      ) : (
                        line.split(/(".*?"|'.*?'|\b(?:class|def|return|if|else|elif|for|while|import|from|as|print|super|self|None|True|False)\b|\d+\.?\d*|[{}()[\].,:+\-*/=<>!])/g).map((part, j) => {
                          if (!part) return null;
                          if (/^(".*"|'.*')$/.test(part)) return <span key={j} className="text-orange-300">{part}</span>;
                          if (/^(class|def|return|if|else|elif|for|while|import|from|as)$/.test(part)) return <span key={j} className="text-purple-400 font-bold">{part}</span>;
                          if (/^(print|super|self|None|True|False)$/.test(part)) return <span key={j} className="text-blue-400">{part}</span>;
                          if (/^\d+\.?\d*$/.test(part)) return <span key={j} className="text-green-400">{part}</span>;
                          if (/^[{}()[\].,:+\-*/=<>!]$/.test(part)) return <span key={j} className="text-zinc-400">{part}</span>;
                          return part;
                        })
                      )}
                    </code>
                  </motion.div>
                ))}
              </pre>
            </div>
          </motion.div>
          
          <div className="mt-16 text-center">
            <p className="text-muted-foreground  font-display text-2xl font-light opacity-60">
              "Data-driven strategies, refined for the Maldivian landscape."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
