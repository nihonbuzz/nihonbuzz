"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, Zap, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const programs = [
  {
    title: "Bahasa Jepang Dasar",
    level: "Beginner",
    description: "Program fondasi bagi pemula nol. Pelajari Hiragana, Katakana, dan percakapan dasar sehari-hari.",
    features: ["Intensive Class", "Private Group", "Materi Digital", "Sertifikat"],
    popular: false,
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400"
  },
  {
    title: "Persiapan JLPT N5",
    level: "Elementary",
    description: "Target lulus JLPT N5. Fokus pada tata bahasa, kanji dasar, dan latihan soal intensif.",
    features: ["Intensive Class", "Private Group", "Try Out JLPT", "Konsultasi Studi"],
    popular: true,
    color: "from-primary/20 to-orange-500/20",
    iconColor: "text-primary"
  },
  {
    title: "Persiapan JLPT N4",
    level: "Intermediate",
    description: "Lanjutan dari N5. Memperdalam pemahaman pola kalimat dan percakapan untuk studi/kerja.",
    features: ["Intensive Class", "Private Group", "Native Session", "Bimbingan Karir"],
    popular: false,
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400"
  }
];

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary bg-primary/5 px-4 py-1">
            Kurikulum Terstruktur
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pilih Program <span className="text-primary">Sesuai Targetmu</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kelas intensif dengan metode yang terbukti efektif, tersedia dalam format grup maupun privat eksklusif.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div 
                className={`absolute inset-0 bg-gradient-to-b ${program.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} 
              />
              
              <div className="relative h-full bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-primary/50 transition-colors duration-300 flex flex-col">
                {program.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" /> MOST POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <p className={`text-sm font-medium ${program.iconColor} mb-4`}>{program.level}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed min-h-[60px]">
                    {program.description}
                  </p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                     <Badge variant="secondary" className="bg-white/5 hover:bg-white/10 text-xs font-normal">
                        <Zap className="w-3 h-3 mr-1" /> Intensive
                     </Badge>
                     <Badge variant="secondary" className="bg-white/5 hover:bg-white/10 text-xs font-normal">
                        <Users className="w-3 h-3 mr-1" /> Private Group
                     </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    {program.features.slice(2).map((feat, i) => ( // Show distinct features
                        <div key={i} className="flex items-center text-sm text-foreground/80">
                            <CheckCircle2 className={`w-4 h-4 mr-2 ${program.iconColor}`} />
                            {feat}
                        </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300" variant={program.popular ? "default" : "outline"}>
                  Daftar Sekarang
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
