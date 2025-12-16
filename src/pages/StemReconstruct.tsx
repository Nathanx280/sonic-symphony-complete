import { motion } from 'framer-motion';
import { MainNav } from '@/components/MainNav';
import { Layers, Mic, Drum, Piano, Waves, ArrowRight } from 'lucide-react';

const stemTypes = [
  { name: 'Vocals', icon: <Mic className="w-6 h-6" />, color: 'from-neon-magenta to-secondary' },
  { name: 'Drums', icon: <Drum className="w-6 h-6" />, color: 'from-neon-orange to-secondary' },
  { name: 'Bass', icon: <Waves className="w-6 h-6" />, color: 'from-neon-purple to-accent' },
  { name: 'Other', icon: <Piano className="w-6 h-6" />, color: 'from-neon-cyan to-primary' },
];

export default function StemReconstruct() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-xl bg-background/50 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-accent flex items-center justify-center shadow-[0_0_30px_hsl(var(--neon-purple)/0.5)]">
                <Layers className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold tracking-wider bg-gradient-to-r from-neon-purple via-accent to-neon-magenta bg-clip-text text-transparent">
                  STEM RECONSTRUCT
                </h1>
                <p className="text-xs text-muted-foreground tracking-widest uppercase">
                  AI Stem Separation & Rebuild
                </p>
              </div>
            </motion.div>
            <MainNav />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <div className="glass-panel p-8 space-y-6">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-neon-purple/20 to-accent/20 flex items-center justify-center">
              <Layers className="w-10 h-10 text-neon-purple" />
            </div>

            <h2 className="font-display text-3xl font-bold">AI Stem Separation & Rebuild</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Separate any song into its component stems using state-of-the-art AI,
              then reconstruct with custom modifications. Export individual stems or
              the complete rebuilt track.
            </p>

            <div className="flex items-center justify-center gap-4 pt-6 flex-wrap">
              {stemTypes.map((stem, i) => (
                <motion.div
                  key={stem.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${stem.color} flex flex-col items-center justify-center gap-1 text-primary-foreground shadow-lg`}>
                    {stem.icon}
                    <span className="text-xs font-medium">{stem.name}</span>
                  </div>
                  {i < stemTypes.length - 1 && (
                    <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground hidden md:block" />
                  )}
                </motion.div>
              ))}
            </div>

            <div className="pt-8 space-y-4">
              <div className="flex items-center justify-center gap-6 text-sm">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-green" />
                  Demucs AI Engine
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  High Quality Mode
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-purple" />
                  Batch Processing
                </span>
              </div>
            </div>

            <div className="pt-6 text-sm text-muted-foreground">
              <p>🚧 Feature from Sonic Alchemist - Integration pending</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
