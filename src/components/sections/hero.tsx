"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.610, 0.355, 1.000],
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-[110vh] flex flex-col items-center justify-center overflow-hidden w-full">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full opacity-30 pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container px-4 mx-auto flex flex-col items-center text-center gap-8"
      >
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm shadow-inner text-sm text-foreground/80 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Connecting Indonesia & Japan</span>
          </div>
        </motion.div>

        <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]"
        >
          Membuka Akses <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
            & Mewujudkan Harapan
          </span>
        </motion.h1>

        <motion.p 
            variants={itemVariants}
            className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          Nihonbuzz Academy lahir dari semangat untuk menghadirkan pengalaman belajar bahasa dan budaya Jepang yang tidak sekadar informatif, tetapi juga inspiratif. <br/>Kami percaya bahwa bahasa adalah jembatan peradaban, dan melalui bahasa Jepang, terbentang kesempatan luas bagi siapa pun yang ingin menapaki dunia baru, baik dalam pendidikan, karier, maupun pengembangan diri. <br/>Dengan memadukan metode pembelajaran modern, pendekatan interaktif, serta bimbingan pengajar yang berpengalaman, kami berupaya menciptakan ruang belajar yang hangat, relevan, dan penuh makna. <br/>Lebih dari sekadar kursus, Nihonbuzz Academy adalah mitra perjalanan, yang menemani setiap langkah generasi muda Indonesia dalam mengenal, memahami, dan merangkai masa depan melalui bahasa dan budaya Jepang.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white min-w-[160px] h-12 shadow-[0_0_40px_-10px_rgba(255,69,0,0.5)]">
            Explore Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full border-white/10 hover:bg-white/5 min-w-[160px] h-12">
            View Portfolio
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
