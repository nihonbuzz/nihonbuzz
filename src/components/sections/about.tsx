"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Globe,
    title: "Wawasan Mendalam",
    description: "Dari tradisi kuno hingga tren modern, kami memberikan wawasan mendalam tentang berbagai aspek kehidupan di Jepang yang inspiratif.",
  },
  {
    icon: Users,
    title: "Komunitas Pecinta Jepang",
    description: "Wadah untuk berdiskusi, bertukar ide, dan memperluas jaringan dengan sesama penggemar budaya Jepang dari berbagai latar belakang.",
  },
  {
    icon: BookOpen,
    title: "Edukasi & Karir",
    description: "Akses materi pembelajaran bahasa Jepang dan peluang karir profesional melalui Career Center kami (Premium).",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Menggali Keindahan <span className="text-primary">Budaya Jepang</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Nihonbuzz hadir untuk menjembatani ketertarikan generasi muda Indonesia terhadap Jepang 
            dengan cara yang ringan, relevan, dan informatif.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left bg-card/30 p-8 rounded-3xl border border-white/5">
             <div>
                <h4 className="text-xl font-bold text-white mb-2">Visi Kami</h4>
                <p className="text-sm text-muted-foreground">
                    Menjadi platform media dan edukasi budaya Jepang yang paling berdampak di Indonesia, menginspirasi generasi muda untuk menjelajah bahasa, budaya, dan karier di Jepang.
                </p>
             </div>
             <div>
                <h4 className="text-xl font-bold text-white mb-2">Misi Utama</h4>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                    <li>Membangun ekosistem belajar dan kerja yang inklusif.</li>
                    <li>Menyediakan konten edukasi & hiburan berkualitas.</li>
                    <li>Menjadi jembatan koneksi Indonesia - Jepang.</li>
                </ul>
             </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-card/50 backdrop-blur border-white/5 hover:border-primary/50 transition-colors duration-300 h-full group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
